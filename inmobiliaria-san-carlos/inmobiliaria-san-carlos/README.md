# Casa Ñuble Propiedades — Sitio inmobiliario (Fase 1)

Sitio web para un agente inmobiliario independiente en San Carlos, Región de Ñuble, Chile.

**Estado:** Fase 1 — estructura inicial y diseño visual. Sin Supabase, autenticación, mapas ni servicios externos.

## Tecnologías

- React 18 + TypeScript
- Vite
- Tailwind CSS 3
- React Router 6

## Requisitos

- Node.js 18 o superior (probado con Node 22)
- npm

## Instalación y uso

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo (http://localhost:5173)
npm run build      # verificar tipos y generar la versión de producción en /dist
npm run preview    # previsualizar la compilación
```

## Estructura del proyecto

```
src/
├── App.tsx                  # Definición de rutas
├── main.tsx                 # Punto de entrada (BrowserRouter)
├── index.css                # Estilos base y clases reutilizables (btn-primary, card, input…)
├── config/site.ts           # Datos generales del sitio y del agente (EDITAR AQUÍ)
├── data/properties.ts       # Viviendas de demostración (datos FICTICIOS)
├── types/property.ts        # Tipos TypeScript de propiedades
├── utils/format.ts          # Formato de precios (CLP / UF)
├── components/
│   ├── Layout.tsx, Navbar.tsx, Footer.tsx
│   ├── Container.tsx, SectionTitle.tsx, DemoBadge.tsx
│   ├── Logo.tsx             # Espacio reservado para el logotipo
│   ├── PropertyCard.tsx, PropertyPlaceholder.tsx
│   ├── ContactForm.tsx      # Formulario de demostración (no envía datos)
│   └── admin/AdminLayout.tsx
└── pages/
    ├── Home.tsx             # /
    ├── Properties.tsx       # /propiedades
    ├── PropertyDetail.tsx   # /propiedades/:id
    ├── About.tsx            # /acerca-de-mi
    ├── NotFound.tsx         # Cualquier otra ruta
    └── admin/
        ├── AdminDashboard.tsx   # /admin
        └── AdminProperties.tsx  # /admin/propiedades
```

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Inicio: logotipo, presentación, viviendas destacadas y contacto |
| `/propiedades` | Listado de viviendas con filtros por tipo y operación |
| `/propiedades/:id` | Ficha individual de la propiedad |
| `/acerca-de-mi` | Página Acerca de mí |
| `/admin` | Panel administrativo (diseño, sin funciones reales) |
| `/admin/propiedades` | Listado administrativo (diseño, sin funciones reales) |

El panel administrativo no aparece en la navegación pública. Para revisarlo, ir directamente a `/admin`.

## Pendientes que debe completar el agente

Todos estos valores están marcados con `[ ]` o son ejemplos ficticios:

- **Nombre del agente** → `src/config/site.ts` (`agentName`)
- **Teléfono, correo, dirección y horario** → `src/config/site.ts`
- **Logotipo** → reemplazar `src/components/Logo.tsx` por una imagen en `public/` (ej. `<img src="/logo.svg" />`)
- **Fotografías** del agente y de las propiedades (actualmente hay marcadores de posición)
- **Textos** de presentación y "Quién soy" / "Cómo trabajo" en `Home.tsx` y `About.tsx`
- **Viviendas reales**: reemplazar o eliminar `src/data/properties.ts` cuando existan datos verificados

No se incluyen certificaciones, testimonios, propiedades reales ni datos personales inventados.

## Identidad visual propuesta

- **Nombre propuesto:** Casa Ñuble Propiedades (independiente del nombre personal del agente; es editable en `site.ts`)
- **Paleta:**
  - Verde oscuro `#1F3D2B` (principal) y `#142A1D` (fondos oscuros)
  - Blanco
  - Beige `#F4EDE1`
  - Dorado `#B8943D` (acentos)
- **Tipografía:** serif del sistema (Georgia) para títulos y sans del sistema para texto. Se usan fuentes del sistema para no depender de servicios externos; se pueden reemplazar en fases posteriores.

Los colores están definidos en `tailwind.config.js`.

## Despliegue

Es una aplicación de una sola página (SPA). Al desplegar, configurar la reescritura de todas las rutas a `index.html` para que las rutas como `/propiedades` funcionen al recargar. Ejemplos:

- **Netlify:** crear `public/_redirects` con la línea `/* /index.html 200`
- **Vercel:** crear `vercel.json` con `{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }`

## Próximas fases (requieren autorización)

1. Integración con Supabase (base de datos y almacenamiento de imágenes)
2. Autenticación real para el panel administrativo
3. CRUD de propiedades desde el panel
4. Formulario de contacto conectado a backend
5. Mapas y servicios externos

**Importante:** no incluir contraseñas, claves de API ni tokens en el código. Las credenciales se gestionarán mediante variables de entorno (`.env`, ignorado por Git) en la fase correspondiente.
