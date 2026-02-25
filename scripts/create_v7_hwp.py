"""
V7 컴포넌트 표 → HWP 문서 생성 스크립트 (v2 - 안정화)
HWP COM 자동화로 4개의 HWP 파일 생성
셀 배경색 없이 텍스트 중심으로 안정적 생성
"""

import win32com.client
import os
import time

OUTPUT_DIR = r"d:\workspace\strayCat\hwp_output"
os.makedirs(OUTPUT_DIR, exist_ok=True)

hwp = win32com.client.Dispatch("HWPFrame.HwpObject")
hwp.RegisterModule("FilePathCheckDLL", "FilePathCheckerModule")
hwp.XHwpWindows.Item(0).Visible = True

def set_page_margins():
    hwp.HAction.GetDefault("PageDef", hwp.HParameterSet.HPageDef.HSet)
    hwp.HParameterSet.HPageDef.Landscape = 0
    hwp.HParameterSet.HPageDef.PaperWidth = 21000
    hwp.HParameterSet.HPageDef.PaperHeight = 29700
    hwp.HParameterSet.HPageDef.LeftMargin = 2000
    hwp.HParameterSet.HPageDef.RightMargin = 2000
    hwp.HParameterSet.HPageDef.TopMargin = 2000
    hwp.HParameterSet.HPageDef.BottomMargin = 2000
    hwp.HAction.Execute("PageDef", hwp.HParameterSet.HPageDef.HSet)

def set_font(size=900, bold=False):
    hwp.HAction.GetDefault("CharShape", hwp.HParameterSet.HCharShape.HSet)
    hwp.HParameterSet.HCharShape.Height = size
    hwp.HParameterSet.HCharShape.Bold = 1 if bold else 0
    hwp.HAction.Execute("CharShape", hwp.HParameterSet.HCharShape.HSet)

def insert_text_para(text, size=900, bold=False):
    set_font(size, bold)
    hwp.HAction.GetDefault("InsertText", hwp.HParameterSet.HInsertText.HSet)
    hwp.HParameterSet.HInsertText.Text = text
    hwp.HAction.Execute("InsertText", hwp.HParameterSet.HInsertText.HSet)
    hwp.HAction.Run("BreakPara")

def fill_cell_text(text, bold=False, size=850):
    set_font(size, bold)
    hwp.HAction.GetDefault("InsertText", hwp.HParameterSet.HInsertText.HSet)
    hwp.HParameterSet.HInsertText.Text = text
    hwp.HAction.Execute("InsertText", hwp.HParameterSet.HInsertText.HSet)

