# 🌴 Bali-Inspired Luxury Travel Landing Page

A cinematic luxury travel landing page inspired by the serene beauty of Bali, combining editorial aesthetics with immersive modern web interactions.

## ✨ Live Preview

🔗 **Experience the website live:**
https://riteshxog.github.io/travel-landing-page/

---

## 🚀 Tech Stack

* ⚛️ React
* 📘 TypeScript
* 🎨 Tailwind CSS
* 🎥 Framer Motion
* ⚡ Vite

---

## 🌟 Features

* 🎬 Cinematic hero section
* 🌊 Smooth parallax scrolling effects
* ✨ Luxury-inspired typography
* 📱 Fully responsive design
* 📰 Editorial-style UI aesthetics
* ⚡ Fast and optimized performance

---

## 📸 Design Inspiration

Inspired by:

* Bali luxury resorts
* Editorial magazine layouts
* Minimal cinematic storytelling
* Premium travel experiences

---

## 👨‍💻 Author

**Ritesh Naik**

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Official Plugins

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — Uses Babel (or oxc when used in rolldown-vite) for Fast Refresh.
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — Uses SWC for Fast Refresh.

---

## React Compiler

The React Compiler is not enabled on this template because of its impact on development and build performance.

Learn more here:
https://react.dev/learn/react-compiler/installation

---

## Expanding the ESLint Configuration

If you are developing a production application, consider enabling type-aware lint rules.

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // tseslint.configs.strictTypeChecked,
      // tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also install:

* eslint-plugin-react-x
* eslint-plugin-react-dom

for additional React-specific linting support.

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
