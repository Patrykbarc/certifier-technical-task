# Certifier – Technical Task Frontend

A responsive, pixel-perfect implementation of the Certifier landing page built with **Next.js 15**, **TypeScript** and **Tailwind CSS v4**.

---

## 🚀 Live demo

👉 https://certifier-technical-task.vercel.app/

---

## 🛠️ Local setup

This project includes a Docker configuration for easy setup. The only prerequisite is to have Docker installed.

### Option 1: Docker (Recommended)

This is the easiest way to get started as it handles all dependencies for you.

1.  **Build and start the container (first-time setup):**

    ```bash
    docker-compose up --build
    ```

    This command might take a few minutes on the first run as it downloads the Node image and installs dependencies.

2.  **Start and stop the container (daily use):**
    - To **start** the application again later, run:
      ```bash
      docker-compose up
      ```
    - To **stop** the application, press `Ctrl + C` in the terminal, or run from another terminal:
      ```bash
      docker-compose down
      ```

The application will be available at `http://localhost:3000`. Hot reloading is enabled.

### Option 2: Local machine (pnpm)

If you prefer to run the project locally without Docker, make sure you have Node.js (v20 or higher) and pnpm installed.

```bash
# 1. Install dependencies
pnpm install

# 2. Start dev server at http://localhost:3000
pnpm dev
```

### Additional scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm build`        | Create an optimized production build |
| `pnpm start`        | Run the production build locally     |
| `pnpm lint`         | Lint sources with ESLint & Prettier  |
| `pnpm prettier:fix` | Format code with Prettier            |

---

## 📦 Tech stack

- **Next.js 15**
- **TypeScript**
- **Tailwind CSS 4**

---

## ✨ Features

- Fully responsive layout (mobile → desktop)
- Semantic HTML & basic accessibility (ARIA labels, keyboard-friendly nav)
- Clean, modular structure (`components/ui`, `components/views`, custom hooks)
- Husky + lint-staged for pre-commit formatting & linting

---

## 📝 Notes

- **Spacing in navigation:** In the desktop navigation, I used `gap` for spacing between navigation items instead of `padding`. While using `padding` would generally be a better UX solution-making the clickable areas larger and more user-friendly I chose `gap` to achieve pixel-perfect alignment with the Figma design. Ideally I would ask the designer to adjust the Figma layout to use paddings for better accessibility and usability, but for this implementation I prioritized visual fidelity to the provided design.

- **Positioning elements in the Hero section:** The hero section features images positioned with absolute and negative values to precisely match the Figma design. This approach, while visually accurate, is rigid and can be difficult to maintain. A more robust solution would involve using a single, combined graphic or a more flexible layout system like CSS Grid with translate transforms to avoid potential layout shifts when content or screen sizes change.

- **Differences in layout for different breakpoints:** Certain elements, like the separator in the logos section, are shown or hidden at specific breakpoints (e.g., visible only on `2xl` screens). This was done to adhere to the design but can lead to layout inconsistencies. A better long-term approach would be to design a single, fluid layout that gracefully adapts across all screen sizes without hiding/showing components.

---

## 🌐 Internationalization (i18n)

I noticed that the Figma file contains separate language layers. Although the current implementation focuses on a single language to keep the scope manageable, all strings can be externalised to JSON files (e.g. `locales/en.json`, `locales/pl.json`). A future upgrade path is as follows:

1. Extract static content to translation JSONs.
2. Integrate a lightweight library such as **next-intl** or **next-i18next** for automatic language detection and routing.
3. Add a language switcher in the navigation and honour the `Accept-Language` header.
