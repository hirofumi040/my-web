# 牛博文个人 AI 作品展示网页

一个用于 AI 产品经理岗位投递的个人展示主页，重点展示设计背景、AI 工作流实践、自动化项目和个人思考。

## 技术栈

- React
- Vite
- Tailwind CSS
- lucide-react

## 本地运行

请先安装 Node.js，推荐使用 LTS 版本。

```bash
npm install
npm run dev
```

启动后打开终端里显示的本地地址，通常是：

```bash
http://localhost:5173
```

## 构建

```bash
npm run build
```

构建产物会生成在 `dist` 目录。

## 简历文件

简历已放在：

```bash
public/resume.pdf
```

页面中的“下载简历”按钮会直接下载该文件。后续如需更新简历，只需要用新的 PDF 替换这个文件，并保持文件名为 `resume.pdf`。

## 部署到 Vercel

1. 将项目推送到 GitHub。
2. 打开 [Vercel](https://vercel.com/) 并登录。
3. 点击 `Add New Project`。
4. 选择这个 GitHub 仓库。
5. Framework Preset 选择 `Vite`。
6. Build Command 使用：

```bash
npm run build
```

7. Output Directory 使用：

```bash
dist
```

8. 点击 Deploy。

部署成功后，Vercel 会生成一个可直接发送给招聘方的访问链接。
