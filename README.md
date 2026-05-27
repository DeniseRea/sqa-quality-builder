# SQA Quality Builder - Roadmap ISO 29110

Proyecto frontend para visualizar el roadmap de la norma ISO/IEC 29110 con una ruta infografica, pines interactivos y tarjetas dinamicas por fase.

## Caracteristicas
- Ruta ondulada estilo infografia con pines por fase.
- Seleccion de fase con enfasis visual.
- Tarjetas dinamicas (explicacion, tareas clave, recursos) segun la fase activa.
- Estilos con Tailwind CSS y Vite.

## Requisitos
- Node.js 18+ (recomendado)
- npm 9+

## Instalacion
```bash
npm install
```

## Ejecutar en desarrollo
```bash
npm run dev
```

## Build de produccion
```bash
npm run build
```

## Previsualizar build
```bash
npm run preview
```

## Estructura
```
index.html
package.json
postcss.config.js
tailwind.config.js
vite.config.ts
src/
  App.tsx
  index.css
  main.tsx
```

## Tecnologias
- React + TypeScript
- Vite
- Tailwind CSS
- lucide-react (iconos)

## Notas
- Los recursos de cada fase se definen en `ROADMAP_PHASES` dentro de `src/App.tsx`.
- Para ajustar el diseno del roadmap (curvas, posiciones, estilos), editar el SVG y las coordenadas `position`.
