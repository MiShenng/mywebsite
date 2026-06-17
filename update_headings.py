import os

directory = "/Users/mishenng/Desktop/quickstart/content/cn/css-reading/"
updated_files = []

for filename in os.listdir(directory):
    if not filename.endswith(".md"):
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = content.replace('"**方法：** ', '"**Method:** ')
    new_content = new_content.replace('"**方法：**', '"**Method:** ')
    new_content = new_content.replace('"**理论框架：** ', '"**Theoretical Framework:** ')
    new_content = new_content.replace('"**理论框架：**', '"**Theoretical Framework:** ')
    new_content = new_content.replace('"**核心结论：** ', '"**Key Findings:** ')
    new_content = new_content.replace('"**核心结论：**', '"**Key Findings:** ')

    if new_content != content:
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(new_content)
        updated_files.append(filename)

print(f"Updated {len(updated_files)} files.")
