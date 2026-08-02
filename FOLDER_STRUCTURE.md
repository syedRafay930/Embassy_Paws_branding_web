# Embassy Paws — Folder Structure

Next.js App Router architecture: thin route files, domain features, shared reusable UI, Redux Toolkit for client state, and clear separation of server vs client code.

**Principles**
- Keep it simple — add folders when you need them, not before
- Thin `page.tsx` files — routes compose features, they don’t own business UI
- Reuse first — shared UI lives in `components/`; domain UI lives in `features/`
- Server by default — use Client Components only when you need interactivity or Redux
- One place per concern — no duplicate helpers or “misc” dumping grounds

---

## Top-level layout

```text
public/                # Static assets (images, favicons, fonts served as-is)
src/
  app/                 # Next.js routes, layouts, route handlers (thin)
  components/
    ui/                # Reusable primitives (Button, Input, SectionHeading…)
    layout/            # App chrome (Header, Footer, Nav, Section shells)
  features/            # Domain modules (home, services, contact…)
  store/               # Redux store, slices, typed hooks, provider
  hooks/               # Shared hooks (no domain imports)
  constants/           # Routes, nav, brand tokens, copy keys
  services/            # API / server data access (client + server)
  utils/               # Pure helpers (format, cn, validators)
  lib/                 # Low-level setup (env, fonts helpers)
  types/               # Shared TypeScript contracts
```

Root config stays outside `src/`: `package.json`, `next.config.ts`, `tsconfig.json`, `eslint.config.*`, `postcss.config.*`.

---

## Target tree

```text
src/
  app/
    layout.tsx                 # Root layout + Redux provider
    page.tsx                   # Home route (thin)
    globals.css
    (marketing)/               # Optional route group for marketing pages
      about/page.tsx
      services/page.tsx
      contact/page.tsx
    api/                       # Route handlers (Next.js server endpoints)
      contact/route.ts
    not-found.tsx
    loading.tsx
    error.tsx

  components/
    ui/
      Button.tsx
      Input.tsx
      Textarea.tsx
      SectionHeading.tsx
      Container.tsx
      index.ts                 # Barrel exports for shared UI
    layout/
      Header.tsx
      Footer.tsx
      Navbar.tsx
      PageShell.tsx

  features/
    home/
      components/
        Hero.tsx
        HomeView.tsx
      index.ts
    services/
      components/
        ServicesView.tsx
        ServiceCard.tsx        # Only if used inside this feature
      data.ts                  # Static feature data if needed
      index.ts
    contact/
      components/
        ContactView.tsx
        ContactForm.tsx
      hooks/
        useContactForm.ts
      index.ts

  store/
    store.ts                   # configureStore
    hooks.ts                   # useAppDispatch / useAppSelector
    provider.tsx               # "use client" Redux Provider
    slices/
      uiSlice.ts               # modals, mobile nav, toasts, UI flags
      # add slices as domains need cross-route client state

  hooks/
    useMediaQuery.ts
    useScrollLock.ts

  constants/
    routes.ts
    nav.ts
    brand.ts
    index.ts

  services/
    client/                    # Browser-safe fetch helpers
      http.ts
    server/                    # Server-only modules (import in RSC / route handlers)
      contact.ts

  utils/
    cn.ts                      # className merge helper
    format.ts

  lib/
    env.ts

  types/
    common.ts
    contact.ts
```

Route-group and feature names above are examples — add pages/features as the design requires.

---

## `app/` — routes only

Next.js owns this folder. File-system routing lives here.

| File / folder | Role |
|---------------|------|
| `layout.tsx` | Root HTML shell, fonts, global providers |
| `page.tsx` | Route entry — compose a feature view |
| `loading.tsx` / `error.tsx` / `not-found.tsx` | Route UX boundaries |
| `api/**/route.ts` | HTTP handlers (forms, webhooks, proxies) |
| `(marketing)/` | Optional route group — shared layout, no URL segment |

**Rule:** `page.tsx` stays thin.

```tsx
// src/app/page.tsx
import { HomeView } from "@/features/home";

export default function HomePage() {
  return <HomeView />;
}
```

Do **not** put large sections, forms, or Redux logic directly in `app/`.

---

## `components/` — shared reusable UI

```text
components/
  ui/        # Design-system primitives used across features
  layout/    # Header, Footer, Nav, page shells
```

| Put it in… | When… |
|------------|--------|
| `components/ui/` | Used (or clearly will be used) in 2+ features |
| `components/layout/` | Site chrome / navigation shell |
| `features/X/components/` | Domain-specific UI used only in that feature |

**Reuse rule:** if removing a border/shadow/background doesn’t hurt understanding, don’t invent a “card” wrapper. Keep primitives small and composable.

Export shared UI from a barrel when stable:

```ts
// src/components/ui/index.ts
export { Button } from "./Button";
export { Container } from "./Container";
```

---

## `features/` — domain modules

Each feature owns its UI + local hooks + local data for that area of the product.

Typical feature shape:

