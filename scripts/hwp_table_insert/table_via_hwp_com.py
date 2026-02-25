"""
방식 B: HWP COM 오토메이션을 이용한 표 직접 삽입
- 한글(HWP) 설치 필수 (Windows 환경)
- 기존 양식 .hwp 파일에 표를 직접 삽입 가능
- 누름틀이 있는 경우 해당 위치에 정확히 삽입 가능

설치: pip install pywin32
실행: python table_via_hwp_com.py
"""

import win32com.client  # type: ignore[import]
import os

# ──────────────────────────────────────────
# 색상 헬퍼: 웹 RGB → HWP BGR 변환
# ──────────────────────────────────────────
def rgb(r: int, g: int, b: int) -> int:
    """웹(CSS) RGB 색상을 HWP COM BGR 정수값으로 변환
    
    예시:
        rgb(255, 0, 0)     → 빨강
        rgb(30, 30, 30)    → 거의 검정
        rgb(0, 112, 192)   → 파랑 (파워포인트 테마색)
    """
    return (b << 16) | (g << 8) | r


# ──────────────────────────────────────────
# 표 데이터
# ──────────────────────────────────────────
TABLE_DATA = {
    "headers": ["요구사항 (Pain)", "자사 솔루션 해결 방안"],
    "col_widths": [3000, 7000],  # 1/100mm 단위 (30% : 70%)
    "rows": [
        [
            "1. 비용 장벽\n(가성비)",
            "솔루션 초기 구축비용을 기존 해외 엔진 대비 1/10 수준으로 획기적 절감.\n"
            "고도화된 연산은 사내 PC 분산 그리딩으로 전기세 수준으로 타격 흡수.\n"
            "추가로 글로벌 검증 모델 업데이트 보증을 통해 글로벌 최전선 유지.",
        ],
        [
            "2. 태생적 불안감\n(보안성)",
            "AWS, GCP 등 외부 퍼블릭 클라우드로 1바이트의 정보도 나가지 않으며,\n"
            "회사 내부 IP 주소로만 접근되는 100% 닫힌 폐쇄 생태계를 지원합니다.",
        ],
    ],
}


def _insert_text(hwp, text: str):
    """현재 커서 위치에 텍스트 삽입 (HWP COM 공식 방법)"""
    act = hwp.HAction
    hs  = hwp.HParameterSet.HInsertText
    act.GetDefault("InsertText", hs.HSet)
    hs.Text = text
    act.Execute("InsertText", hs.HSet)


def _set_cell_style(hwp, is_header: bool = False, is_left_col: bool = False):
    """셀 글자 스타일 설정"""
    act = hwp.HAction
    hs  = hwp.HParameterSet.HCharShape
    act.GetDefault("CharShape", hs.HSet)

    hs.Height    = 1000                                    # 10pt (1/100pt 단위)
    hs.Bold      = 1 if (is_header or is_left_col) else 0
    # rgb() 함수로 웹 색상 코드 그대로 사용 가능
    hs.TextColor = rgb(255, 255, 255) if is_header else rgb(30, 30, 30)

    act.Execute("CharShape", hs.HSet)


