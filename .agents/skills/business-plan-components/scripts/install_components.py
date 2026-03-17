#!/usr/bin/env python3
"""
사업계획서 UI 컴포넌트 설치 스크립트
프로젝트 폴더에 검증된 컴포넌트 템플릿을 복사하고, 아이템명 등 기본 정보를 자동 치환합니다.

사용법:
  python install_components.py --project {폴더명}
  python install_components.py --project {폴더명} --sections summary problem
  python install_components.py --project {폴더명} --overwrite
"""

import os
import sys
import json
import shutil
import argparse
from pathlib import Path
from datetime import datetime

SCRIPT_DIR   = Path(__file__).resolve().parent
SKILL_ROOT   = SCRIPT_DIR.parent
TEMPLATES    = SKILL_ROOT / "assets" / "templates"
WORKSPACE    = SKILL_ROOT.parent.parent.parent  # strayCat 루트
PROJECTS_DIR = WORKSPACE / "projects"

# 섹션 → 템플릿 파일 매핑
SECTION_MAP = {
    "summary":     ("SummaryTemplate.jsx",             "Summary"),
    "problem":     ("ProblemRecognitionTemplate.jsx",  "ProblemRecognition"),
    "feasibility": ("FeasibilityTemplate.jsx",         "Feasibility"),
    "performance": ("PerformanceTemplate.jsx",         "Performance"),
    "growth":      ("GrowthTemplate.jsx",              "Growth"),
    "team":        ("TeamTemplate.jsx",                "Team"),
}

ALL_SECTIONS = list(SECTION_MAP.keys())


def load_project_meta(folder_name: str) -> dict:
    meta_file = PROJECTS_DIR / folder_name / "project.json"
    if not meta_file.exists():
        print(f"❌ 프로젝트 '{folder_name}'를 찾을 수 없습니다.")
        print(f"   경로 확인: {meta_file}")
        sys.exit(1)
    with open(meta_file, encoding="utf-8") as f:
        return json.load(f)


def determine_version(ui_dir: Path, component_name: str) -> int:
    """기존 컴포넌트 최대 버전 번호 + 1 반환"""
    existing = list(ui_dir.glob(f"{component_name}V*.jsx"))
    if not existing:
        return 1
    versions = []
    for f in existing:
        stem = f.stem  # e.g. GrowthV2
        try:
            v = int(stem.replace(component_name, "").replace("V", ""))
            versions.append(v)
        except ValueError:
            pass
    return max(versions) + 1 if versions else 1


def apply_placeholders(content: str, meta: dict, component_name: str, version: int) -> str:
    """템플릿 내 placeholder를 실제 프로젝트 정보로 치환"""
    item_name   = meta.get("item_name", "사업 아이템")
    industry    = meta.get("industry", "")
    target      = meta.get("target_customer", "")
    tech_stack  = meta.get("tech_stack", "")
    support_pgm = meta.get("support_program", "예비창업패키지")
    created_at  = datetime.now().strftime("%Y-%m-%d")

    replacements = {
        # 원본 컴포넌트에서 쓰이던 특정 아이템 관련 텍스트
        "AI 신약개발 플랫폼":     item_name,
        "AI Drug Discovery":       item_name,
        "바이오 / AI 신약":        f"{industry} / {item_name}" if industry else item_name,
        # 공통 헤더 주석
        "// THIS IS A TEMPLATE":  f"// {item_name} - {component_name}V{version}\n// 생성일: {created_at}\n// 프로젝트: {meta.get('folder_name', '')}",
    }

    for old, new in replacements.items():
        content = content.replace(old, new)

    # 파일 최상단에 메타 주석 추가
    header = (
        f"// ============================================================\n"
        f"// 컴포넌트: {component_name}V{version}\n"
        f"// 프로젝트: {meta.get('folder_name', '')}\n"
        f"// 아이템명: {item_name}\n"
        f"// 산업분야: {industry}\n"
        f"// 생성일:   {created_at}\n"
        f"// 원본:     {SECTION_MAP_REV.get(component_name, '')} 템플릿\n"
        f"// ============================================================\n"
    )
    return header + content


