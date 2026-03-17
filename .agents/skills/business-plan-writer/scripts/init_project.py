#!/usr/bin/env python3
"""
사업계획서 프로젝트 초기화 스크립트
사용법:
  python init_project.py                   # 새 프로젝트 생성 (대화형)
  python init_project.py --list            # 기존 프로젝트 목록 출력
  python init_project.py --load <이름>    # 기존 프로젝트 정보 출력
  python init_project.py --name <이름>    # 비대화형으로 새 프로젝트 생성
"""

import os
import sys
import json
import re
from datetime import datetime
from pathlib import Path

# 프로젝트 루트 (스크립트 위치 기준 3단계 상위 = strayCat 폴더)
SCRIPT_DIR = Path(__file__).resolve().parent
SKILL_ROOT = SCRIPT_DIR.parent  # business-plan-writer/
WORKSPACE_ROOT = SKILL_ROOT.parent.parent.parent  # strayCat/
PROJECTS_ROOT = WORKSPACE_ROOT / "projects"


def slugify(name: str) -> str:
    """한글·영문·숫자 섞인 프로젝트명을 폴더명으로 변환"""
    # 공백 및 특수문자 → 하이픈
    slug = re.sub(r"[^\w가-힣]", "-", name.strip())
    slug = re.sub(r"-+", "-", slug).strip("-")
    return slug.lower() if slug.isascii() else slug


def list_projects() -> list:
    """기존 프로젝트 목록 반환"""
    if not PROJECTS_ROOT.exists():
        return []
    projects = []
    for p in sorted(PROJECTS_ROOT.iterdir()):
        meta_file = p / "project.json"
        if p.is_dir() and meta_file.exists():
            with open(meta_file, encoding="utf-8") as f:
                meta = json.load(f)
            projects.append(meta)
    return projects


def print_projects():
    """프로젝트 목록 출력"""
    projects = list_projects()
    if not projects:
        print("📂 생성된 프로젝트가 없습니다.")
        return

    print("\n📋 사업계획서 프로젝트 목록")
    print("=" * 60)
    for i, p in enumerate(projects, 1):
        status_icon = {"진행중": "🔄", "완료": "✅", "보류": "⏸️"}.get(p.get("status", ""), "📝")
        print(f"{i:2}. {status_icon} [{p['folder_name']}]")
        print(f"    아이템명: {p['item_name']}")
        print(f"    산업분야: {p.get('industry', '-')} | 단계: {p.get('dev_stage', '-')}")
        print(f"    생성일: {p['created_at'][:10]} | 상태: {p.get('status', '진행중')}")
        completed = p.get("completed_sections", [])
        if completed:
            print(f"    완료섹션: {', '.join(completed)}")
        print()


def load_project(folder_name: str) -> dict:
    """프로젝트 메타데이터 로드 및 출력"""
    project_dir = PROJECTS_ROOT / folder_name
    meta_file = project_dir / "project.json"

    if not meta_file.exists():
        print(f"❌ 프로젝트 '{folder_name}'를 찾을 수 없습니다.")
        print("\n사용 가능한 프로젝트:")
        print_projects()
        sys.exit(1)

    with open(meta_file, encoding="utf-8") as f:
        meta = json.load(f)

    print(f"\n✅ 프로젝트 로드: {folder_name}")
    print("=" * 60)
    print(json.dumps(meta, ensure_ascii=False, indent=2))
    print(f"\n📁 프로젝트 경로: {project_dir}")
    print(f"📄 컨텍스트 카드: {project_dir / 'context' / 'context-card.md'}")
    print(f"🖥️  UI 컴포넌트:   {project_dir / 'ui'}")
    print(f"📝 섹션 초안:     {project_dir / 'sections'}")

    return meta


