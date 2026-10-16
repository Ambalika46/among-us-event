# Among Us: Emergency Meeting — Event Landing Page

An original, laptop-first landing page crafted for an upcoming campus gaming event: **Among Us: Emergency Meeting**.

> **Event Details**
> - **Event Name:** Among Us: Emergency Meeting
> - **Tagline:** Play smart. Lie better. Survive longer.
> - **Date & Time:** 17 october 2026, 5:00 PM
> - **Venue:** NTB , Room- TC103
> - **Entry:** Free, open to all students
> - **What happens:** 3 rounds of Among Us, teams of 10, prizes for the best crewmate and best impostor
> - **Contact:** ambalikaroy05@gmail.com

---

## 🚀 Key Features

1. **Laptop-First Responsive Layout:** Handcrafted for 1366px & 1440px displays, seamlessly responsive down to tablet and mobile screens with zero horizontal overflow.
2. **Original Vector Artwork:** 100% custom inline SVG/CSS crewmates (bean body, visor shine, backpack, and dynamic colors) — no copyrighted game assets or logos used.
3. **Live Countdown Timer:** Displays real-time Days, Hours, Minutes, and Seconds counting down to 17 October 2026, 5:00 PM. Shows *"The meeting has started!"* when time is up.
4. **Spaceship UI & "Tasks" Schedule:** Timeline structured like the in-game task interface with a completion meter and sector location tags.
5. **Interactive Crewmate Color Selector:** Choose from 8 spacesuit colors (Red, Cyan, Yellow, Green, Purple, Peach, Pink, Orange) which updates your astronaut ID badge.
6. **Frontend Registration & Validation:** Real-time feedback for required fields and proper email format without dispatching data externally.
7. **"Emergency Meeting" Pop-up Modal:** Complete with an animated red flashing emergency siren border, soundwave flasher, and astronaut pass confirmation.
8. **Accessibility & Reduced Motion:** Meets WCAG AA contrast standards and honors `prefers-reduced-motion` settings.

---

## 🛠️ Tech Stack

- **HTML5:** Semantic architecture (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, keyframe animations, backdrop filters.
- **Vanilla JavaScript (ES6 Modules):** Lightweight, dependency-free DOM manipulation, IntersectionObserver, and countdown logic.
- **Vite:** Next-generation frontend build tooling and local development server.

---

## 💻 Quick Start & Running Locally

### 1. Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL displayed in the terminal (typically `http://localhost:5173`).

---

## 📦 Building for Production

To create an optimized production bundle:
```bash
npm run build
```
The compiled, minified output will be generated inside the `dist/` directory.

You can preview the production build locally with:
```bash
npm run preview
```

---

## 🌐 How to Deploy on Vercel

You can deploy this project to Vercel in just a few clicks or via the Vercel CLI:

### Option A: Via GitHub & Vercel Dashboard
1. Push this repository to your GitHub account:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. Your live URL will be ready in seconds!

### Option B: Via Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. From the project directory, run:
   ```bash
   vercel
   ```
3. Follow the interactive prompts to deploy.

---

## 📄 License & Disclaimer

This is a fan-made student project created for educational and campus gaming purposes. It is not affiliated with, endorsed by, or sponsored by Innersloth LLC.
