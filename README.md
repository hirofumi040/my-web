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

## 国内访问部署建议

如果主要面向中国大陆访问，不建议只部署到 Vercel、Netlify、GitHub Pages 这类海外平台。当前页面打包后是纯静态文件，可以优先部署到国内云厂商的静态网站托管、对象存储或云服务器，再按需接入国内 CDN。

推荐路径：

1. 购买或使用自己的域名。
2. 如果使用中国大陆服务器、对象存储静态网站或大陆 CDN，先完成 ICP 备案。
3. 运行构建命令：

```bash
npm run build
```

4. 将 `dist` 目录里的所有文件上传到国内静态托管服务，例如阿里云 OSS、腾讯云 COS、华为云 OBS，或自己的 Nginx 服务器。
5. 将域名解析到对应服务，并启用 HTTPS。
6. 访问线上域名，确认首页、`/assets/` 下的 JS/CSS 和 `/resume.pdf` 都能正常加载。

这个项目目前没有引用 Google Fonts、海外 CDN、远程图片、统计脚本或 iframe；页面资源都来自本项目本身。国内访问不稳定时，优先检查部署平台、域名解析、CDN 线路和备案状态。

## OSS/COS 静态托管 + 自定义域名

这是国内访问的优先试用方案。上传时要上传 `dist` 目录里的内容，而不是上传整个项目目录。

### 先构建上传包

```bash
npm run build
```

构建完成后，上传 `dist` 目录中的这些内容：

```text
assets/
index.html
resume.pdf
```

如果 `dist` 中还有 `hero/`、`cad-showcase/`、`ppt-showcase/` 等目录，也一起上传。

### 阿里云 OSS

1. 创建 Bucket，地域优先选靠近访问者的位置，例如华东、华南、华北。
2. 读写权限建议保持私有或公共读按需配置；静态网站公开访问通常需要对象可被读取。
3. 开启静态网站托管。
4. 默认首页填写 `index.html`。
5. 默认 404 页面可以先填写 `index.html`。
6. 上传 `dist` 目录中的所有文件和文件夹。
7. 绑定自定义域名，并按控制台提示添加 CNAME 解析。
8. 给自定义域名配置 HTTPS 证书。

### 腾讯云 COS

1. 创建存储桶，地域优先选靠近访问者的位置，例如广州、上海、北京。
2. 开启静态网站功能。
3. 索引文档填写 `index.html`。
4. 错误文档可以先填写 `index.html`。
5. 上传 `dist` 目录中的所有文件和文件夹。
6. 绑定自定义域名，并按控制台提示添加 CNAME 解析。
7. 给自定义域名配置 HTTPS 证书。

### 备案提醒

如果 Bucket 或 CDN 使用中国大陆地域，并且绑定自定义域名，通常需要 ICP 备案。没有备案时，可以先用服务商提供的默认访问域名测试，但正式投递和长期展示建议尽快用已备案域名。

## 部署到 Cloudflare Pages

项目已包含 `wrangler.toml`，Cloudflare Pages 的输出目录配置为 `./dist`。

### 方式一：Cloudflare 控制台部署

1. 将项目推送到 GitHub。
2. 打开 Cloudflare Dashboard，进入 `Workers & Pages`。
3. 创建 Pages 项目，并连接这个 GitHub 仓库。
4. Framework preset 选择 `Vite`。
5. Build command 填写：

```bash
npm run build
```

6. Build output directory 填写：

```bash
dist
```

7. 点击部署，完成后 Cloudflare 会生成 `*.pages.dev` 访问地址。

### 方式二：Wrangler 命令部署

先构建：

```bash
npm run build
```

再登录并部署：

```bash
npx wrangler login
npm run deploy:cloudflare
```

注意：Cloudflare Pages 在中国大陆访问通常比部分海外平台更稳，但它不是中国大陆备案 CDN。若后续要追求大陆长期稳定访问，仍建议使用已备案域名和大陆节点服务。

## 海外备选部署

如果只是给海外用户或临时演示，也可以部署到 Vercel：

1. 将项目推送到 GitHub。
2. 打开 Vercel 并登录。
3. 点击 `Add New Project`。
4. 选择这个 GitHub 仓库。
5. Framework Preset 选择 `Vite`。
6. Build Command 使用 `npm run build`。
7. Output Directory 使用：

```bash
dist
```

8. 点击 Deploy。

注意：Vercel 生成的访问链接在中国大陆网络下可能不稳定，正式投递国内岗位时建议使用上面的国内访问部署方案。