SECTION_MAP_REV = {v[1]: k for k, v in SECTION_MAP.items()}


def install(folder_name: str, sections: list, overwrite: bool = False):
    meta    = load_project_meta(folder_name)
    ui_dir  = PROJECTS_DIR / folder_name / "ui"
    ui_dir.mkdir(exist_ok=True)

    # CSS 테마 복사
    theme_src = TEMPLATES / "hwp-theme.css"
    theme_dst = ui_dir / "hwp-theme.css"
    if theme_src.exists():
        shutil.copy2(theme_src, theme_dst)
        print(f"  📄 hwp-theme.css → ui/")

    installed = []
    for section in sections:
        tpl_file, comp_name = SECTION_MAP[section]
        src_path = TEMPLATES / tpl_file

        if not src_path.exists():
            print(f"  ⚠️  템플릿 없음: {tpl_file}")
            continue

        version  = 1 if overwrite else determine_version(ui_dir, comp_name)
        dst_name = f"{comp_name}V{version}.jsx"
        dst_path = ui_dir / dst_name

        if dst_path.exists() and not overwrite:
            print(f"  ⏭️  {dst_name} 이미 존재 (--overwrite 로 덮어쓰기 가능)")
            continue

        content = src_path.read_text(encoding="utf-8")
        content = apply_placeholders(content, meta, comp_name, version)
        dst_path.write_text(content, encoding="utf-8")

        installed.append(dst_name)
        print(f"  ✅ {dst_name} 설치 완료")

    # App.jsx import 자동 업데이트
    if installed:
        update_app_jsx(ui_dir, installed, meta)

    # project.json ui_components 업데이트
    if installed:
        meta["ui_components"] = list(set(meta.get("ui_components", []) + installed))
        meta["updated_at"] = datetime.now().isoformat()
        meta_file = PROJECTS_DIR / folder_name / "project.json"
        with open(meta_file, "w", encoding="utf-8") as f:
            json.dump(meta, f, ensure_ascii=False, indent=2)
        print(f"\n  📋 project.json 업데이트 완료")

    print(f"\n✅ {len(installed)}개 컴포넌트 설치 완료 → projects/{folder_name}/ui/")


def update_app_jsx(ui_dir: Path, installed: list, meta: dict):
    """App.jsx의 주석 처리된 import를 활성화"""
    app_file = ui_dir / "App.jsx"
    if not app_file.exists():
        return

    content = app_file.read_text(encoding="utf-8")
    for comp_file in installed:
        comp_name = comp_file.replace(".jsx", "")
        old = f"// import {comp_name.split('V')[0]}"
        new_import = f"import {comp_name} from './{comp_name}';"
        # 주석 해제
        if f"// import {comp_name}" in content:
            content = content.replace(f"// import {comp_name}", new_import)
        elif old not in content:
            # 새 import 추가
            content = content.replace(
                "// ============================\n// 섹션 컴포넌트 import",
                f"// ============================\n// 섹션 컴포넌트 import\nimport {comp_name} from './{comp_name}';"
            )

    app_file.write_text(content, encoding="utf-8")
    print(f"  🔗 App.jsx import 업데이트")


def main():
    parser = argparse.ArgumentParser(description="사업계획서 UI 컴포넌트 설치")
    parser.add_argument("--project",   required=True, help="프로젝트 폴더명")
    parser.add_argument("--sections",  nargs="*", default=ALL_SECTIONS,
                        choices=ALL_SECTIONS, help="설치할 섹션 (기본: 전체)")
    parser.add_argument("--overwrite", action="store_true", help="기존 컴포넌트 덮어쓰기")
    args = parser.parse_args()

    print(f"\n🎨 사업계획서 UI 컴포넌트 설치")
    print(f"   프로젝트: {args.project}")
    print(f"   섹션:     {', '.join(args.sections)}")
    print("=" * 50)

    install(args.project, args.sections, args.overwrite)


if __name__ == "__main__":
    main()
