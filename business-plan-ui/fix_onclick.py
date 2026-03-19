import os

base_dir = "src"

for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(".jsx"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            # Revert the unintended 'onClick' replacement
            new_content = content.replace("on개발자용 텍스트 명령어ck", "onClick")
            
            if new_content != content:
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Fixed bug in: {file_path}")
