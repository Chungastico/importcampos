@AGENTS.md

# Importcampos — Sitio Web

## Contexto de la empresa

**Importcampos** es una empresa dedicada a la **importación, reparación, enderezado y pintura de vehículos**. Su diferencial es mostrar el proceso de transformación completo: desde el estado inicial dañado hasta el resultado final, usando un formato visual de antes/después con timelapse.

### Servicios principales
1. **Importación** — vehículos importados con trámites y documentación completa
2. **Reparación mecánica** — diagnóstico y reparación de motor, transmisión, frenos, suspensión
3. **Enderezado** — corrección de chasis y estructura con equipos de medición láser
4. **Pintura** — cabina profesional con mezclas computarizadas para coincidir con color original

### Concepto visual del sitio
- **Estilo**: dark/moderno, industrial, impacto visual fuerte
- **Hero**: apertura con contraste fuerte, tagline "De destrozado a perfecto."
- **Transformaciones**: slider interactivo de antes/después por vehículo
- **Filosofía**: mostrar el trabajo real — sin filtros, el vehículo destruido y luego el resultado

---

## Paleta de colores

| Variable CSS       | Hex       | Uso                              |
|--------------------|-----------|----------------------------------|
| `--primary`        | `#BF1725` | Rojo principal, CTAs, acentos    |
| `--primary-alt`    | `#BF1736` | Hover states del rojo principal  |
| `--rose`           | `#D98289` | Acentos suaves, detalles sutiles |
| `--light`          | `#F2F2F2` | Fondo claro (sección servicios)  |
| `--dark`           | `#0D0D0D` | Fondo oscuro principal           |

Las variables están definidas en `src/app/globals.css` bajo `:root`.

---

## Stack técnico

- **Framework**: Next.js 16 (App Router)
- **Estilos**: Tailwind CSS v4
- **Lenguaje**: TypeScript
- **Fuente**: Geist Sans (Google Fonts via next/font)

### Estructura de carpetas
```
src/
  app/
    globals.css       — Variables CSS de paleta + estilos globales
    layout.tsx        — Layout raíz con metadata SEO
    page.tsx          — Página principal (compone todas las secciones)
  components/
    Navbar.tsx           — Barra de navegación fija con menú mobile
    HeroSection.tsx      — Sección hero con tagline y CTAs
    BeforeAfterSlider.tsx — Slider interactivo antes/después (drag)
    TransformacionesSection.tsx — Grid de transformaciones con sliders
    ServiciosSection.tsx — Grid de servicios + stats
    ContactoSection.tsx  — Formulario de cotización + datos de contacto
    Footer.tsx           — Footer con redes sociales
```

---

## Guías de desarrollo

### Componentes nuevos
- Siempre usar los colores de la paleta con sus valores hex directamente en clases Tailwind (ej: `bg-[#BF1725]`) o las variables CSS (ej: `bg-[var(--primary)]`)
- No usar los colores por defecto de Tailwind (blue, green, etc.) — todo debe ser coherente con la paleta de Importcampos
- El fondo por defecto de las secciones es `#0D0D0D`; las secciones de contraste usan `#F2F2F2`

### Imágenes de vehículos
- Las fotos antes/después se sirven desde `/public/`
- Naming convention: `{vehiculo}-before-{id}.jpg` y `{vehiculo}-after-{id}.jpg`
- Resolución mínima recomendada: 1280×720px
- Los placeholders actuales (`/placeholder-before-*.jpg`, `/placeholder-after-*.jpg`) deben ser reemplazados con fotos reales

### SEO
- Metadata configurada en `src/app/layout.tsx`
- Lang del HTML: `es` (español)
- Actualizar título, descripción y OpenGraph con info real cuando esté disponible

### Formulario de contacto
- El formulario en `ContactoSection.tsx` es actualmente solo UI (sin backend)
- Pendiente: conectar con un servicio de email (Resend, EmailJS, etc.) o WhatsApp API

---

## Comandos

```bash
npm run dev    # Servidor de desarrollo en localhost:3000
npm run build  # Build de producción
npm run lint   # ESLint
```
