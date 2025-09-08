#!/bin/bash

USER="NguyenXuanThi"

for i in {1..10}
do
  REPO="REACTJS_Tuan$i"
  FOLDER="Tuan$i"
  BRANCH="tuan${i}-branch"

  echo "=== Merge $REPO vào thư mục $FOLDER ==="

  # Xóa remote và branch cũ nếu có
  git remote remove tuan$i 2>/dev/null || true
  git branch -D $BRANCH 2>/dev/null || true

  # Add remote + fetch
  git remote add tuan$i https://github.com/$USER/$REPO.git
  git fetch tuan$i

  # Checkout branch mới từ repo con
  git checkout -b $BRANCH tuan$i/main || git checkout -b $BRANCH tuan$i/master

  # Bỏ README.md nếu có (không quan tâm nữa)
  if [ -f README.md ]; then
    git rm -f README.md
    git commit -m "Xóa README.md để tránh conflict"
  fi

  # Tạo folder đích
  mkdir -p $FOLDER

  # Move toàn bộ file vào folder
  git ls-tree --name-only HEAD | while read FILE; do
    if [ "$FILE" != "$FOLDER" ]; then
      git mv "$FILE" "$FOLDER/" 2>/dev/null || true
    fi
  done
  git commit -m "Move toàn bộ $REPO vào $FOLDER/" || true

  # Quay lại main và merge
  git checkout main
  git merge $BRANCH --allow-unrelated-histories --no-edit
done
