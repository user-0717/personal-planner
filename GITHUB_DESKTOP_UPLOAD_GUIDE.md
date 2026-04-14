# 使用 GitHub Desktop 上传完整项目指南

## 步骤 1：安装并打开 GitHub Desktop

1. 确保你已经安装了 GitHub Desktop 应用程序
2. 打开 GitHub Desktop 并使用你的 GitHub 账号登录

## 步骤 2：克隆你的仓库

1. 点击 "File" > "Clone Repository..."
2. 在 "URL" 标签页中，输入你的仓库地址：`https://github.com/user-0717/personal-planner`
3. 选择一个本地目录来存放克隆的仓库（例如：`D:\github\personal-planner`）
4. 点击 "Clone" 按钮

## 步骤 3：准备完整的项目文件

1. 从 `/workspace` 目录中复制所有项目文件和目录，包括：
   - src/（源代码目录）
   - public/（静态资源目录）
   - package.json（项目配置）
   - tsconfig.json（TypeScript配置）
   - vite.config.ts（Vite配置）
   - tailwind.config.js（Tailwind CSS配置）
   - postcss.config.js（PostCSS配置）
   - .gitignore（Git忽略文件）
   - index.html（入口HTML文件）
   - README.md（项目说明文件）

2. 粘贴这些文件到你刚刚克隆的本地仓库目录中（例如：`D:\github\personal-planner`）
3. 覆盖任何同名文件

## 步骤 4：在 GitHub Desktop 中查看更改

1. 回到 GitHub Desktop 应用程序
2. 你应该能看到所有添加和修改的文件
3. 在 "Summary" 字段中输入提交信息，例如 "Add complete project structure"

## 步骤 5：提交更改

1. 点击 "Commit to main" 按钮
2. 等待提交完成

## 步骤 6：推送到 GitHub

1. 点击 "Push origin" 按钮
2. 等待推送完成

## 步骤 7：验证上传结果

1. 打开浏览器，访问你的 GitHub 仓库页面：`https://github.com/user-0717/personal-planner`
2. 刷新页面，你应该能看到所有上传的文件和目录

## 步骤 8：配置 GitHub Pages

1. 在 GitHub 仓库页面中，点击顶部导航栏中的 "Settings" 选项
2. 在左侧菜单中点击 "Pages"
3. 在 "Source" 部分，选择 "main" 分支
4. 在 "Folder" 部分，选择 "/ (root)"
5. 点击 "Save" 按钮

## 步骤 9：等待部署完成

- GitHub Pages 部署可能需要几分钟时间
- 部署完成后，你会在 GitHub Pages 设置页面看到一个绿色的 "Your site is published at" 消息
- 点击提供的 URL 即可访问你的个人计划规划网页应用

## 故障排除

### 如果看不到所有文件
- 确保你复制了所有文件和目录
- 检查 GitHub Desktop 中的 "Changes" 标签页，确保所有文件都已添加

### 如果推送失败
- 检查你的网络连接
- 确保你对仓库有写入权限
- 尝试重新登录 GitHub Desktop

### 如果 GitHub Pages 部署失败
- 确保仓库中有完整的项目结构
- 等待几分钟后刷新页面查看部署状态
- 检查 GitHub Actions 中的部署日志

现在你的完整项目已经上传到 GitHub 仓库，并且正在部署到 GitHub Pages。按照这些步骤操作后，你的个人计划规划网页应用应该可以正常访问了！