def create_project(item_name: str = None, interactive: bool = True) -> dict:
    """새 프로젝트 생성"""
    print("\n🚀 사업계획서 생성")
    print("=" * 60)

    if interactive and not item_name:
        # 기존 프로젝트 확인
        existing = list_projects()
        if existing:
            print("기존 프로젝트:")
            for i, p in enumerate(existing, 1):
                print(f"  {i}. [{p['folder_name']}] {p['item_name']}")
            print()
            choice = input("기존 프로젝트를 불러오시겠습니까? (번호 입력 / Enter로 신규 생성): ").strip()
            if choice.isdigit() and 1 <= int(choice) <= len(existing):
                return load_project(existing[int(choice) - 1]["folder_name"])

    # 프로젝트 정보 수집
    if not item_name:
        item_name = input("1. 아이템명 (창업 아이템의 공식 명칭): ").strip()
    
    folder_name = slugify(item_name)
    project_dir = PROJECTS_ROOT / folder_name

    # 중복 폴더 처리
    counter = 1
    original_folder = folder_name
    while project_dir.exists():
        folder_name = f"{original_folder}-{counter}"
        project_dir = PROJECTS_ROOT / folder_name
        counter += 1

    if interactive:
        description = input("2. 한줄 소개 (무엇을 하는 서비스인지): ").strip()
        tech_stack  = input("3. 핵심 기술 (기술 스택 또는 방법론): ").strip()
        target      = input("4. 타겟 고객 (1차 고객군): ").strip()
        industry    = input("5. 산업 분야 (바이오/AI/FinTech/SaaS 등): ").strip()
        dev_stage   = input("6. 개발 단계 (아이디어/PoC/프로토타입/MVP): ").strip()
        support_pgm = input("7. 지원사업명 (예: 2025 예비창업패키지): ").strip()
    else:
        description = tech_stack = target = industry = dev_stage = support_pgm = ""

    # 메타데이터
    meta = {
        "folder_name": folder_name,
        "item_name": item_name,
        "description": description,
        "tech_stack": tech_stack,
        "target_customer": target,
        "industry": industry,
        "dev_stage": dev_stage,
        "support_program": support_pgm,
        "status": "진행중",
        "created_at": datetime.now().isoformat(),
        "updated_at": datetime.now().isoformat(),
        "completed_sections": [],
        "ui_components": []
    }

    # 폴더 구조 생성
    dirs = [
        project_dir / "context",
        project_dir / "sections",
        project_dir / "ui",
        project_dir / "references",
    ]
    for d in dirs:
        d.mkdir(parents=True, exist_ok=True)

    # project.json 저장
    with open(project_dir / "project.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    # context-card.md 생성
    context_card = f"""# 📋 아이템 컨텍스트 카드

> 이 파일은 프로젝트 전반에서 참조하는 핵심 컨텍스트입니다.

## 기본 정보
- **아이템명**: {item_name}
- **한줄 소개**: {description}
- **핵심 기술**: {tech_stack}
- **타겟 고객**: {target}
- **산업 분야**: {industry}
- **개발 단계**: {dev_stage}
- **지원사업**: {support_pgm}

## 시장 데이터 (작성 후 채우기)
- **글로벌 TAM**: (웹 검색 후 기입)
- **국내 SAM**: (웹 검색 후 기입)
- **CAGR**: (웹 검색 후 기입)
- **주요 경쟁사**: (웹 검색 후 기입)

## 진행 현황
| 섹션 | 상태 | UI 컴포넌트 | 마지막 수정 |
|------|------|-----------|-----------|
| □ 창업아이템 개요(요약) | ⬜ 미시작 | - | - |
| 1. 문제인식 | ⬜ 미시작 | - | - |
| 2. 실현가능성 | ⬜ 미시작 | - | - |
| 3. 성과목표 | ⬜ 미시작 | - | - |
| 4. 성장전략 | ⬜ 미시작 | - | - |
| 5. 팀 구성 | ⬜ 미시작 | - | - |

## 작성 메모
(진행하면서 중요한 결정사항, 특이사항을 기록)
"""
    with open(project_dir / "context" / "context-card.md", "w", encoding="utf-8") as f:
        f.write(context_card)

    # 섹션별 초안 파일 생성 (빈 템플릿)
    sections = {
        "00-summary.md": "# □ 창업아이템 개요(요약)\n\n> 작성 전\n",
        "01-problem.md": "# 1. 문제인식\n\n## 1-1. 창업아이템의 배경 및 필요성\n\n> 작성 전\n\n## 1-2. 창업아이템 목표시장 현황\n\n> 작성 전\n",
        "02-feasibility.md": "# 2. 실현가능성\n\n## 2-1. 창업아이템 현황 및 구체화 방안\n\n> 작성 전\n\n## 2-2. 고객 요구사항 대응 방안\n\n> 작성 전\n\n## 2-3. 정부지원사업비 집행 계획\n\n> 작성 전\n",
        "03-performance.md": "# 3. 성과목표\n\n> 작성 전\n",
        "04-growth.md": "# 4. 성장전략\n\n## 4-1. 비즈니스 모델\n\n> 작성 전\n\n## 4-2. 목표시장 분석\n\n> 작성 전\n\n## 4-3. 사업화 추진 전략\n\n> 작성 전\n\n## 4-4. 추진 일정 및 자금 운용 계획\n\n> 작성 전\n",
        "05-team.md": "# 5. 팀 구성\n\n> 작성 전\n",
    }
    for fname, content in sections.items():
        with open(project_dir / "sections" / fname, "w", encoding="utf-8") as f:
            f.write(content)

    # App.jsx 템플릿 생성 (ui 폴더에)
    app_template = f"""// {item_name} - 사업계획서 UI 통합 뷰어
// 생성일: {datetime.now().strftime('%Y-%m-%d')}
// 프로젝트: {folder_name}

import React, {{ useState }} from 'react';

// ============================
// 섹션 컴포넌트 import (생성 후 주석 해제)
// ============================
// import SummaryV1 from './SummaryV1';
// import ProblemRecognitionV1 from './ProblemRecognitionV1';
// import FeasibilityV1 from './FeasibilityV1';
// import PerformanceV1 from './PerformanceV1';
// import GrowthV1 from './GrowthV1';
// import TeamV1 from './TeamV1';

const SECTIONS = [
  {{ id: 'summary', label: '□ 창업아이템 개요' }},
  {{ id: 'problem', label: '1. 문제인식' }},
  {{ id: 'feasibility', label: '2. 실현가능성' }},
  {{ id: 'performance', label: '3. 성과목표' }},
  {{ id: 'growth', label: '4. 성장전략' }},
  {{ id: 'team', label: '5. 팀 구성' }},
];

export default function App() {{
  const [active, setActive] = useState('summary');

  return (
    <div style={{{{ fontFamily: 'Noto Sans KR, sans-serif', display: 'flex', minHeight: '100vh' }}}}>
      {{/* 사이드바 네비게이션 */}}
      <nav style={{{{ width: 220, background: '#1a1a1a', color: '#fff', padding: '1.5rem 1rem' }}}}>
        <h3 style={{{{ fontSize: '0.85rem', color: '#aaa', marginBottom: '1rem', borderBottom: '1px solid #444', paddingBottom: '0.5rem' }}}}>
          {item_name}
        </h3>
        {{SECTIONS.map(s => (
          <button
            key={{s.id}}
            onClick={{() => setActive(s.id)}}
            style={{{{
              display: 'block', width: '100%', textAlign: 'left',
              padding: '0.6rem 0.8rem', marginBottom: '0.3rem',
              background: active === s.id ? '#333' : 'transparent',
              color: active === s.id ? '#fff' : '#bbb',
              border: 'none', borderRadius: '4px', cursor: 'pointer',
              fontSize: '0.85rem',
            }}}}
          >
            {{s.label}}
          </button>
        ))}}
      </nav>

      {{/* 메인 콘텐츠 */}}
      <main style={{{{ flex: 1, padding: '2rem', background: '#f5f5f5' }}}}>
        <div style={{{{ maxWidth: 900, margin: '0 auto' }}}}>
          <p style={{{{ color: '#888', textAlign: 'center', marginTop: '4rem' }}}}>
            각 섹션 컴포넌트를 생성하고 위 import를 활성화하세요.
          </p>
        </div>
      </main>
    </div>
  );
}}
"""
    with open(project_dir / "ui" / "App.jsx", "w", encoding="utf-8") as f:
        f.write(app_template)

    # README.md
    readme = f"""# {item_name} 사업계획서

**지원사업**: {support_pgm}  
**프로젝트 폴더**: `projects/{folder_name}/`  
**생성일**: {datetime.now().strftime('%Y-%m-%d')}

## 폴더 구조

```
{folder_name}/
├── project.json          ← 프로젝트 메타데이터 & 진행 상태
├── context/
│   ├── context-card.md   ← 아이템 컨텍스트 카드 (핵심 정보)
│   └── market-data.md    ← 웹 검색 수집 시장 데이터
├── sections/             ← 섹션별 텍스트 초안 (Markdown)
│   ├── 00-summary.md
│   ├── 01-problem.md
│   ├── 02-feasibility.md
│   ├── 03-performance.md
│   ├── 04-growth.md
│   └── 05-team.md
├── ui/                   ← 생성된 React 컴포넌트
│   ├── App.jsx           ← 통합 뷰어
│   └── (섹션별 컴포넌트 생성됨)
└── references/           ← 참조 문서
    ├── toc.md            ← 공식 목차
    └── extracted_*.txt   ← HWP/PDF 추출 텍스트
```

## 시작하기

```bash
# 프로젝트 정보 확인
python .agents/skills/business-plan-writer/scripts/init_project.py --load {folder_name}

# 사업계획서 에이전트 시작
# 새 대화에서: /business-plan-agent
```
"""
    with open(project_dir / "README.md", "w", encoding="utf-8") as f:
        f.write(readme)

    print(f"\n✅ 프로젝트 생성 완료!")
    print(f"📁 경로: {project_dir}")
    print(f"\n생성된 구조:")
    print(f"  {folder_name}/")
    print(f"  ├── project.json")
    print(f"  ├── context/context-card.md")
    print(f"  ├── sections/ (6개 섹션 초안 파일)")
    print(f"  ├── ui/App.jsx")
    print(f"  └── references/")
    print(f"\n📌 다음 단계: /business-plan-agent 워크플로를 시작하세요.")
    print(f"📌 컨텍스트 카드 경로: {project_dir / 'context' / 'context-card.md'}")

    return meta


def update_section_status(folder_name: str, section: str, status: str, component: str = None):
    """섹션 완료 상태 업데이트"""
    project_dir = PROJECTS_ROOT / folder_name
    meta_file = project_dir / "project.json"

    if not meta_file.exists():
        print(f"❌ 프로젝트 '{folder_name}'를 찾을 수 없습니다.")
        return

    with open(meta_file, encoding="utf-8") as f:
        meta = json.load(f)

    if status == "완료" and section not in meta["completed_sections"]:
        meta["completed_sections"].append(section)

    if component and component not in meta["ui_components"]:
        meta["ui_components"].append(component)

    meta["updated_at"] = datetime.now().isoformat()

    with open(meta_file, "w", encoding="utf-8") as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    print(f"✅ 섹션 '{section}' 상태 업데이트: {status}")


if __name__ == "__main__":
    args = sys.argv[1:]

    if "--list" in args:
        print_projects()
    elif "--load" in args:
        idx = args.index("--load")
        if idx + 1 < len(args):
            load_project(args[idx + 1])
        else:
            print("❌ 프로젝트 이름을 지정하세요: --load <폴더명>")
    elif "--name" in args:
        idx = args.index("--name")
        name = args[idx + 1] if idx + 1 < len(args) else None
        create_project(item_name=name, interactive=False)
    else:
        create_project()
