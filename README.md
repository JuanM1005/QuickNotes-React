# QuickNotes

QuickNotes es una aplicación de notas construida con React, TypeScript, Vite y Tailwind CSS. El objetivo del proyecto es practicar conceptos fundamentales de React mientras se construye una interfaz limpia, modular y escalable.

## Descripción

La aplicación permite crear notas con título, contenido y un color opcional. Cada nota se muestra en una tarjeta visual con fecha de creación formateada. Las notas se agregan desde un modal con formulario validado.

Este proyecto forma parte de una práctica progresiva para reforzar conceptos como:

- Componentes reutilizables
- Props tipadas con TypeScript
- Interfaces y tipos personalizados
- Hooks personalizados para separar lógica de UI
- Manejo de estado con `useState`
- Formularios controlados con validación
- Modales accesibles (Escape, focus trap, scroll lock)
- Renderizado de listas con `.map()`
- Organización modular de archivos
- Estilos con Tailwind CSS

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- clsx
- Bun

## Instalación

Clona el repositorio o abre la carpeta del proyecto y ejecuta:

```bash
bun install
```

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
bun run dev
```

Después abre la URL que muestra la terminal, normalmente:

```bash
http://localhost:5173
```

## Scripts disponibles

```bash
bun run dev
```

Inicia el servidor de desarrollo.

```bash
bun run build
```

Genera la versión de producción.

```bash
bun run preview
```

Previsualiza la versión de producción.

```bash
bun run format
```

Formatea los archivos del proyecto con Prettier.

```bash
bun run format:check
```

Revisa si los archivos están correctamente formateados sin modificarlos.

## Estructura del proyecto

```txt
src/
├─ App/
│  ├─ hooks/
│  │  └─ useAppContent.ts
│  ├─ App.tsx
│  ├─ App.styles.ts
│  ├─ AppContent.tsx
│  └─ AppContent.styles.ts
├─ components/
│  ├─ notes/
│  │  ├─ NoteCard/
│  │  ├─ NoteForm/
│  │  │  └─ hooks/
│  │  │     └─ useNoteForm.ts
│  │  └─ NoteList/
│  └─ ui/
│     ├─ Button/
│     ├─ FormField/
│     ├─ Input/
│     ├─ Modal/
│     │  └─ hooks/
│     │     ├─ useEscapeKey.ts
│     │     ├─ useFocusTrap.ts
│     │     └─ useLockScroll.ts
│     └─ Textarea/
├─ data/
│  └─ notes.data.ts
├─ types/
│  └─ note.types.ts
├─ utils/
│  ├─ createNote.ts
│  └─ formatDate.ts
└─ main.tsx
```

## Modelo de datos

Cada nota utiliza la interface `Note`:

```ts
export type NoteColor = 'blue' | 'green' | 'yellow' | 'pink' | 'purple';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
}
```

### Explicación de campos

| Campo       | Tipo        | Descripción                                             |
| ----------- | ----------- | ------------------------------------------------------- |
| `id`        | `string`    | Identificador único generado con `crypto.randomUUID()`. |
| `title`     | `string`    | Título breve de la nota.                                |
| `content`   | `string`    | Contenido principal de la nota.                         |
| `createdAt` | `string`    | Fecha de creación en formato ISO.                       |
| `updatedAt` | `string`    | Fecha de última edición en formato ISO.                 |
| `color`     | `NoteColor` | Color opcional para personalizar la tarjeta.            |

## Componentes principales

### `NoteCard`

Renderiza una tarjeta individual de nota. Muestra:

- Título
- Contenido
- Fecha de creación formateada
- Color visual con borde izquierdo y hover que refleja el color de la nota

### `NoteList`

Renderiza una lista responsive de notas usando CSS Grid.

Distribución:

- 1 columna en mobile
- 2 columnas en tablet
- 3 columnas en desktop

### `NoteForm`

Formulario controlado para crear notas. Incluye:

- Campo de título
- Campo de contenido (máx. 500 caracteres)
- Selector de color con indicador visual de selección
- Validación: el botón de guardar se desactiva si algún campo está vacío
- Reset automático al guardar o cancelar

### `Modal`

Modal accesible con:

- Cierre con tecla Escape (`useEscapeKey`)
- Bloqueo de scroll del body (`useLockScroll`)
- Trampa de foco para que el Tab no salga del modal (`useFocusTrap`)
- Cierre al hacer clic en el overlay
- Renderizado con `createPortal` para evitar problemas de z-index

### `FormField`

Envuelve un input o textarea con label, indicador de campo requerido, texto de ayuda y mensaje de error. El label cambia de color al activarse el campo gracias a `group-focus-within` de Tailwind.

### `Button`

Componente reutilizable con variantes (`primary`, `secondary`, `unstyled`), tamaños (`sm`, `md`, `lg`) y opción de ancho completo.

## Hooks personalizados

### `useAppContent`

Gestiona el estado global de la aplicación: lista de notas y visibilidad del modal.

### `useNoteForm`

Gestiona el estado del formulario: valores de los campos, validación y reset.

### `useEscapeKey`

Escucha el evento `keydown` y ejecuta un callback al presionar Escape. Limpia el listener al desmontar.

### `useFocusTrap`

Aplica `inert` al elemento `#root` mientras el modal está abierto, forzando que el foco quede dentro del modal (que se renderiza fuera de root vía portal).

### `useLockScroll`

Aplica `overflow: hidden` al body mientras el modal está abierto. Restaura el valor original al cerrar.

## Utilidades

### `createNote`

Factory que construye un objeto `Note` completo a partir de un `NoteInput`, generando el `id` con `crypto.randomUUID()` y los timestamps con `new Date().toISOString()`.

### `formatDate`

Convierte una fecha en formato ISO a un formato legible en español (es-MX).

Ejemplo:

```ts
formatDate('2026-06-04T10:30:00.000Z');
```

Salida esperada:

```txt
04 jun 2026, 10:30
```

## Decisiones técnicas

### Separación de lógica y UI con hooks

La lógica de cada componente complejo vive en su propio hook (`useNoteForm`, `useAppContent`). El componente solo se encarga del renderizado.

### Uso de `interface` para `Note`

Se usa `interface` porque `Note` representa la estructura de un objeto. Esto hace que el modelo sea claro y fácil de reutilizar en componentes, datos mockeados y hooks.

### Uso de `type` para `NoteColor`

Se usa `type` porque `NoteColor` representa un conjunto limitado de valores permitidos, evitando que se use cualquier string inválido como color.

### Fechas como `string`

Las fechas se guardan como `string` en formato ISO porque en el futuro el proyecto usará `localStorage`, que guarda datos como texto.

## Estado actual

Actualmente la aplicación:

- Renderiza notas en un grid responsive.
- Permite agregar nuevas notas desde un modal con formulario validado.
- Aplica colores personalizados a las tarjetas.
- Formatea fechas en español.
- Usa un modal completamente accesible.
- Separa lógica de UI en hooks personalizados.
- Tiene componentes UI reutilizables (Button, Input, Textarea, FormField, Modal).

## Próximas mejoras

- Guardar notas en `localStorage`.
- Editar notas existentes.
- Eliminar notas.
- Filtrar o buscar notas.
- Agregar modo oscuro.

## Autor

Proyecto desarrollado como práctica de React y TypeScript.