def make_table(rows_data, col_widths=None):
    """
    rows_data: 2D list, e.g. [["헤더1","헤더2"], ["데이터1","데이터2"]]
    첫 행은 헤더(bold), 나머지는 일반
    col_widths: 각 열 너비 (HWP 단위: 1/100mm), 없으면 균등 분배
    """
    if not rows_data:
        return
    n_rows = len(rows_data)
    n_cols = len(rows_data[0])
    
    total_width = 15200  # ~A4 내용 너비
    if col_widths is None:
        col_widths = [total_width // n_cols] * n_cols
    
    # 표 생성
    hwp.HAction.GetDefault("TableCreate", hwp.HParameterSet.HTableCreation.HSet)
    hwp.HParameterSet.HTableCreation.Rows = n_rows
    hwp.HParameterSet.HTableCreation.Cols = n_cols
    hwp.HParameterSet.HTableCreation.WidthType = 0  # 절대값
    hwp.HParameterSet.HTableCreation.TableProperties.Width = sum(col_widths)
    
    for i, w in enumerate(col_widths):
        hwp.HParameterSet.HTableCreation.ColWidth.SetItem(i, w)
    
    hwp.HAction.Execute("TableCreate", hwp.HParameterSet.HTableCreation.HSet)
    
    # 셀 채우기
    for r_idx, row in enumerate(rows_data):
        is_header = (r_idx == 0)
        for c_idx, cell_text in enumerate(row):
            fill_cell_text(cell_text, bold=is_header, size=850)
            # 다음 셀로 이동
            hwp.HAction.Run("TableRightCell")
    
    # 표 밖으로 나가기
    hwp.HAction.Run("Cancel")
    hwp.HAction.Run("BreakPara")

def save_hwp(filename):
    save_path = os.path.join(OUTPUT_DIR, filename)
    hwp.HAction.GetDefault("FileSaveAs", hwp.HParameterSet.HFileSaveAs.HSet)
    hwp.HParameterSet.HFileSaveAs.SaveFileName = save_path
    hwp.HParameterSet.HFileSaveAs.SaveFormat = "HWP"
    hwp.HAction.Execute("FileSaveAs", hwp.HParameterSet.HFileSaveAs.HSet)
    print(f"저장됨: {save_path}")
    return save_path

# ============================================================
# 1. summary_v7.hwp
# ============================================================
def create_summary():
    hwp.HAction.Run("FileNew")
    time.sleep(0.5)
    set_page_margins()
    
    insert_text_para("예비창업패키지 예비창업자 사업계획서", size=1400, bold=True)
    insert_text_para("창업아이템 개요(요약)", size=1200, bold=True)
    insert_text_para("▶ 중소 제약사·연구소는 AI 신약 인프라 비용·보안·인력 문제로 소외됨 → B2C 클라우드 + B2B 온프레미스/그리드 투트랙으로 해결하는 '곡괭이(Infra)' 비즈니스임", size=900)
    
    # 표 1. 창업아이템 소개
    make_table([
        ["1. 창업아이템 소개", ""],
        ["아이템명", "중소 제약사용 보안형 온프레미스\nAI 신약개발 자동화·그리드 솔루션 (Bio-MLOps)"],
        ["핵심기능", "· 알파폴드 등 최상위 오픈AI 원클릭 실행임\n· 사내 PC 유휴자원 연계 분산연산(Grid) 기능임"],
        ["타겟", "· MLOps 인력 없는 국내외 벤처·중견 제약사임\n· 데이터 유출 우려 대학 연구소임"],
        ["사용처", "· 사내 폐쇄망 AI 신약 파이프라인 구축임\n· 분자구조 3D 예측 등 보안 100% 보장함"],
    ], col_widths=[3800, 11400])
    
    # 표 2. 차별성
    make_table([
        ["2. 창업아이템의 차별성"],
        ["· 초격차 원천 보안 (온프레미스): 물리적 망분리 설치로 기업 기밀 외부 유출 원천 차단함\n· 압도적 비용 절감 (Grid): 수십억 GPU 대신 사내 PC 유휴자원 병렬 분산 처리함\n· IT 전문성 불필요 (No-Code): 비개발 연구원도 마우스 클릭만으로 AI 즉각 구동함"],
    ], col_widths=[15200])
    
    # 표 3. 개발단계
    make_table([
        ["3. 개발단계", ""],
        ["현재 단계", "핵심 요소기술 확보 및 MVP 정식 제작 중임"],
        ["아이디어 기획", "· B2C(SaaS) + B2B(온프레미스/그리드) 하이브리드 BM 기획 완료함"],
        ["핵심기술 확보", "· 인트라넷 환경 외부통신 없이 오프라인 1-Click AI 자동화 스크립트 확보함"],
        ["시제품 제작", "· B2C 클라우드 버전 선배포 준비 중임\n· 제약사 POC용 온프레미스 MVP 개발 중임"],
    ], col_widths=[3800, 11400])
    
    # 표 4. 목표시장
    make_table([
        ["4. 국내외 목표시장"],
        ["· B2B 타겟: 보안 민감·라이선스 부담 바이오 벤처·국공립 연구센터임\n· B2C 타겟: AI 시뮬레이션 필요한 대학원생·포닥·개별 연구자임\n· 판매 전략: 1단계 B2C 저가 배포로 생태계 락인 후, 2단계 B2B 고단가 온프레미스 POC 돌입함"],
    ], col_widths=[15200])
    
    # 표 5. 이미지 안내
    make_table([
        ["5. 이미지 (참고사진 및 구조 설계도)"],
        ["< 노코드(No-Code) AI 시뮬레이션 관리 대시보드 >\n  참고 이미지: 3d 분자구조 UI.png\n\n< 유출 제로(0) 온프레미스 망분리 및 사내 그리드 연산 아키텍처 >\n  참고 이미지: architecture_diagram.png"],
    ], col_widths=[15200])
    
    save_hwp("summary_v7.hwp")


# ============================================================
# 2. problem_recognition_v7.hwp
# ============================================================
def create_problem_recognition():
    hwp.HAction.Run("FileNew")
    time.sleep(0.5)
    set_page_margins()
    
    insert_text_para("1. 문제 인식 (Problem)_창업 아이템의 필요성", size=1300, bold=True)
    insert_text_para("1-1. 창업아이템의 배경 및 현황 (고객의 핵심 문제)", size=1100, bold=True)
    insert_text_para("▶ 우수한 글로벌 AI가 쏟아져도 중소 제약사는 도입 불가능한 상황임. — 전문 IT 인력 부족, 수십억 서버 구매 불가, 신약 기밀 구조의 클라우드 업로드 불가 등이 주요 원인임.", size=900)
    insert_text_para("※ 글로벌 제약 AI 도입 현실과 중소/벤처 하위 90% 생태계 간의 극심한 자원 양극화 상황임.", size=900)
    insert_text_para("글로벌 빅파마들은 AI 기술에 수조 원대 자본을 투입하며 'AI 신약 개발 플랫폼' 시장을 잠식 중임. 반면 국내외 중소·중견 제약사 및 학술 연구기관은 비용·인력·보안 장벽으로 혁신에서 완전히 소외된 상태임.", size=900)
    
    make_table([
        ["핵심 진입 장벽", "발생 형태 및 벤처/대학 연구실의 핵심 문제"],
        ["1. 상용 라이선스의 살인적 과금",
         "· 해외 독점 AI 소프트웨어 라이선스가 수억~수십억 원 과금을 강제함.\n· 중소 연구 단위는 예산 확보 불가로 연구 시작 전부터 자본 한계에 봉착."],
        ["2. 전문 IT 인력(MLOps) 부재",
         "· AlphaFold 등 무료 AI가 공개되어도 리눅스 망 구축·Python 환경 설정·GPU 배포·MLOps 관리를 생물학·화학 연구원이 병행하는 것은 물리적으로 불가능함.\n· 전담 MLOps 인력 채용 역시 예산·인식 부재로 현실적으로 불가능한 상태임."],
        ["3. 강력한 데이터 외부 유출(보안) 우려",
         "· 신약 후보 물질 구조는 초격차 기밀 자산(특허)임.\n· 기존 SaaS AI 플랫폼은 외부 서버로 데이터를 필연적으로 전송하므로, 보안에 극도로 보수적인 제약사는 도입 자체를 전면 거부함."],
        ["4. 단일 슈퍼 인프라 독점 부담",
         "· 단백질 3D 모델링 등 고사양 연산을 위해 대당 수천만 원의 AI 인프라(H100·A100) 세트가 필요함.\n· 중소 기관은 해당 예산 확보 자체가 불가능한 상태임."],
    ], col_widths=[4000, 11200])
    
    insert_text_para("1-2. 창업아이템의 필요성", size=1100, bold=True)
    insert_text_para("※ Pick and Shovel(곡괭이) 전략: 진입 장벽의 혁신적 해체를 위한 인프라 보급 생태계 조성.", size=900)
    
    make_table([
        ["자사 솔루션이 필요한 이유"],
        ["· 1-Click AI 인프라 보급: IT 엔지니어가 없는 제약사에서도 연구원이 마우스 클릭만으로 글로벌 검증 AI를 대시보드 내에서 즉각 셋업·구동할 수 있도록 자동화 파이프라인(Bio-MLOps) 보급.\n· 온프레미스(망 분리) 환경: 외부 인터넷을 완전히 차단한 사내 폐쇄망 설치형(Appliance) 모델 제공으로 기밀 데이터 유출 리스크를 제로(0) 수준으로 통제.\n· 사내 PC 유휴 자원 연계(Grid): 수십억 원의 단일 GPU 세트 구매 대신, 인트라넷에 연결된 사내 연구용 PC 자원을 그리드로 묶어 중앙 연산 부하를 1/10 수준으로 절감."],
    ], col_widths=[15200])
    
    save_hwp("problem_recognition_v7.hwp")


# ============================================================
# 3. feasibility_v7.hwp
# ============================================================
def create_feasibility():
    hwp.HAction.Run("FileNew")
    time.sleep(0.5)
    set_page_margins()
    
    insert_text_para("2. 실현 가능성 (Solution)_창업 아이템의 개발 계획", size=1300, bold=True)
    insert_text_para("2-1. 제품·서비스의 개발/개선 방안 (3대 핵심 기술)", size=1100, bold=True)
    insert_text_para("▶ 신약 직접 발굴이 아닌, 글로벌 공개 AI 엔진을 망분리 온프레미스로 패키징해 제공하는 '인프라 건축가' 포지션을 취함. 모든 기술력을 해당 역량에 집중함.", size=900)
    insert_text_para("※ 3대 기술 격차 해소 방안: 자동화, 온프레미스, 그리드 병렬", size=900)
    
    make_table([
        ["핵심 기술", "상세 설명"],
        ["1. AI 신약개발 전주기\n글로벌 표준 엔진 탑재\n(Bio-MLOps 자동화)",
         "· AlphaFold 3·RoseTTAFold(구조 예측), DiffDock·NeuralPLexer(결합), RFdiffusion(물질 생성), OpenMM(물리 연산) 등 세계 최상위급 엔진을 코딩 지식 없이 구동 가능한 직관적 대시보드 UI/UX로 패키징.\n· Docker 기반 자동 셋업 지원으로 연구자 진입 장벽 완전 격파."],
        ["2. 망 분리 &\n온프레미스(On-premise)\n완결형 구축",
         "· 인터넷이 차단된 폐쇄망 사내 서버에 시스템을 독립 이식.\n· 기존 SaaS AI의 신약 데이터 외부 서버 유출 리스크를 원천 차단하여 보수적인 제약사의 도입 문턱 해소."],
        ["3. 비용 절감 무기\n사내 폐쇄형 분산 그리드\n(Private Grid)",
         "· 수십억 원 대의 특수 슈퍼컴퓨터 구매 불필요.\n· 사내 망의 연구용 PC 수백 대 자원을 그리드로 통합하여 병렬 연산 수행. 독자 최적화 분산 처리 기능 내장."],
    ], col_widths=[4500, 10700])
    
    insert_text_para("※ 시각화: Bio-MLOps 파이프라인 핵심 결과물 (Storytelling)", size=900)
    make_table([
        ["STEP 1: 타겟 단백질 구조 완벽 해독 (AlphaFold)",
         "STEP 2: 신약 후보 물질 결합 (DiffDock)",
         "STEP 3: 세상에 없던 신물질 창조 (RFdiffusion)"],
        ["[이미지 참고: step1_alphafold.png]",
         "[이미지 참고: step2_diffdock.png]",
         "[이미지 참고: step3_rfdiffusion.png]"],
    ], col_widths=[5066, 5067, 5067])
    
    insert_text_para("2-2. 고객 요구사항 대응 방안", size=1100, bold=True)
    insert_text_para("※ 압도적 가성비·무결점 보안성으로 중소 제약사 수요 정조준.", size=900)
    
    # 경쟁사 비교표
    make_table([
        ["구분", "기존 방식 (해외 CADD SW)", "단순 AI SaaS (Black-box)", "동사 Bio-MLOps (Hybrid)"],
        ["핵심 가치", "정밀도 중심", "속도 중심", "정밀도 + 속도 + 편의성"],
        ["사용성", "명령어(CLI) 기반 복잡함", "블랙박스로 해석 난해", "Web GUI (No-Code) 완전 자동화"],
        ["보안", "사내 설치형 (보안 양호)", "외부 클라우드 업로드 필수\n→ 데이터 유출 위험", "망분리 온프레미스\n→ 유출 제로 보장"],
        ["비용/시간", "고비용 라이선스 / 수일", "클라우드 종량제 / 수초", "합리적 (기존 대비 1/10)\n사내 PC 그리드 활용"],
    ], col_widths=[3000, 4000, 4100, 4100])
    
    # 요구사항 대응표
    make_table([
        ["요구사항 (핵심 문제)", "자사 솔루션 해결 방안"],
        ["1. 비용 장벽 (가성비)",
         "· 초기 구축비용 해외 엔진 대비 1/10 수준으로 절감.\n· 고도화 연산은 사내 PC 분산 그리딩으로 전기세 수준에서 타격 흡수.\n· 글로벌 검증 모델 정기 업데이트 보증으로 최전선 유지."],
        ["2. 태생적 불안감 (보안성)",
         "· AWS·GCP 등 외부 퍼블릭 클라우드로 1바이트도 유출되지 않음.\n· 사내 IP만 접근 가능한 100% 폐쇄 생태계 지원."],
    ], col_widths=[4000, 11200])
    
    save_hwp("feasibility_v7.hwp")


# ============================================================
# 4. growth_v7.hwp
# ============================================================
def create_growth():
    hwp.HAction.Run("FileNew")
    time.sleep(0.5)
    set_page_margins()
    
    insert_text_para("3. 성장전략 (Scale-up)_사업화 추진 전략", size=1300, bold=True)
    
    # 4-1
    insert_text_para("4-1. 제품·서비스의 목표시장 분석", size=1100, bold=True)
    insert_text_para("▶ B2C(SaaS)로 개인 연구자 생태계를 선점한 후, B2B 망분리 온프레미스 고단가 계약을 확보하는 투트랙(Two-Track) 공략임", size=900)
    
    make_table([
        ["타겟 분류", "고객 특징", "핵심 수요 (공략 포인트)"],
        ["B2B 타겟 (핵심)\n[Enterprise·SMB]",
         "국내외 중견·중소 제약사, 국공립 바이오 연구실임",
         "· AI 도입 시급하나 클라우드 비용·보안 유출·전담 개발조직 부재 상태임\n→ 외부 유출 없는 설치형 온프레미스 수요 높음"],
        ["B2C 타겟 (확장)\n[Individuals]",
         "논문·기초연구용 AI 필요한 대학원생·포닥·개인 연구자임",
         "· 서버 구축 권한·자금 없이 랩탑으로 AlphaFold 즉시 구동 필요함\n→ 설치 없는 브라우저 즉시 실행 수요 존재함"],
    ], col_widths=[3500, 5000, 6700])
    
    # 4-2/4-3
    insert_text_para("4-2 / 4-3. 비즈니스 모델(BM) 및 핵심 수익 전략", size=1100, bold=True)
    insert_text_para("※ 보안 민감도별 고객을 완벽히 분리 대응하는 투트랙 하이브리드 수익 모델임", size=900)
    
    make_table([
        ["SaaS 구독 (B2C Core)", "On-Demand 연산 (GPU)", "Enterprise 온프레미스 (B2B)"],
        ["월/연 구독료\n개인 연구자·대학원생 타겟",
         "시간당 종량 과금\n고용량 시뮬레이션 수행 시",
         "설치비 + 연간 유지보수\n보안·커스텀이 필요한 중견 제약사"],
    ], col_widths=[5066, 5067, 5067])
    
    make_table([
        ["[B2B 하이엔드] 보안 완결형 온프레미스 & 사내 그리드"],
        ["· 제공 형태: 사내 폐쇄망 직접 설치형 HW/SW 통합 어플라이언스 + PC 병렬 에이전트임\n· 수익① 설치·구축비: 초기 탑재 및 폐쇄망 연동 고단가 일시매출임 (3,000~5,000만 원/건)\n· 수익② 연간 유지보수: 최신 글로벌 AI 모델 패키지 사내망 정기 업데이트 라이선스임"],
    ], col_widths=[15200])
    
    make_table([
        ["[B2C 코어확장] 클라우드 SaaS 및 로컬/하이브리드 연동"],
        ["· 제공 형태: 설치 없는 브라우저 기반 웹 AI 구독 파이프라인 + 개인 GPU 로컬 연동임\n· 수익① 클라우드 구독료: 개인 연구 목적 라이트 플랜 월/연 소액 정기 결제임\n· 수익② 자원 임대 종량제: 부족 시 당사 H100 GPU 스팟 대여 Pay-As-You-Go 방식임"],
    ], col_widths=[15200])
    
    # 4-4
    insert_text_para("4-4. 시장진입(GTM) 및 성과 창출 전략", size=1100, bold=True)
    insert_text_para("※ 4단계 순차 시장 침투 전략 — B2C 생태계 선점 → B2B 고단가 전환", size=900)
    
    make_table([
        ["STEP 1", "STEP 2", "STEP 3", "STEP 4"],
        ["초기 레퍼런스 확보\n(대학/연구소 무상 배포)",
         "국내 B2B 실증\n(바이오 벤처 유료화)",
         "아시아/중견 확장\n(SaaS 구독 모델 확산)",
         "글로벌 스케일업\n(Big Pharma 파트너십)"],
    ], col_widths=[3800, 3800, 3800, 3800])
    
    make_table([
        ["판매·확장 단계", "GTM 핵심 액션"],
        ["1단계\n(B2C 브랜딩·생태계 침투)",
         "· B2C SaaS 초저가·무료 베타 선출시 후 약대·바이오대학원생 무상 보급함\n· 버그 리포트·튜닝 데이터 수집 및 UX 익숙화로 자발적 락인(Lock-in) 생태계 조성함"],
        ["2단계\n(B2B 하이엔드 강공)",
         "· B2C 검증 안정성을 무기 삼아 중소 제약사·국공립 연구센터 C-Level 집중 타겟함\n· '학생 연구원과 동일 성능을 사내 폐쇄망 보안으로 구현' 하향식 POC 도입 제안서 배포함"],
    ], col_widths=[4000, 11200])
    
    # 예산 집행
    insert_text_para("2-3. 정부지원사업비 집행 계획", size=1100, bold=True)
    insert_text_para("※ 총 정부 지원금액: 50,000,000원 (오천만 원)", size=900)
    insert_text_para("※ 예비창업자 본인 인건비는 사업비로 집행 불가 (현물 계상)", size=900)
    insert_text_para("※ 외주용역비 2천만원 초과 시 주관기관 사전 심의 및 2인 이상 견적서 필요", size=900)
    
    make_table([
        ["비목", "세부 항목", "단가 (원)", "수량", "금액 (원)", "집행 목적 및 근거"],
        ["특허권 등\n무형자산 취득비",
         "국내 특허 출원 (AI 신약 예측 파이프라인 자동화 방법)",
         "3,500,000", "1식", "3,500,000",
         "Bio-MLOps 자동화 파이프라인 핵심기술 권리 보호 목적임. 창업자 본인 명의 출원함."],
        ["외주용역비",
         "UI/UX 와이어프레임 설계 및 디자인 시스템 구축",
         "12,000,000", "1식", "12,000,000",
         "비전문가 대상 노코드 AI 대시보드 UX Flow·화면 설계·디자인 시스템 외주 제작함."],
        ["",
         "Bio-MLOps 대시보드 웹 프론트엔드 개발 (React)",
         "19,000,000", "1식", "19,000,000",
         "AI 파이프라인 조작 대시보드·분자구조 3D 뷰어·작업큐 모니터링·결과리포트 핵심 화면 개발함."],
        ["",
         "반응형 웹 최적화 및 크로스브라우저 QA",
         "8,500,000", "1식", "8,500,000",
         "Chrome·Firefox·Edge 호환성 검증·접근성(A11y) 개선·번들 경량화 최적화 수행함."],
        ["",
         "UI 사용성 테스트(UT) 설계 및 운영",
         "7,000,000", "1식", "7,000,000",
         "대학원생·연구원 대상 MVP 프론트엔드 UT 시나리오 설계·관찰 운영·결과 보고서 납품함."],
        ["합 계", "", "", "", "50,000,000", ""],
    ], col_widths=[2200, 4200, 2000, 1000, 2200, 3600])
    
    insert_text_para("※ 외주용역비 전액을 프론트엔드 개발·설계·검증 항목으로만 구성함. 각 항목 2,000만원 미만 분리 발주함. 항목별 2인 이상 견적서 사전 징구 예정임.", size=900)
    
    save_hwp("growth_v7.hwp")


# ============================================================
# 실행
# ============================================================
if __name__ == "__main__":
    print("=== V7 HWP 문서 생성 시작 ===")
    
    print("\n[1/4] summary_v7.hwp 생성 중...")
    create_summary()
    
    print("\n[2/4] problem_recognition_v7.hwp 생성 중...")
    create_problem_recognition()
    
    print("\n[3/4] feasibility_v7.hwp 생성 중...")
    create_feasibility()
    
    print("\n[4/4] growth_v7.hwp 생성 중...")
    create_growth()
    
    print(f"\n=== 완료! 저장 위치: {OUTPUT_DIR} ===")
    hwp.Quit()
