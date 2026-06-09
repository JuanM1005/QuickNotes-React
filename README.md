# QuickNotes

QuickNotes es una aplicación de notas construida con React, TypeScript, Vite y Tailwind CSS. El objetivo del proyecto es practicar conceptos fundamentales de React mientras se construye una interfaz limpia, modular y escalable.

## Preview

![QuickNotes en escritorio](./docs/desktop.png)

## Descripción

La aplicación permite crear notas con título, contenido, color, categoría e ícono. Las notas se muestran en tarjetas con ícono contextual, badge de categoría, acciones de favorito, archivado y eliminación con confirmación. Incluye una sidebar colapsable en escritorio y una barra de navegación dock en móvil. Es instalable como PWA y persiste los datos en `localStorage`.

Este proyecto forma parte de una práctica progresiva para reforzar conceptos como:

- Componentes reutilizables y modularización por carpeta
- Props tipadas con TypeScript
- Context API con `SidebarContext` y `NotesContext`
- Hooks personalizados para separar lógica de UI
- Formularios controlados con validación
- Filtrado reactivo con `useMemo`
- Modales accesibles (Escape, focus trap, scroll lock)
- Sidebar colapsable con transición CSS animada
- Estilos con Tailwind CSS v4 y objetos de estilos por componente

## Tecnologías utilizadas

- React 19
- TypeScript ~6.0
- Vite 8
- Tailwind CSS v4
- React Icons v5
- react-hot-toast
- clsx
- vite-plugin-pwa
- Bun

## Instalación

```bash
bun install
```

## Ejecutar el proyecto

```bash
bun run dev
```

Después abre la URL que muestra la terminal, normalmente `http://localhost:5173`.

## Scripts disponibles

| Script                 | Descripción                                      |
| ---------------------- | ------------------------------------------------ |
| `bun run dev`          | Inicia el servidor de desarrollo.                |
| `bun run build`        | Genera la versión de producción.                 |
| `bun run preview`      | Previsualiza la versión de producción.           |
| `bun run format`       | Formatea los archivos del proyecto con Prettier. |
| `bun run format:check` | Revisa el formato sin modificar archivos.        |

## Estructura del proyecto

```txt
src/
├── App/
│   ├── App.tsx
│   └── App.styles.ts
├── assets/
│   └── images/
├── components/
│   ├── feedback/
│   │   └── ComingSoonState/
│   ├── layout/
│   │   ├── MobileNav/
│   │   ├── PageHeader/
│   │   ├── PageLayout/
│   │   └── Sidebar/
│   │       ├── components/
│   │       │   ├── SidebarBrand/
│   │       │   ├── SidebarContent/
│   │       │   ├── SidebarFooter/
│   │       │   ├── SidebarItem/
│   │       │   ├── SidebarNav/
│   │       │   ├── SidebarQuickAction/
│   │       │   └── SidebarToggle/
│   │       └── context/
│   ├── notes/
│   │   ├── NoteCard/
│   │   ├── NoteDeleteDialog/
│   │   ├── NoteForm/
│   │   │   └── hooks/
│   │   ├── NoteList/
│   │   └── NotesEmptyState/
│   └── ui/
│       ├── Button/
│       ├── ConfirmDialog/
│       ├── FormField/
│       ├── Input/
│       ├── Modal/
│       │   └── hooks/
│       └── Textarea/
├── constants/
├── context/
│   └── notes/
├── data/
│   ├── noteIcons.data.ts
│   └── notes.data.ts
├── hooks/
│   ├── useNoteModal.ts
│   └── useNotesFilter.ts
├── pages/
│   ├── ArchivedPage/
│   ├── FavoritesPage/
│   ├── NotesPage/
│   │   ├── components/
│   │   │   ├── NoteRecents/
│   │   │   └── NotesToolbar/
│   │   └── hooks/
│   │       └── useNotesSearch.ts
│   └── TrashPage/
├── storage/
│   ├── notes.storage.ts
│   └── sidebar.storage.ts
├── types/
│   └── note.types.ts
├── utils/
│   ├── createNote.utils.ts
│   └── formatDate.utils.ts
└── main.tsx
```

