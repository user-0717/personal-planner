# 部署指南：个人计划规划网页应用

## 目标
将项目部署到 GitHub Pages，使其他用户可以访问。

## 前提条件
1. 拥有 GitHub 账户
2. 安装 Git
3. 安装 Node.js

## 部署步骤

### 1. 在 GitHub 上创建新仓库
- 登录 GitHub
- 点击右上角的 "New" 按钮创建新仓库
- 填写仓库名称（例如 `personal-planner`）
- 选择仓库类型（公开或私有）
- 点击 "Create repository"

### 2. 初始化本地仓库（如果尚未初始化）
```bash
# 初始化 git 仓库
git init

# 设置 git 身份
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 添加所有文件
git add .

# 初始提交
git commit -m "Initial commit"
```

### 3. 关联远程仓库
```bash
# 替换 <your-username> 和 <your-repo-name> 为你的 GitHub 用户名和仓库名
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 推送代码到 GitHub
git push -u origin master
```

### 4. 安装 gh-pages 并配置部署脚本
```bash
# 安装 gh-pages 包
npm install --save-dev gh-pages
```

### 5. 配置 Vite 构建路径
在 `vite.config.ts` 文件中添加 `base` 配置：
```typescript
export default defineConfig({
  base: './',
  // 其他配置...
})
```

### 6. 运行部署命令
```bash
# 构建项目
npm run build

# 部署到 GitHub Pages
npm run deploy
```

### 7. 访问部署后的网站
- 部署完成后，访问 `https://<your-username>.github.io/<your-repo-name>/`
- 网站应该已经可以在互联网上访问了

## 后续更新
当你对项目进行修改后，只需重新运行部署命令：
```bash
npm run build && npm run deploy
```

## 故障排除
- **404 错误**：确保仓库名称和用户名正确，部署可能需要几分钟时间才能生效
- **部署失败**：检查 `gh-pages` 命令的输出，确保远程仓库配置正确
- **样式或脚本加载失败**：确保 `vite.config.ts` 中的 `base` 配置正确设置为 `'./'`
