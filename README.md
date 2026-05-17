# A26 Web Portafolio

Sitio web personal y portafolio de **Arturo Jofré López**, Product Designer con más de 14 años de experiencia diseñando productos digitales.

🔗 **Live site:** [arturojofre.com](https://arturojofre.com)

---

## 🚀 Tecnologías

- **[Astro](https://astro.build/)** v6.3.1 — Framework web para sitios estáticos de alto rendimiento
- **[Tailwind CSS](https://tailwindcss.com/)** v4.2.4 — Framework de utilidades CSS
- **[Motion](https://motion.dev/)** v12.38.0 — Animaciones y transiciones
- **Node.js** >= 22.12.0

---

## 📁 Estructura del proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── assets/
│       ├── arturojofre_logo.svg
│       └── img/portafolio/      # Imágenes de proyectos
├── src/
│   ├── assets/                  # Assets procesados por Astro
│   ├── components/              # Componentes reutilizables
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Button.astro
│   │   ├── ProjectCard.astro
│   │   └── JobPosition.astro
│   ├── content/                 # Colecciones de contenido
│   │   └── proyectos/           # Archivos Markdown de proyectos
│   ├── layouts/
│   │   └── Layout.astro         # Layout principal
│   ├── pages/                   # Rutas del sitio
│   │   ├── index.astro          # Página de inicio
│   │   ├── sobre-mi.astro       # Página sobre mí
│   │   └── proyectos/
│   │       ├── [...page].astro  # Listado paginado de proyectos
│   │       └── [slug].astro     # Página de detalle de proyecto
│   ├── styles/
│   │   └── global.css
│   └── content.config.ts        # Esquema de colecciones
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`    | Instala las dependencias                     |
| `pnpm dev`        | Inicia servidor de desarrollo en `localhost:4321` |
| `pnpm build`      | Construye el sitio para producción en `./dist/` |
| `pnpm preview`    | Previsualiza la build localmente             |
| `pnpm astro ...`  | Ejecuta comandos CLI de Astro                |

---

## ✨ Características

- **Diseño responsivo** optimizado para todos los dispositivos
- **Animaciones de scroll** con Motion para una experiencia fluida
- **Colecciones de contenido** gestionadas mediante archivos Markdown
- **Paginación de proyectos** con rutas dinámicas
- **Páginas de detalle** para cada proyecto del portafolio
- **Tema oscuro** con estética moderna y tipografía Geist
- **SEO optimizado** con metadatos configurables por página
- **Navegación persistente** con transiciones suaves entre páginas

---

## 📬 Contacto

- [LinkedIn](https://linkedin.com/in/arturojofre)
- [GitHub](https://github.com/arturojofre)
- [Agenda una reunión](https://calendar.app.google/ZE6YQWLGgc8WUZSDA)

---

© 2026 Arturo Jofré López — Product Designer