## Modelo de datos

```ts
export type NoteColor =
  | 'blue'
  | 'green'
  | 'yellow'
  | 'pink'
  | 'purple'
  | 'red'
  | 'orange';

export type NoteCategory =
  | 'work'
  | 'personal'
  | 'ideas'
  | 'study'
  | 'tasks'
  | 'reminders';

export type NoteIcon =
  | 'book'
  | 'lightbulb'
  | 'briefcase'
  | 'code'
  | 'heart'
  | 'star'
  | 'flag'
  | 'music'
  | 'home'
  | 'shopping';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  color?: NoteColor;
  category?: NoteCategory;
  icon?: NoteIcon;
  isFavorite?: boolean;
  isArchived?: boolean;
  isDeleted?: boolean;
}
```

### Campos

| Campo        | Tipo           | Descripción                                                           |
| ------------ | -------------- | --------------------------------------------------------------------- |
| `id`         | `string`       | Identificador único generado con `crypto.randomUUID()`.               |
| `title`      | `string`       | Título breve de la nota.                                              |
| `content`    | `string`       | Contenido principal de la nota (máx. 500 caracteres).                 |
| `createdAt`  | `string`       | Fecha de creación en formato ISO.                                     |
| `updatedAt`  | `string`       | Fecha de última edición en formato ISO.                               |
| `color`      | `NoteColor`    | Color opcional para personalizar la tarjeta (7 opciones).             |
| `category`   | `NoteCategory` | Categoría opcional (6 opciones).                                      |
| `icon`       | `NoteIcon`     | Ícono opcional para el encabezado visual de la tarjeta (10 opciones). |
| `isFavorite` | `boolean`      | Indica si la nota está marcada como favorita.                         |
| `isArchived` | `boolean`      | Indica si la nota está archivada.                                     |
| `isDeleted`  | `boolean`      | Soft delete: la nota va a la papelera en lugar de eliminarse.         |

## Páginas

| Página           | Descripción                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| `NotesPage`      | Página principal con búsqueda en tiempo real y filtros por categoría.             |
| `FavoritesPage`  | Notas marcadas como favoritas.                                                    |
| `ArchivedPage`   | ⚠️ En desarrollo — muestra las notas archivadas, funcionalidad aún incompleta.    |
| `TrashPage`      | Papelera con opción de restaurar o eliminar permanentemente.                      |

## Componentes principales

### `Sidebar`

Sidebar colapsable con ancho animado (`w-60` expandido, `w-20` colapsado). El estado colapsado se persiste en `localStorage` y se gestiona con `SidebarContext`. Contiene:

- `SidebarBrand` — logo y nombre de la app
- `SidebarNav` — ítems de navegación con estado activo
- `SidebarToggle` — botón para colapsar/expandir
- `SidebarFooter` — quick action para nueva nota

### `MobileNav`

Barra de navegación tipo dock visible solo en móvil. Contiene los ítems de navegación a izquierda y derecha con un botón central flotante para crear una nueva nota.

### `PageHeader`

Encabezado de página con eyebrow, título, descripción e imagen opcional.

### `NoteCard`

Tarjeta de nota con caja de ícono coloreada, título, contenido truncado, fecha y badge de categoría. Soporta tres variantes de acciones según la vista: `default`, `favorites` y `trash`.

### `NoteDeleteDialog`

Diálogo de confirmación con dos modos: mover a papelera o eliminación permanente desde la papelera.

### `NoteForm`

Formulario controlado para crear notas con selector de color, ícono y categoría.

### `Modal`

Modal accesible con cierre por Escape (`useEscapeKey`), bloqueo de scroll (`useLockScroll`) y trampa de foco (`useFocusTrap`). Se renderiza con `createPortal`.

### `Button`

Componente reutilizable con variantes `primary`, `secondary`, `selected`, `unstyled` y tamaños `sm`, `md`.

## Hooks personalizados

