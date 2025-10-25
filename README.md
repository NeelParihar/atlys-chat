## atlys-chat

A minimal social feed demo built with React 19, Vite, and TypeScript. It showcases a simple feed, a post editor, auth gating with a demo auth provider, and a small set of reusable UI primitives styled with Tailwind CSS.

### Quick start

```bash
npm install
npm run dev
```

Vite will print the local dev URL (typically `http://localhost:5173`).

### Scripts

- **dev**: start the Vite dev server
- **build**: type-check (project refs) and build for production
- **preview**: preview the production build locally
- **lint**: run ESLint on the workspace
- **test**: run tests in watch mode
- **test:run**: run tests once (CI-friendly)
- **coverage**: run tests with coverage (text, html, lcov)

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run test
npm run test:run
npm run coverage
```

### Features

- **Feed page**: shows a list of posts with lightweight entry animations
- **Post editor**: toolbar UI and publish action callback
- **Auth modal**: sign in / sign up flows; backdrop click-to-close; inline error message
- **Auth gating**: actions (publish/like/comment/share) prompt sign in when unauthenticated
- **Icons**: `lucide-react` SVG icons throughout the UI (aligned with the preference for SVG over emoji)

### Demo authentication

This app includes a simple in-memory/localStorage auth via `AuthContext`.

- Sign in succeeds for these demo users:
  - `demo@example.com` / `password123`
  - `test@user.com` / `testpass`
- Sign up accepts any email and stores it in localStorage for the session.

Files: `src/state/AuthContext.tsx`, used by `src/main.tsx` to wrap the app.

### Tech stack

- React 19, React Router 7
- Vite 7 + `@vitejs/plugin-react`
- TypeScript 5.9
- Tailwind CSS v4 + PostCSS (autoprefixer)
- Vitest + Testing Library (`happy-dom` environment)
- `lucide-react` for icons

### Configuration highlights

- React Compiler enabled via Babel in `vite.config.ts`:

```js
react({
  babel: { plugins: [["babel-plugin-react-compiler"]] },
});
```

- Tailwind is configured in `tailwind.config.ts` with custom `background` color, `soft` box-shadow, and `fade-in-up` animation.
- PostCSS (`postcss.config.ts`) includes Tailwind and Autoprefixer.
- ESLint (`eslint.config.js`) extends `@eslint/js`, `typescript-eslint`, `react-hooks`, and `react-refresh` presets.

### Project structure (selected)

```text
src/
  pages/FeedPage.tsx         # Main feed with editor and post list
  state/AuthContext.tsx      # Demo auth (localStorage backed)
  ui/
    Navbar.tsx               # Top nav with auth state actions
    AuthModal.tsx            # Sign in / sign up modal
    PostEditor.tsx           # Editor with toolbar and send
    PostCard.tsx             # Post item with actions
    base/                    # Reusable UI primitives (Button, Card, IconButton, ToolbarButton)
    lib/cn.ts                # Class name utility
  test/setup.ts              # Testing Library + jest-dom setup
```

### Testing

Configured in `vitest.config.ts`:

- Environment: `happy-dom`
- Setup file: `src/test/setup.ts`
- Coverage: v8 with text, html, and lcov reporters

Run tests:

```bash
npm run test
npm run coverage
```

### Linting

```bash
npm run lint
```

### Notes

- The feed seeds example posts; some include a mood indicator using emoji. You can substitute a `lucide-react` icon in the UI if you prefer a fully SVG-based design.
- Production auth, persistence, and server APIs are intentionally out of scope for this demo.
