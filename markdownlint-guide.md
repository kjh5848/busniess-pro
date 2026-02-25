# VS Code markdownlint 확장 프로그램 가이드

## 1. 개요
[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)는 Visual Studio Code에서 마크다운(Markdown) 문서의 작성 표준을 제시하고 일관성을 유지할 수 있도록 돕는 확장 프로그램입니다. 마크다운의 문법을 분석하여 오류나 스타일 위반을 알려주고 부분적으로 자동 수정을 지원합니다.

## 2. 설치 방법
- **빠른 열기(Quick Open) 사용**: `Ctrl+P`(Windows/Linux) 또는 `Cmd+P`(macOS)를 누르고 `ext install markdownlint`를 입력한 뒤 설치를 클릭합니다.
- **VS Code 확장 탭 사용**: `Ctrl+Shift+X`(Windows/Linux) 또는 `Shift+Cmd+X`(macOS)를 눌러 탭을 연 뒤 `markdownlint`를 검색해 David Anson이 만든 확장을 설치합니다.

## 3. 기본 사용 방법
- 확장 프로그램이 설치된 상태에서 마크다운 파일을 작성하면, 규칙에 어긋나는 코드 아래에 **녹색 물결 밑줄**이 표시됩니다.
- 밑줄에 마우스를 올리면 `MD###` 형태의 경고 코드와 내용(예: "heading-increment", "no-hard-tabs" 등)이 표시됩니다.
- 경고가 있는 줄을 클릭한 뒤 **전구 아이콘(💡)**을 누르거나 단축키 `Ctrl+.`(또는 `Cmd+.`)를 누르면 **빠른 수정(Quick Fix)** 다이얼로그가 표시되며 일부 문제를 일괄 수정하거나 무시할 수 있습니다. 경고 문구를 클릭하면 기본 브라우저를 통해 각 오류의 문서 설명 페이지로 이동합니다.
- 모든 위반 목록은 문제 패널(`Ctrl+Shift+M` / `Shift+Cmd+M`)에서 확인할 수 있습니다.

## 4. 유용한 기능 및 자동 수정 커맨드
**1) 포맷팅 기능 (자동 수정)**
명령 팔레트(`Ctrl+Shift+P`)에서 `Format Document`를 실행하거나 단축키 `Shift+Alt+F`(`Shift+Option+F`)를 누르면 지원되는 위반 사항을 자동으로 올바르게 변경합니다.

**2) 저장 시 자동 적용(Auto-Fix on Save)**
`settings.json`에 다음 설정을 추가하면 마크다운 문서를 저장하거나 붙여넣기할 때 자동으로 형식을 수정합니다:
```json
"[markdown]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true
},
"editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true
}
```

**3) 전체 워크스페이스 검사**
여러 마크다운 파일을 한눈에 점검하려면 명령 팔레트에서 `markdownlint.lintWorkspace`를 실행합니다. 모든 파일을 검사해 터미널과 문제 패널에 결과를 보여줍니다.

**4) 검사 일시 중지/재개**
일시적으로 린트(Linting) 기능을 중지하고 싶다면 `markdownlint.toggleLinting` 커맨드로 켜거나 끌 수 있습니다.

## 5. 설정 및 규칙 커스터마이징 (Configure)
기본적으로 일반적인 문장이 80자를 넘는 것을 고려하여 **MD013(line-length)** 규칙은 비활성화되어 있습니다.
- **설정 파일 만들기**: 명령 팔레트에서 `markdownlint.openConfigFile`을 실행하면 워크스페이스 루트 경로에 설정 파일이 만들어집니다. (예: `.markdownlint.json`, `.markdownlint.yaml` 등)
- 설정 파일에서 규칙을 입맛에 맞게 재정의할 수 있습니다.

**예시 (`.markdownlint.json`)**:
```json
{
    "MD013": false,
    "MD003": { "style": "atx_closed" },
    "MD007": { "indent": 4 },
    "no-hard-tabs": false
}
```
위와 같이 설정 파일에서 특정 오류 규칙 번호(`MD...`) 활성화 여부를 `false`/`true`로 지정하거나 들여쓰기 수준 세부 속성을 변경할 수 있습니다.
