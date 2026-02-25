"""
V7 전체 표 → HWP 변환 스크립트
─────────────────────────────────────────────
- ProblemRecognitionV7: 1-1 핵심 진입 장벽 표 (4행)
- FeasibilityV7:        2-2 고객 요구사항 대응 표 (2행)
- GrowthV7:             4-1 목표시장 타겟 분류 표 (2행)
- GrowthV7:             4-4 시장진입(GTM) 단계별 액션 표 (2행)

실행: python v7_all_tables.py
출력: feasibility_v7_tables.hwp
"""

import win32com.client  # type: ignore[import]
import os
import time


# ──────────────────────────────────────────
# 색상 헬퍼: 웹 RGB → HWP BGR 변환
# ──────────────────────────────────────────
def rgb(r: int, g: int, b: int) -> int:
    """웹(CSS) RGB → HWP COM BGR 정수값 변환"""
    return (b << 16) | (g << 8) | r


# ──────────────────────────────────────────
# V7 표 데이터 정의
# ──────────────────────────────────────────

TABLES = [
    # ── 1. ProblemRecognitionV7 § 1-1 ────────
    {
        "section": "1. 문제인식 (Problem)",
        "subsection": "1-1. 창업아이템의 개발동기 (고객의 Pain-point)",
        "col_widths": [2000, 8000],
        "headers": ["핵심 진입 장벽", "발생 형태 및 벤처/대학 연구실의 핵심 문제(Pain Point)"],
        "rows": [
            [
                "1. 상용 라이선스의\n살인적 과금",
                "해외 독점 상용 AI 소프트웨어 라이선스는 중소 연구 단위에서 엄두조차 내기 힘든 수억~수십억 원 대의 과금을 강제하여 연구 시작부터 자본의 한계에 봉착합니다.",
            ],
            [
                "2. 전문 IT 인력\n(MLOps) 부재",
                "AlphaFold 등 우수한 무료 글로벌 AI 모델이 공개되어도, 생물학·화학 전공 연구원들이 직접 리눅스 망 구축, 파이썬 환경 설정, GPU 배포 및 MLOps 관리를 병행하는 것은 물리적·시간적으로 불가능합니다.",
            ],
            [
                "3. 강력한 데이터\n외부 유출(보안) 우려",
                "신약 후보 물질 구조는 초격차 기밀 자산(특허)입니다. 기존 SaaS 형태의 AI 플랫폼은 외부 서버(클라우드)로 데이터를 필연적으로 보내야 하므로, 보안에 극도로 보수적인 제약사들은 도입 자체를 전면 거부합니다.",
            ],
            [
                "4. 단일 슈퍼 인프라\n독점 부담",
                "단백질 3D 모델링 등 고사양 연산을 위해서는 대당 수천만 원에 육박하는 AI 인프라(H100, A100 등) 서버 세트가 필요해, 도입 예산을 확보하기 불가능합니다.",
            ],
        ],
    },

    # ── 2. FeasibilityV7 § 2-2 ───────────────
    {
        "section": "2. 실현가능성 (Feasibility)",
        "subsection": "2-2. 고객 요구사항 대응 방안",
        "col_widths": [3000, 7000],
        "headers": ["요구사항 (Pain)", "자사 솔루션 해결 방안"],
        "rows": [
            [
                "1. 비용 장벽\n(가성비)",
                "솔루션 초기 구축비용을 기존 해외 엔진 대비 1/10 수준으로 획기적 절감. 고도화된 연산은 사내 PC 분산 그리딩으로 전기세 수준으로 타격 흡수. 추가로 글로벌 검증 모델 업데이트 보증을 통해 글로벌 최전선 유지.",
            ],
            [
                "2. 태생적 불안감\n(보안성)",
                "AWS, GCP 등 외부 퍼블릭 클라우드로 1바이트의 정보도 나가지 않으며, 회사 내부 IP 주소로만 접근되는 100% 닫힌 폐쇄 생태계를 지원합니다.",
            ],
        ],
    },

    # ── 3. GrowthV7 § 4-1 ────────────────────
    {
        "section": "4. 성장전략 (Business Model & GTM)",
        "subsection": "4-1. 제품·서비스의 목표시장 분석",
        "col_widths": [2000, 3000, 5000],
        "headers": ["타겟 분류", "고객 특징 및 페르소나", "공략 포인트 (Needs)"],
        "rows": [
            [
                "B2B 타겟 (Core)\n[Enterprise & SMB]",
                "국내외 중견·중소 제약사, 국공립 바이오 대학 연구실",
                "AI 도입은 시급하나 수십억 단위 클라우드 인프라와 외부 보안(유출) 위협, 전담 개발 조직 부재에 고통받는 기관.\n→ \"외부 유출 걱정 없는 설치형 제품 수요 돌발\"",
            ],
            [
                "B2C 타겟 (Expansion)\n[Individuals]",
                "신약 AI를 논문에 활용하려는 개인 연구자, 포닥, 대학원생",
                "서버를 구축할 권한이나 자금은 없고, 당장 랩탑이나 개인 노트북으로 AlphaFold 연산을 돌리고 싶어하는 집단.\n→ \"설치 없는 브라우저 즉시 렌더링 수요\"",
            ],
        ],
    },

    # ── 4. GrowthV7 § 4-4 ────────────────────
    {
        "section": None,  # 이미 위에서 섹션 제목 삽입됨, None이면 생략
        "subsection": "4-4. 시장진입(GTM) 및 성과 창출 전략",
        "col_widths": [2000, 8000],
        "headers": ["판매/확장 단계", "상세 GTM(Go-To-Market) 액션 플랜"],
        "rows": [
            [
                "1단계\n(B2C 중심 브랜딩 및\n생태계 침투)",
                "· 클라우드 기반 B2C SaaS 모델을 초저가 혹은 초기 무료 베타 수준으로 선출시.\n"
                "· 국내 주요 약대 및 바이오 인포매틱스 대학원생들에게 무상 보급형 툴로 제공함으로써 시스템(대시보드) 인지도를 넓히고 버그 리포트/튜닝 데이터를 광범위하게 수집합니다.\n"
                "· 생물전공 연구자들이 본 소프트웨어의 사용자 경험(UX)에 완벽히 익숙해지는 '자발적 락인(Lock-in)' 생태계 조성.",
            ],
            [
                "2단계\n(B2B 하이엔드\n강공 돌파 전략)",
                "· B2C에서 검증된 시스템의 무결점 셋팅 안정성을 강력한 무기로 삼습니다.\n"
                "· 기밀 보안이 생명인 중소 제약사 본사와 국공립 연구 센터의 C-Level을 집중 타겟하여 \"우리 플랫폼을 도입했던 학생 연구원들의 퍼포먼스와 동일한 능력을 당신 회사의 사내 폐쇄망에서 완벽 보안으로 누릴 수 있습니다\" 고 설득하는 하향식 POC 도입 제안서를 배포합니다.",
            ],
        ],
    },
]


