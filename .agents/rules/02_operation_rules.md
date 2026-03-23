# 02. 작동 및 작성 품질 규칙 (Operation & Quality Rules)

## 🟡 작동 및 작성 품질 규칙

### R-06: 개조식 문체 원칙
- 사업계획서 본문은 개조식(bullet point 중심) 작성.
- 불필요한 영어 비즈니스 용어 최소화:
  - BM → 수익 모델 | Pain Point → 핵심 문제 | GTM → 시장 진입 전략
  - Scale-up → 성장 단계 | Target → 핵심 고객 | KPI는 그대로 사용 가능

### R-07: 섹션 순차 작성 원칙
- 한 번에 전체 섹션을 작성하지 않는다.
- 1개 섹션 완성 → 사용자 검토 → 다음 섹션 순서로 진행.
- 단, 사용자가 명시적으로 "전체 작성"을 요청한 경우 예외.

### R-08: 스킬 자동 트리거 규칙
| 사용자 발화 패턴 | 자동 활성 스킬 |
|--------------|-------------|
| "사업계획서 [작성/써줘/시작]" | `business-plan-writer` + `conversation-init` 워크플로 |
| "[섹션명] 섹션 작성" | `business-plan-writer` (해당 섹션 가이드 로드) |
| "[섹션명] UI 만들어줘" | `hwp-styled-ui` + `official-toc-mapper` |
| "평가해줘 / 점수 줘" | `business-plan-evaluator` |
| "HWP 읽어줘 / 분석해줘" | `hwp-extractor` |
| "사업비 집행 / 예산 계획" | `fund-execution-guidelines` |
| "/business-plan-agent" | 전체 `business-plan-agent` 워크플로 실행 |
| "/conversation-init" | 프로젝트 초기화 및 컨텍스트 복원 파이프라인 |
