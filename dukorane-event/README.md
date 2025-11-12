# Dukorane Events

> **Dukorane Events** is a digital platform that simplifies and professionalizes event planning in **Rwanda**.  
> It connects **event organizers** with **trusted service providers** in one online marketplace — allowing users to **search, compare, book, and communicate** easily.  
> Built with **Next.js**, **Tailwind CSS**, and **Node.js**, the system promotes **transparency, efficiency, and trust** in the Rwandan event industry.

---

## Overview

Dukorane Events revolutionizes wedding and event management in Rwanda by centralizing booking, communication, and progress tracking.

It reduces miscommunication, improves coordination, and enhances the experience for both **couples** and **service providers** through a collaborative digital platform.

---

## 👥 System Users

| User Type | Description | Key Features |
|------------|--------------|---------------|
| **Event Owner** | Couples or organizations planning events | Create/manage events, book providers, budget tracking, invitations |
| **Service Provider** | Caterers, decorators, photographers, MCs, etc. | Create profile, manage bookings, upload portfolio, receive ratings |
| **Administrator** | System manager | Manage users, handle complaints, monitor statistics, track transactions |
| **Guest** | Event attendees | View event info, confirm attendance, QR check-in, give feedback |

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/), [shadcn/ui](https://ui.shadcn.com/) |
| **Backend** | [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/) |
| **Database** | [MongoDB](https://www.mongodb.com/) |
| **Design** | [Figma](https://www.figma.com/), [Canva](https://www.canva.com/) |
| **Hosting** | [Vercel](https://vercel.com/) (Frontend), [Railway](https://railway.app/) (Backend) |
| **Payments** | [MTN MoMo](https://mtn.co.rw/momo/), [Flutterwave](https://flutterwave.com/) |
| **Version Control** | [Git](https://git-scm.com/), [GitHub](https://github.com/) |

---

## ⚙️ Project Structure

```bash
dukorane-events/
├── app/                # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   ├── events/
│   ├── dashboard/
│   ├── auth/
│   └── api/
├── components/         # Reusable UI components
│   ├── ui/
│   ├── layout/
│   ├── forms/
│   └── sections/
├── context/            # Context API for global states
├── hooks/              # Custom hooks
├── lib/                # API, utilities, constants
├── public/             # Static assets (logos, images)
├── styles/             # Tailwind/global CSS
├── types/              # TypeScript interfaces
├── .env.local          # Environment variables
└── README.md