| Path | Role |
|------|------|
| `components/` | Feature views and sections (`*View.tsx`, `Hero.tsx`) |
| `hooks/` | Feature-only hooks |
| `data.ts` | Static content for that feature |
| `index.ts` | Public API for pages to import |

```ts
// src/features/home/index.ts
export { HomeView } from "./components/HomeView";
```

Pages import from the feature barrel — never deep-import private internals from other features.

---

## `store/` — Redux Toolkit

Client state that must survive unmount or be shared across routes.

| File | Role |
|------|------|
| `store.ts` | `configureStore`, root reducer |
| `hooks.ts` | Typed `useAppDispatch` / `useAppSelector` |
| `provider.tsx` | `"use client"` wrapper used in root layout |
| `slices/*.ts` | Domain slices (`ui`, `cart`, `auth` when needed) |

**What belongs in Redux**
- Cross-route UI state (mobile nav open, selected filters that persist)
- Auth/session client flags (if any)
- Anything multiple distant components must share

**What does NOT belong in Redux**
- Form drafts for one page → local `useState`
- Server data that can be fetched in a Server Component → `services/server`
- One-off modal open state used by a single component → local state

Wire the provider once in the root layout:

```tsx
// src/app/layout.tsx (concept)
import { StoreProvider } from "@/store/provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
```

---

## `services/` — API / server

| Folder | Role |
|--------|------|
| `services/client/` | Fetch helpers safe in Client Components |
| `services/server/` | Server-only data access (RSC, route handlers, server actions) |
| `app/api/**` | Public HTTP endpoints when the browser or a third party must call them |

Prefer Server Components / server modules for first paint. Use client fetches + Redux only when interactivity requires it.

---

## Other shared folders

| Folder | Role |
|--------|------|
| `hooks/` | Generic hooks with **no** feature imports |
| `constants/` | `ROUTES`, nav items, brand constants |
| `utils/` | Pure functions (`cn`, formatters, validators) |
| `lib/` | Env and low-level setup |
| `types/` | Shared TypeScript contracts |
| `public/` | Images and static files referenced by URL |

---

## Where to put new code

| Put it in… | When… |
|------------|--------|
| `app/**/page.tsx` | It is a new route |
| `app/api/**` | You need an HTTP endpoint |
| `features/X/` | Domain UI or domain-only logic |
| `components/ui/` | Reusable primitive for 2+ features |
| `components/layout/` | Header / footer / nav chrome |
| `store/slices/` | Cross-route client state |
| `hooks/` | Generic hook, no domain imports |
| `constants/` | Routes, nav, shared maps |
| `services/server/` | Server-side data or mutations |
| `services/client/` | Browser API calls |
| `utils/` | Pure helper with no React |
| Local `useState` | Forms, toggles, one-page ephemeral UI |

---

## State & data flow

```text
app/page.tsx
  → features/*/components (views)
       → components/ui + components/layout
       → store (Redux) for shared client state
       → services/client for browser API calls

Server Components / route handlers
  → services/server → backend or CMS
```

| Layer | Owns |
|-------|------|
| **Server Components** | Initial page data, SEO content |
| **Redux slices** | Shared client state |
| **Local `useState`** | Forms, accordions, one-off UI |
| **Route handlers** | Contact form submit, webhooks, proxies |

---

## Import paths

Use the `@/` alias for anything under `src/`:

```ts
import { Button } from "@/components/ui";
import { HomeView } from "@/features/home";
import { ROUTES } from "@/constants";
import { useAppSelector } from "@/store/hooks";
```

Keep short relatives for same-folder siblings (`./ContactForm`, `./uiSlice`).

Configured in `tsconfig.json`:

```json
"paths": {
  "@/*": ["./src/*"]
}
```

---

## Naming conventions

| Kind | Convention | Example |
|------|------------|---------|
| Route page | `page.tsx` inside route folder | `app/contact/page.tsx` |
| Feature screen | `*View.tsx` | `ContactView.tsx` |
| Section | Descriptive PascalCase | `Hero.tsx`, `ServicesGrid.tsx` |
| Hook | `use*` | `useContactForm.ts` |
| Slice | `*Slice.ts` | `uiSlice.ts` |
| Constant | `SCREAMING_SNAKE` exports | `ROUTES.HOME` |
| Barrel | `index.ts` | re-export public API only |

---

## Do / Don’t

**Do**
- Compose pages from features
- Extract to `components/ui` on second reuse
- Keep Server Components as the default
- Colocate feature-only code inside that feature

**Don’t**
- Put business UI in `app/page.tsx`
- Import across features’ private files
- Dump everything in `components/`
- Put server secrets in `services/client` or Redux
- Create empty feature folders “for later” without a real screen

---

## Adding a new page (checklist)

1. Add route: `src/app/<route>/page.tsx`
2. Add feature: `src/features/<domain>/components/<Domain>View.tsx`
3. Export from `src/features/<domain>/index.ts`
4. Reuse `components/ui` / `components/layout` where possible
5. Add `ROUTES` + nav entry in `constants/` if linked in the shell
6. Use Redux only if the page needs shared client state
