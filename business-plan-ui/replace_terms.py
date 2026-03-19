import os
import re

base_dir = "src"

replacements = [
    (r"AI Docker Image", "인공지능 자동설치 패키지"),
    (r"Docker/K8s", "서버 인프라"),
    (r"Docker 원클릭", "자동설치 패키지 원클릭"),
    (r"Docker 기반", "자동설치 패키지 기반"),
    (r"Docker 패키징", "자동설치 패키징"),
    (r"Docker 배포", "자동설치 패키지 배포"),
    (r"Docker 컨테이너", "독립형 구동 패키지"),
    (r"Docker", "자동설치 패키지"),
    (r"기존 상용 CADD", "기존 상용 신약설계 프로그램"),
    (r"해외 CADD", "해외 신약설계 프로그램"),
    (r"CADD SW", "신약설계 소프트웨어"),
    (r"CADD", "컴퓨터 신약설계"),
    (r"SaaS", "클라우드 서비스(웹)"),
    (r"온프레미스 망분리", "자체 구축형 폐쇄망"),
    (r"온프레미스", "자체 구축형(폐쇄망)"),
    (r"On-premise", "자체 구축형(폐쇄망)"),
    (r"Web GUI", "웹 기반 시각화 화면"),
    (r"GUI 대시보드", "시각화 제어 화면"),
    (r"GUI기반", "시각화 화면 기반"),
    (r"GUI 기반", "시각화 화면 기반"),
    (r"GUI에서", "시각화 화면에서"),
    (r"GUI", "시각화 화면"),
    (r"CLI 명령어", "개발자용 명령어"),
    (r"CLI", "개발자용 텍스트 명령어"),
    (r"Bio-MLOps MVP", "바이오 인공지능 운영관리 초기모델(MVP)"),
    (r"Bio-MLOps", "바이오 인공지능 운영관리"),
    (r"MLOps", "인공지능 운영관리"),
    (r"REST API 래퍼", "프로그램 연동 모듈(API)"),
    (r"REST API", "프로그램 연동 모듈"),
    (r"No-Code", "노코드(코딩 불필요)"),
    (r"Black-box", "블랙박스(내부 구조 파악 불가)"),
    (r"Turn-key", "턴키(일괄 납품)")
]

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".jsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = content
            for pattern, repl in replacements:
                new_content = re.sub(pattern, repl, new_content, flags=re.IGNORECASE)
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated: {file_path}")

print("Replacement complete.")
