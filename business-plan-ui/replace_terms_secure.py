import os
import re

base_dir = "src"

replacements = [
    # long phrases (safe to use ignorecase without boundaries)
    (re.compile(r"AI Docker Image", re.IGNORECASE), "인공지능 자동설치 패키지"),
    (re.compile(r"Docker/K8s", re.IGNORECASE), "서버 인프라"),
    (re.compile(r"Docker 원클릭", re.IGNORECASE), "자동설치 패키지 원클릭"),
    (re.compile(r"Docker 기반", re.IGNORECASE), "자동설치 패키지 기반"),
    (re.compile(r"Docker 패키징", re.IGNORECASE), "자동설치 패키징"),
    (re.compile(r"Docker 배포", re.IGNORECASE), "자동설치 패키지 배포"),
    (re.compile(r"Docker 컨테이너", re.IGNORECASE), "독립형 구동 패키지"),
    (re.compile(r"기존 상용 CADD", re.IGNORECASE), "기존 상용 신약설계 프로그램"),
    (re.compile(r"해외 CADD", re.IGNORECASE), "해외 신약설계 프로그램"),
    (re.compile(r"CADD SW", re.IGNORECASE), "신약설계 소프트웨어"),
    (re.compile(r"온프레미스 망분리", re.IGNORECASE), "자체 구축형 폐쇄망"),
    (re.compile(r"온프레미스", re.IGNORECASE), "자체 구축형(폐쇄망)"),
    (re.compile(r"On-premise", re.IGNORECASE), "자체 구축형(폐쇄망)"),
    (re.compile(r"Web GUI", re.IGNORECASE), "웹 시각화 화면"),
    (re.compile(r"GUI 대시보드", re.IGNORECASE), "시각화 제어 화면"),
    (re.compile(r"GUI 기반", re.IGNORECASE), "시각화 화면 기반"),
    (re.compile(r"GUI기반", re.IGNORECASE), "시각화 화면 기반"),
    (re.compile(r"GUI에서", re.IGNORECASE), "시각화 화면에서"),
    (re.compile(r"CLI 명령어", re.IGNORECASE), "개발자용 명령어"),
    (re.compile(r"Bio-MLOps MVP", re.IGNORECASE), "바이오 인공지능 운영관리 초기모델(MVP)"),
    (re.compile(r"Bio-MLOps", re.IGNORECASE), "바이오 인공지능 운영관리"),
    (re.compile(r"REST API 래퍼", re.IGNORECASE), "프로그램 연동 모듈(API)"),
    (re.compile(r"REST API", re.IGNORECASE), "프로그램 연동 모듈"),
    (re.compile(r"No-Code", re.IGNORECASE), "노코드(코딩 불필요)"),
    (re.compile(r"Black-box", re.IGNORECASE), "블랙박스(내부 구조 파악 불가)"),
    (re.compile(r"Turn-key", re.IGNORECASE), "턴키(일괄 납품)")
]

exact_replacements = [
    # strict case replacements or with word boundaries
    (re.compile(r"\bDocker\b", re.IGNORECASE), "자동설치 패키지"),
    (re.compile(r"\bCADD\b"), "컴퓨터 신약설계"),
    (re.compile(r"\bSaaS\b"), "클라우드 서비스(웹)"),
    (re.compile(r"\bGUI\b"), "시각화 화면"),
    (re.compile(r"\bCLI\b"), "개발자용 명령어"),
    (re.compile(r"\bMLOps\b"), "인공지능 운영관리")
]

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".jsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for pattern, repl in replacements:
                new_content = pattern.sub(repl, new_content)
                
            for pattern, repl in exact_replacements:
                new_content = pattern.sub(repl, new_content)
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")

print("Replacement complete.")
