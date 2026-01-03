---
description: LPの修正を適用し、自動的にGitHubへデプロイする一連のフロー
---

// turbo-all

1. 現在の変更状況を確認する（念のため）
   git status

2. 変更をすべてステージング、コミット、プッシュを一気に実行する
   git add .; git commit -m "Auto-deploy via Turbo Workflow: Apply users requested fixes"; git push origin main

3. 完了メッセージを表示する
   echo "Turbo Deployment Complete. Please check the live URL."
