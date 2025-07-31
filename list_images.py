import os
import re
folder_name = input("Input Folder Name: ")
print("Sort Type")
print("1: Name")
print("2: Number (Astro)")
sort_type = input("Sort Type: ")
contents = os.listdir(folder_name)
if sort_type == "2":
    contents.sort(key=lambda name: int(re.match(r"(\d+)_", name).group(1)))
count = 0
print("[", end="")
for i, file_name in enumerate(contents):
    count += 1
    is_last = (i == len(contents) - 1)
    if is_last:
        print(f"\"{file_name}\"", end="")
    else:
        print(f"\"{file_name}\", ", end="")
        if count % 3 == 0:
            print()

print("]", end="")