# ──────────────────────────────────────────
# HWP COM 헬퍼 함수들
# ──────────────────────────────────────────

def _insert_text(hwp, text: str):
    """현재 커서 위치에 텍스트 삽입"""
    act = hwp.HAction
    hs  = hwp.HParameterSet.HInsertText
    act.GetDefault("InsertText", hs.HSet)
    hs.Text = text
    act.Execute("InsertText", hs.HSet)


def _set_char_style(hwp, bold: bool = False, size_pt: int = 10,
                    color: int = None):
    """글자 스타일(굵기, 크기, 색상) 설정"""
    act = hwp.HAction
    hs  = hwp.HParameterSet.HCharShape
    act.GetDefault("CharShape", hs.HSet)
    hs.Height    = size_pt * 100          # 1/100pt 단위
    hs.Bold      = 1 if bold else 0
    if color is not None:
        hs.TextColor = color
    act.Execute("CharShape", hs.HSet)


def _set_para_align(hwp, align: str = "left"):
    """문단 정렬 설정  align: 'left' | 'center' | 'right'"""
    action_map = {
        "left":    "AlignLeft",
        "center":  "AlignCenter",
        "right":   "AlignRight",
        "justify": "AlignJustify",
    }
    action = action_map.get(align, "AlignLeft")
    try:
        hwp.HAction.Run(action)
    except Exception:
        pass


def _set_cell_shading(hwp, bg_color: int):
    """셀 배경색 설정"""
    try:
        act = hwp.HAction
        hs  = hwp.HParameterSet.HCellBorderFill
        act.GetDefault("CellBorderFill", hs.HSet)
        hs.FillAttr.FillType = 1             # 단색 채우기
        hs.FillAttr.SingleColor.Color = bg_color
        act.Execute("CellBorderFill", hs.HSet)
    except Exception as e:
        pass  # 배경색 설정 실패 시 무시하고 계속


