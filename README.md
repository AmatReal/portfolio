# Portfolio Mateo Zamora — Astro SSG

## Estructura

```
src/
├── assets/
│   ├── images/                  # imágenes optimizadas por Astro en build
│   └── documents/               # CV y otros PDFs descargables
├── layouts/BaseLayout.astro
├── components/
│   ├── Navbar.astro
│   ├── Hero.astro
│   ├── FeaturedProject.astro
│   ├── ProjectCard.astro
│   ├── SkillCard.astro
│   └── Footer.astro
├── data/
│   ├── featured.ts
│   ├── projects.ts
│   └── skills.ts
├── pages/index.astro
└── styles/global.css

public/
└── video/                       # video del hero (Astro no optimiza video)
```

## Setup inicial

```bash
npm install
npm run dev        # http://localhost:4321
npm run preview    # simula el base path de producción (úsalo antes de hacer push)
npm run build      # genera ./dist
```

## Antes del primer deploy

1. Edita `astro.config.mjs`:
   ```js
   site: 'https://TU-USUARIO.github.io',
   base: '/NOMBRE-DEL-REPO',
   ```

2. En GitHub → Settings → Pages → Source: **GitHub Actions**

3. Haz push a `main`. El workflow se encarga del resto.

## Agregar un proyecto nuevo

Edita `src/data/projects.ts` y agrega un objeto al array:

```ts
{
  title: 'Nuevo Proyecto',
  role: '3D Rigger',
  software: 'Blender',
  image: '/Imagenes/nuevo.jpg',
  link: 'https://instagram.com/...',
}
```

Sin tocar markup. Sin duplicar HTML.

## Assets

Todos los archivos de `Imagenes/` y `Documents/` van en `public/` para que
Astro los copie tal cual a `dist/`. No los muevas a `src/assets/` a menos que
quieras optimización de imágenes con `<Image />` de `astro:assets`.
