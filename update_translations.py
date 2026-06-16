import os

directory = "/Users/mishenng/Desktop/quickstart/content/cn/css-reading/"

processed_files = []

for filename in os.listdir(directory):
    if not filename.endswith(".md"):
        continue
    filepath = os.path.join(directory, filename)
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    parts = content.split("---")
    if len(parts) >= 3:
        body = "---".join(parts[2:])
        if "title: " in body or "title: “" in body:
            idx1 = body.find("title: ")
            idx2 = body.find("title: “")
            if idx1 == -1: idx = idx2
            elif idx2 == -1: idx = idx1
            else: idx = min(idx1, idx2)
            
            appended = body[idx:]
            
            lines = appended.split('\n')
            new_frontmatter = ["---"]
            in_points = False
            
            for line in lines:
                line = line.strip()
                if not line or line == "⸻":
                    continue
                if line.startswith("points:"):
                    in_points = True
                    new_frontmatter.append("points:")
                    continue
                
                if not in_points:
                    if line.startswith("title:") or line.startswith("citation:") or line.startswith("link:") or line.startswith("source:"):
                        key = line.split(":", 1)[0]
                        val = line.split(":", 1)[1].strip()
                        val = val.strip("“").strip("”").strip('"')
                        val = val.replace("“", "'").replace("”", "'").replace('"', "'")
                        new_frontmatter.append(f'{key}: "{val}"')
                    elif line.startswith("categories:") or line.startswith("tags:"):
                        key = line.split(":", 1)[0]
                        val = line.split(":", 1)[1].strip()
                        val = val.replace("“", '"').replace("”", '"').replace("‘", "'").replace("’", "'")
                        new_frontmatter.append(f"{key}: {val}")
                    elif line.startswith("type:"):
                        key = line.split(":", 1)[0]
                        val = line.split(":", 1)[1].strip().strip("“").strip("”").strip('"')
                        new_frontmatter.append(f'{key}: "{val}"')
                    else:
                        new_frontmatter.append(line.replace("“", '"').replace("”", '"'))
                else:
                    if line.startswith("*"):
                        point_text = line[1:].strip()
                        point_text = point_text.strip("“").strip("”").strip('"')
                        point_text = point_text.replace("“", "'").replace("”", "'").replace('"', "'")
                        if ":" in point_text:
                            split_idx = point_text.find(":")
                            prefix = point_text[:split_idx].strip()
                            suffix = point_text[split_idx+1:].strip()
                            formatted_point = f'  - "**{prefix}:** {suffix}"'
                            new_frontmatter.append(formatted_point)
                        else:
                            formatted_point = f'  - "{point_text}"'
                            new_frontmatter.append(formatted_point)
            
            new_frontmatter.append("---")
            new_content = "\n".join(new_frontmatter) + "\n"
            
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(new_content)
            processed_files.append(filename)

print("Processed files:", processed_files)