def insert_table_at_cursor(hwp, data: dict):
    """현재 커서 위치에 표 삽입"""
    act = hwp.HAction
    hs  = hwp.HParameterSet

    num_rows = len(data["rows"]) + 1   # 헤더 포함
    num_cols = len(data["headers"])

    # ── 표 삽입 액션 ─────────────────────────────
    act.GetDefault("TableCreate", hs.HTableCreation.HSet)
    hs.HTableCreation.Rows       = num_rows
    hs.HTableCreation.Cols       = num_cols
    hs.HTableCreation.WidthType  = 0   # 0: 절대값, 1: 쪽 기준 비율
    hs.HTableCreation.HeightType = 0

    # 총 너비 / 높이
    total_width = sum(data["col_widths"])
    hs.HTableCreation.WidthValue  = total_width
    hs.HTableCreation.HeightValue = 1000

    # 열 너비 배열 설정
    col_width_array = hs.HTableCreation.ColWidth
    for i, w in enumerate(data["col_widths"]):
        col_width_array.SetItem(i, w)

    act.Execute("TableCreate", hs.HTableCreation.HSet)
    print("  ✅ 표 생성 완료")

    # 표 생성 직후 커서는 첫 번째 셀(0행 0열)에 위치함
    # Tab      → 다음 셀로 이동 (HWP 표 내부에서)
    # Shift+Tab → 이전 셀로 이동

    # ── 셀 내용 채우기 ────────────────────────────
    total_cells = num_rows * num_cols

    for cell_idx in range(total_cells):
        row_idx = cell_idx // num_cols
        col_idx = cell_idx  % num_cols

        # 첫 번째 셀은 이미 커서가 위치하므로 Tab 이동 불필요
        if cell_idx > 0:
            hwp.HAction.Run("TableRightCell")  # 다음 셀(Tab 동작)

        if row_idx == 0:
            # 헤더 행
            _set_cell_style(hwp, is_header=True)
            _insert_text(hwp, data["headers"][col_idx])
        else:
            # 데이터 행
            cell_text = data["rows"][row_idx - 1][col_idx]
            _set_cell_style(hwp, is_header=False, is_left_col=(col_idx == 0))
            _insert_text(hwp, cell_text)

    print("  ✅ 셀 데이터 입력 완료")


def main(
    template_path: str = None,
    output_path:   str = "output_with_table.hwp",
    field_name:    str = None,   # 누름틀 필드명 (있을 경우)
    visible:       bool = True,  # 한글 창 표시 여부
):
    print("🚀 HWP COM 오토메이션 시작...")

    # ── 한글 실행 ────────────────────────────────
    hwp = win32com.client.Dispatch("HWPFrame.HwpObject")
    hwp.RegisterModule("FilePathCheckDLL", "FilePathCheckerModule")

    # hwp.Visible 속성은 HWP COM 1.0 인터페이스에 없음 → XHwpWindows로 제어
    try:
        hwp.XHwpWindows.Item(0).Visible = visible
    except Exception:
        pass  # 창이 아직 초기화 안 된 경우 무시

    # ── 파일 열기 or 새 문서 ──────────────────────
    if template_path and os.path.exists(template_path):
        hwp.Open(os.path.abspath(template_path))
        print(f"  📂 양식 열기: {template_path}")
    else:
        hwp.HAction.Run("FileNew")
        print("  📄 새 문서 생성")

    # ── 창 표시 (FileNew 이후에도 재시도) ────────
    try:
        hwp.XHwpWindows.Item(0).Visible = visible
    except Exception:
        pass

    # ── 커서 위치 지정 ───────────────────────────
    if field_name:
        # 누름틀 위치로 이동
        hwp.MoveToField(field_name, True, True, True)
        print(f"  🎯 누름틀 '{field_name}' 위치로 이동")
    else:
        # 문서 끝으로 이동 후 새 줄
        hwp.HAction.Run("MoveDocEnd")
        hwp.HAction.Run("BreakPara")
        print("  🔚 문서 끝에 삽입")

    # ── 표 삽입 ──────────────────────────────────
    insert_table_at_cursor(hwp, TABLE_DATA)

    # ── 저장 ────────────────────────────────────
    abs_output = os.path.abspath(output_path)
    hwp.SaveAs(abs_output, "HWP")
    print(f"\n✅ 완료! 저장 위치: {abs_output}")

    # visible=True 이면 창을 닫지 않고 유지 (사용자가 직접 확인 가능)
    if not visible:
        hwp.Quit()


if __name__ == "__main__":
    main(
        template_path = None,                  # 기존 양식 경로 (없으면 새 문서)
        output_path   = "feasibility_v7.hwp",
        field_name    = None,                  # 누름틀 필드명 (없으면 문서 끝에 삽입)
        visible       = True,                  # True: 한글 창 보이기
    )