| Hook               | Descripción                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| `useNotes`         | Accede al contexto global de notas.                                          |
| `useNoteModal`     | Estado del modal de nueva nota: `isOpen`, `open`, `close`, `handleSubmit`.   |
| `useNotesFilter`   | Filtra notas por estado (`favorites`, `archived`, `deleted`).                |
| `useNotesSearch`   | Búsqueda por texto y filtro por categoría en `NotesPage`. Expone `isSearching`. |
| `useNoteForm`      | Estado del formulario, validación y reset.                                   |
| `useSidebar`       | Accede a `isCollapsed`, `toggleSidebar`, `activePage` y `setActivePage`.     |
| `useEscapeKey`     | Dispara un callback al presionar Escape.                                      |
| `useFocusTrap`     | Aplica `inert` al `#root` mientras el modal está abierto.                    |
| `useLockScroll`    | Bloquea el scroll del body mientras el modal está abierto.                   |

## Almacenamiento

| Archivo              | Clave localStorage               | Descripción                                      |
| -------------------- | -------------------------------- | ------------------------------------------------ |
| `notes.storage.ts`   | `quicknotes-notes`               | Persiste y recupera el array de notas.           |
| `sidebar.storage.ts` | `quicknotes-sidebar-collapsed`   | Persiste el estado colapsado del sidebar.        |

## Utilidades

### `createNote`

Factory que construye un `Note` completo a partir de un `NoteInput`, generando `id` con `crypto.randomUUID()` y timestamps con `new Date().toISOString()`.

### `formatDate`

Convierte una fecha ISO a un formato legible en español (es-MX).

```ts
formatDate('2026-06-04T10:30:00.000Z');
// → "04 jun 2026, 10:30"
```

## Decisiones técnicas

### Context API para notas y sidebar

Se usa `NotesContext` para compartir el estado de notas sin prop drilling, y `SidebarContext` para que todos los subcomponentes de la sidebar accedan al estado colapsado sin recibir props manualmente.

### Soft delete con papelera

En lugar de eliminar notas directamente, se marcan con `isDeleted: true` y se mueven a la papelera. La eliminación permanente requiere una segunda confirmación.

### `isSearching` en lugar de `notes.length`

Para decidir qué empty state mostrar se usa un flag `isSearching` (hay texto en el buscador o filtro activo distinto de "all") en lugar de comparar el total de notas. Así el estado "No hay notas todavía" no aparece incorrectamente cuando existen notas eliminadas o archivadas.

### Estilos como objetos separados

Cada componente tiene su archivo `.styles.ts` con un objeto de clases de Tailwind. Esto mantiene el JSX limpio y centraliza los ajustes visuales por componente.

### Fechas como `string`

Las fechas se guardan en formato ISO porque `localStorage` serializa todo como texto.

## Estado actual

- Creación de notas desde un modal accesible.
- Favoritos, archivado y papelera con soft delete.
- Restauración y eliminación permanente desde la papelera.
- Búsqueda en tiempo real por título y contenido (NotesPage).
- Filtros por categoría (NotesPage).
- Notas recientes en la página principal.
- Empty states diferenciados: sin notas, sin resultados de búsqueda.
- Sidebar colapsable con persistencia (escritorio).
- Barra de navegación dock en móvil.
- Persistencia en `localStorage`.
- Notificaciones con `react-hot-toast`.
- Instalable como PWA.

## Próximas mejoras

- Búsqueda y filtros en FavoritesPage, ArchivedPage y TrashPage.
- Edición de notas existentes.
- Modo oscuro.

## Autor

**Juan Antonio Aguirre Mares**  
Estudiante de Ingeniería en Informática.

Este proyecto fue desarrollado como parte de mi proceso de aprendizaje en Desarrollo Web, con el objetivo de practicar la creación de componentes, manejo de estado, filtrado de datos y estructura modular de una aplicación web.

## Herramientas de apoyo

Durante el desarrollo utilicé herramientas de apoyo como Claude Code y ChatGPT para orientación, depuración y mejora de código.

La implementación fue revisada, adaptada y comprendida manualmente, aplicando conocimientos previamente adquiridos como estudiante de Ingeniería en Informática.
