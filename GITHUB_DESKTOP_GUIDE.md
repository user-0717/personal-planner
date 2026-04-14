# GitHub Desktop 使用指南

## 步骤 1：安装并登录 GitHub Desktop

1. 打开 GitHub Desktop 应用程序
2. 使用你的 GitHub 账号登录

## 步骤 2：克隆你的仓库

1. 点击 "File" > "Clone Repository..."
2. 在 "URL" 标签页中，输入你的仓库地址：`https://github.com/user-0717/personal-planner`
3. 选择一个本地目录来存放克隆的仓库
4. 点击 "Clone" 按钮

## 步骤 3：添加项目文件

1. 找到你当前项目文件所在的位置
2. 复制所有项目文件（包括 `src`、`public`、`package.json` 等）
3. 粘贴到克隆的仓库目录中，覆盖同名文件

## 步骤 4：提交更改

1. 在 GitHub Desktop 中，你会看到所有更改的文件
2. 在 "Summary" 字段中输入提交信息，例如 "Initial project setup"
3. 点击 "Commit to main" 按钮

## 步骤 5：推送到 GitHub

1. 点击 "Push origin" 按钮，将本地更改推送到 GitHub

## 步骤 6：配置 GitHub Pages

1. 打开浏览器，访问你的 GitHub 仓库页面：`https://github.com/user-0717/personal-planner`
2. 点击顶部导航栏中的 "Settings" 选项
3. 在左侧菜单中点击 "Pages"
4. 在 "Source" 部分，选择 "main" 分支
5. 在 "Folder" 部分，选择 "/ (root)"
6. 点击 "Save" 按钮

## 步骤 7：等待部署完成

- GitHub Pages 部署可能需要几分钟时间
- 部署完成后，你会在 GitHub Pages 设置页面看到一个绿色的 "Your site is published at" 消息
- 点击提供的 URL 即可访问你的个人计划规划网页应用

## 步骤 8：更新项目（后续修改）

1. 在本地修改项目文件
2. 在 GitHub Desktop 中查看更改
3. 输入提交信息并提交
4. 点击 "Push origin" 推送更改
5. GitHub Pages 会自动重新部署你的网站

## 故障排除

### 如果遇到权限问题
- 确保你对仓库有写入权限
- 检查你的 GitHub 账号是否已正确登录

### 如果 GitHub Pages 部署失败
- 检查仓库中是否有 `index.html` 文件
- 确保 `package.json` 中的构建脚本正确
- 等待几分钟后刷新页面查看部署状态

### 如果遇到文件冲突
- 在 GitHub Desktop 中解决冲突后再提交
- 或者使用 "Discard Changes" 选项放弃本地更改，重新从 GitHub 拉取最新版本

## 其他提示

- 定期提交你的更改，保持代码的版本控制
- 使用有意义的提交信息，方便后续查看历史记录
- 如果需要回滚到之前的版本，可以使用 GitHub Desktop 的历史记录功能

现在你的个人计划规划网页应用已经成功部署到 GitHub Pages，可以通过生成的 URL 访问了！