def _write_heading(hwp, text: str, level: int = 1):
    """섹션 제목 또는 소제목 삽입"""
    size = 14 if level == 1 else 11
    _set_char_style(hwp, bold=True, size_pt=size, color=rgb(30, 30, 30))
    _set_para_align(hwp, "left")
    _insert_text(hwp, text)
    hwp.HAction.Run("BreakPara")
    # 제목 후 스타일 초기화
    _set_char_style(hwp, bold=False, size_pt=10, color=rgb(30, 30, 30))


def insert_table(hwp, table_data: dict):
    """표 데이터를 받아 현재 커서 위치에 표 삽입"""
    act = hwp.HAction
    hs  = hwp.HParameterSet

    col_widths = table_data["col_widths"]
    headers    = table_data["headers"]
    rows       = table_data["rows"]
    num_cols   = len(headers)
    num_rows   = len(rows) + 1   # 헤더 포함

    # ── 표 생성 ──────────────────────────────
    act.GetDefault("TableCreate", hs.HTableCreation.HSet)
    hs.HTableCreation.Rows        = num_rows
    hs.HTableCreation.Cols        = num_cols
    hs.HTableCreation.WidthType   = 0
    hs.HTableCreation.HeightType  = 0
    hs.HTableCreation.WidthValue  = sum(col_widths)
    hs.HTableCreation.HeightValue = 1000

    col_width_array = hs.HTableCreation.ColWidth
    for i, w in enumerate(col_widths):
        col_width_array.SetItem(i, w)

    act.Execute("TableCreate", hs.HTableCreation.HSet)

    # ── 셀 채우기 ────────────────────────────
    total_cells = num_rows * num_cols

    for cell_idx in range(total_cells):
        row_idx = cell_idx // num_cols
        col_idx = cell_idx  % num_cols

        if cell_idx > 0:
            hwp.HAction.Run("TableRightCell")

        if row_idx == 0:
            # 헤더 행: 검정 배경 + 흰 글자 + 굵게
            _set_cell_shading(hwp, rgb(30, 30, 30))
            _set_char_style(hwp, bold=True, size_pt=10, color=rgb(255, 255, 255))
            _set_para_align(hwp, "center")
            _insert_text(hwp, headers[col_idx])
        else:
            # 데이터 행
            is_left_col = (col_idx == 0)
            _set_char_style(hwp, bold=is_left_col, size_pt=10, color=rgb(30, 30, 30))
            _set_para_align(hwp, "center" if is_left_col else "left")
            cell_text = rows[row_idx - 1][col_idx]
            _insert_text(hwp, cell_text)

    print(f"    ✅ 표 삽입 완료 ({num_rows}행 × {num_cols}열)")


# ──────────────────────────────────────────
# 메인
# ──────────────────────────────────────────

def main(output_path: str = "feasibility_v7_tables.hwp", visible: bool = True):
    print("🚀 HWP COM 오토메이션 시작 (V7 전체 표 삽입)...")

    hwp = win32com.client.Dispatch("HWPFrame.HwpObject")
    hwp.RegisterModule("FilePathCheckDLL", "FilePathCheckerModule")

    hwp.HAction.Run("FileNew")
    print("  📄 새 문서 생성")

    try:
        hwp.XHwpWindows.Item(0).Visible = visible
    except Exception:
        pass

    # 문서 시작 위치로 이동
    hwp.HAction.Run("MoveDocBegin")

    prev_section = None

    for i, table_data in enumerate(TABLES):
        section    = table_data.get("section")
        subsection = table_data.get("subsection", "")

        # 섹션 제목 (새 섹션일 때만)
        if section and section != prev_section:
            if i > 0:
                # 섹션 전 여백
                hwp.HAction.Run("BreakPara")
            print(f"\n  📌 섹션: {section}")
            _write_heading(hwp, section, level=1)
            prev_section = section

        # 소제목
        if subsection:
            print(f"  📎 소제목: {subsection}")
            _write_heading(hwp, subsection, level=2)

        # 표 삽입
        insert_table(hwp, table_data)

        # 표 후 커서를 표 밖으로 빼내기
        hwp.HAction.Run("MoveNextParaEnd")   # 표 다음 문단으로 이동
        hwp.HAction.Run("BreakPara")         # 빈 줄 추가

    # ── 저장 ──────────────────────────────
    abs_output = os.path.abspath(output_path)
    hwp.SaveAs(abs_output, "HWP")
    print(f"\n✅ 완료! 저장 위치: {abs_output}")

    if not visible:
        hwp.Quit()


if __name__ == "__main__":
    main(
        output_path = "feasibility_v7_tables.hwp",
        visible     = True,
    )
