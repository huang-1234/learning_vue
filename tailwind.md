## 初始化 Tailwind CSS

通过 npm 安装 Tailwind
安装 Tailwind 以及其它依赖项:

```bash
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Vue 3 和 Vite 尚未支持 PostCSS 8，所以您需要安装 Tailwind CSS v2.0 PostCSS 7 兼容性版本。

创建您的配置文件
接下来，生成您的 tailwind.config.js 和 postcss.config.js 文件：

npx tailwindcss init -p
这将会在您的项目根目录创建一个最小化的 tailwind.config.js 文件：

```bash
// tailwind.config.js
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

阅读配置文档了解更多。
