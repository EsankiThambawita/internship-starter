# 🧩 Prismic + Next.js Website

This project is a **dynamic website built with Next.js, Prismic CMS, and Slice Machine**, designed to make content management and updates simple for non-technical users. It allows editors to easily update text, images, and add new items (such as blog posts or services) directly from Prismic — without needing code changes.

---

## 🚀 Tech Stack

- **Next.js** – React framework for server-side rendering and static site generation  
- **Prismic CMS** – Headless CMS for managing website content  
- **Slice Machine** – Prismic’s visual builder used to create reusable content slices  
- **TypeScript** – For type safety and maintainability  
- **Vercel** – For deployment and hosting  

---

## ⚙️ Project Structure

### Slices

- `BlogsSection` – Display multiple blog posts dynamically  
- `Contact` – Contact form with heading, paragraph, and input fields  
- `Hero` – Two variations: Vertical & Horizontal  
- `Services` – Grid of services with title, description, icon, and link  
- `TextWithImage` – Two variations: Image Left & Image Right  

### Custom Types

- `Blog Post` – For blog entries  
- `Settings` – Contains header, footer, and global site data  

### Page Types

- `Homepage` – Main landing page  
- `ServicesPage` – Services-specific page  
- `Page` – Dynamic page for About, Contact, or any other page (uses UID)  

### Documents in Prismic

- `Homepage`, `Settings`, `Services`, `Contact`, `About`  
- Three initial `Blog Posts` linked to `BlogsSection` slice  

> ⚠️ Note: Adding completely new pages requires development changes, not just content updates.

---

## 🧠 Setup Instructions

1. Clone repo:

git clone https://github.com/EsankiThambawita/internship-starter.git
cd internship-starter

2. Install dependencies:

npm install


3. Add Prismic environment variables in .env.local if you want to fetch content locally:

PRISMIC_WEBHOOK_SECRET=internship-starter-secret


4. Run dev server:

npm run dev


Open http://localhost:3000

### Updating Content in Prismic

1. Log in to Prismic > Documents

2. Edit existing content (text, images, buttons) and Publish

### Add new content:

1. Click “New Document”, choose type (e.g., Blog Post, Service)

2. Fill fields and Publish

3. Changes appear live automatically via Vercel webhook.

### Deployment

Deployed on Vercel: https://internship-starter.vercel.app

Prismic webhook triggers automatic revalidation on content updates.
