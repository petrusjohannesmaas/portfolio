# Portfolio Setup Instructions

## 1. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

## 2. Update `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

## 3. Replace `src/index.css` content

Replace everything in `src/index.css` with the provided `index.css` from this project.

## 4. Install additional packages

```bash
npm install lucide-react
```

## 5. Replace `src/App.tsx` and `src/App.css`

- Replace `src/App.tsx` with the provided `App.tsx`
- Delete or empty `src/App.css` (it's no longer needed — all styles live in index.css and Tailwind)

## 6. Copy all component files

Copy everything from `src/components/` into your `src/components/` folder.

## 6b. Add devicons to `index.html`

In `index.html`, add this inside `<head>` for the tech stack icons:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
```

Also add Google Fonts (already imported in CSS, but add a preconnect for speed):

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

## 7. Run the dev server

```bash
npm run dev
```

## Dark Mode Note

Dark mode is wired via `class="dark"` on the `<html>` element. All components
use `dark:` Tailwind variants. To toggle, add/remove the `dark` class on
`document.documentElement`. You can wire this to a button later.
