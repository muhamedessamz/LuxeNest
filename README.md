# 🏰 LuxeNest - Luxury Furniture & Interior Design Portal

LuxeNest is a premium, high-end e-commerce and interior design platform built with **React 19**, **Vite**, and **Tailwind CSS 4**. It offers a curated shopping experience for luxury furniture enthusiasts and bespoke interior design services.

---

## 🌟 Key Features

### 🛒 E-Commerce Functionality
- **Curated Collections**: Browse high-quality furniture by category (Living Room, Bedroom, Office, etc.).
- **Smart Shopping Cart**: Seamlessly add items to your cart with persistent state management via Context API.
- **Wishlist System**: Save your favorite pieces for later with a dedicated wishlist view and real-time counter.
- **Pagination Persistence**: Browsing state is synchronized with the URL query parameters (`?page=n`), ensuring the user's position is saved even after a page refresh.
- **Dynamic Pricing**: Formatted currency display for a professional storefront feel.

### 🏛️ Interior Design Services
- **Bespoke Consultations**: A dedicated multi-section landing page for booking professional design sessions with responsive forms.
- **Service Showcase**: High-impact sections for Master Craftsmanship, Sustainable Sourcing, and Professional Styling.
- **Interactive Process**: A visual timeline walking users through the LuxeNest design journey from Discovery to Installation.

### 💎 Premium User Experience (UX/UI)
- **Responsive-First Design**: Meticulously optimized for every screen size, focusing on touch-friendly elements for mobile.
- **Aesthetic Excellence**: Glassmorphism effects, curated color palettes, and elegant typography (Playfair Display & Inter).
- **Smooth Interaction**: Powered by `framer-motion` for orchestral-like entrance animations and micro-interactions.
- **Custom Branding**: Fully customized favicon and browser tab metadata for a complete brand identity.

---

## 🛠️ Technology Stack

### Core
- **React 19**: Utilizing the latest features for optimized rendering and performance.
- **Vite 7**: Ultra-fast build tool and development server.
- **Tailwind CSS 4**: Leveraging the next-generation CSS engine for a modern, maintainable design system.

### Libraries
- **React Router 7**: Sophisticated routing with URL search parameter integration.
- **Lucide React**: Crisp, scalable vector icons throughout the interface.
- **Framer Motion**: Industry-standard library for fluid, high-performance animations.
- **Swiper.js**: (Optional implementation) Ready for advanced product galleries.

---

## 🎨 Design Philosophy

LuxeNest follows a **Minimalist Luxury** design philosophy:
- **Whitespace**: Generous breathing room to allow product imagery to stand out.
- **Typography**: A bold Serif font for headlines to convey heritage, paired with a clean Sans-Serif for readability.
- **Color Palette**: A harmonious blend of `#c6a471` (Luxury Gold) and `#1f1f1f` (Charcoal) over a soft `#f8f7f6` background.

---

## 📁 Project structure

```text
src/
├── components/
│   ├── layout/       # Navbar, Footer (Center-aligned menus, Responsive bars)
│   └── sections/     # Hero, BestSellers, CategoriesGrid, FeaturesAndServices
├── context/          # Global State (CartContext, WishlistContext)
├── data/             # Centralized Data (Extensive product catalog, Category definitions)
├── pages/            # View Layers (Home, Collections, ProductDetails, InteriorDesign, etc.)
├── assets/           # Static assets and custom favicons
└── index.css         # Tailwind 4 configuration and global theme variables
```

---

## 🚀 Getting Started

1. **Clone & Install**:
   ```bash
   npm install
   ```

2. **Development**:
   ```bash
   npm run dev
   ```

3. **Production Build**:
   ```bash
   npm run build
   ```

---

## 👤 Developer

Developed with ❤️ by **Mohamed Essam**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohamedessamz/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mohamedessamzakariaa@gmail.com)

---

## 📜 License

© 2026 LuxeNest Interior Group. All rights reserved.

