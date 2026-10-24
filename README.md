# SCAR Real-Time Task Management App

A collaborative task management system for **Small Cat Advocacy and Research (SCAR)** designed for field researchers, biologists, educators, and volunteers. Featuring **real-time cross-device synchronization**, the application synchronizes changes instantaneously across phones, tablets, and laptops without requiring expensive servers.

## 🚀 Key Features

- **Real-Time Cross-Device Synchronization**: Instant updates across mobile, tablet, and desktop devices via WebSocket pub/sub and local BroadcastChannel.
- **QR Code Mobile Pairing**: Scan the QR code with any smartphone camera to open and sync the live task board in seconds.
- **SCAR Layout & Visual Branding**: Built faithfully to the design system, typography, and structure of `scar.lk`.
- **Kanban, List, and Conservation Pillar Views**: Drag-and-drop or status shifts across Backlog, To Do, In Progress, Review, and Done columns.
- **Full SCAR Webpage Experience**: Includes the official webpage layout with an embedded live field operations widget.
- **100% Static & Serverless**: Fully compatible with **GitHub Repositories** and **Cloudflare Pages**.

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server (port 3000)
npm run dev

# Build production bundle
npm run build
```

---

## 📦 Deploying to GitHub & Cloudflare Pages

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit of SCAR Real-Time Task Management App"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/scar-tasks.git
git push -u origin main
```

### 2. Connect to Cloudflare Pages
1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Create application** > **Pages**
3. Select **Connect to Git** and choose your `scar-tasks` repository
4. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Cloudflare Pages will build and deploy your app with a free global edge URL!
