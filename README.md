Te dejo un `README.md` listo para copiar y pegar en tu proyecto **QuickNotes**.

# QuickNotes

QuickNotes es una aplicación sencilla de notas construida con React, TypeScript, Vite y Tailwind CSS. El objetivo del proyecto es practicar conceptos fundamentales de React mientras se construye una interfaz limpia, modular y escalable.

## Descripción

La aplicación muestra una lista de notas mockeadas en tarjetas visuales. Cada nota contiene un título, contenido, fecha de creación y un color opcional para personalizar su apariencia.

Este proyecto forma parte de una práctica progresiva para reforzar conceptos como:

* Componentes reutilizables
* Props tipadas con TypeScript
* Interfaces y tipos personalizados
* Renderizado de listas con `.map()`
* Uso correcto de `key` en React
* Organización modular de archivos
* Estilos con Tailwind CSS
* Uso de utilidades como `formatDate`
* Preparación futura para manejo de estado y `localStorage`

## Tecnologías utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* React Icons
* clsx
* Bun

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
├─ components/
│  └─ ui/
│     ├─ Button/
│     ├─ NoteCard/
│     └─ NoteList/
├─ data/
│  └─ notes.data.ts
├─ types/
│  └─ note.types.ts
├─ utils/
│  └─ formatDate.ts
├─ App.tsx
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

| Campo       | Tipo        | Descripción                                  |
| ----------- | ----------- | -------------------------------------------- |
| `id`        | `string`    | Identificador único de la nota.              |
| `title`     | `string`    | Título breve de la nota.                     |
| `content`   | `string`    | Contenido principal de la nota.              |
| `createdAt` | `string`    | Fecha de creación en formato ISO.            |
| `updatedAt` | `string`    | Fecha de última edición en formato ISO.      |
| `color`     | `NoteColor` | Color opcional para personalizar la tarjeta. |

## Componentes principales

### `NoteCard`

Renderiza una tarjeta individual de nota. Muestra:

* Título
* Contenido
* Fecha de creación formateada
* Color visual según el valor de `note.color`

### `NoteList`

Renderiza una lista responsive de notas usando CSS Grid.

Distribución:

* 1 columna en mobile
* 2 columnas en tablet
* 3 columnas en desktop

### `Button`

Componente reutilizable para acciones de la interfaz, como agregar una nueva nota.

## Utilidades

### `formatDate`

Convierte una fecha en formato ISO a un formato más legible para el usuario.

Ejemplo:

```ts
formatDate('2026-06-04T10:30:00.000');
```

Salida esperada:

```txt
4 jun 2026, 10:30
```

## Decisiones técnicas

### Uso de `interface` para `Note`

Se usa `interface` porque `Note` representa la estructura de un objeto. Esto hace que el modelo sea claro y fácil de reutilizar en componentes, datos mockeados y futuros hooks.

### Uso de `type` para `NoteColor`

Se usa `type` porque `NoteColor` representa un conjunto limitado de valores permitidos.

```ts
type NoteColor = 'blue' | 'green' | 'yellow' | 'pink' | 'purple';
```

Esto evita usar cualquier string inválido como color.

### IDs como `string`

Los IDs son `string` porque más adelante se podrán generar con:

```ts
crypto.randomUUID()
```

Esto evita problemas de IDs repetidos al agregar o eliminar notas.

### Fechas como `string`

Las fechas se guardan como `string` en formato ISO porque más adelante el proyecto usará `localStorage`, y `localStorage` guarda datos como texto.

## Estado actual

Actualmente la aplicación:

* Renderiza notas mockeadas.
* Muestra tarjetas estilizadas.
* Usa componentes separados y reutilizables.
* Formatea fechas.
* Aplica colores personalizados a las notas.
* Tiene un layout responsive y centrado.

## Próximas mejoras

* Agregar formulario para crear notas.
* Manejar estado con `useState`.
* Guardar notas en `localStorage`.
* Editar notas existentes.
* Eliminar notas.
* Filtrar o buscar notas.
* Agregar validaciones de formulario.
* Mejorar accesibilidad.
* Agregar modo oscuro.

## Autor

Proyecto desarrollado como práctica de React y TypeScript.
