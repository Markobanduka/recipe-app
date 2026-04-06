# 🍽️ Recipe App

A modern recipe web application built with React (Vite), with a strong focus on **Quality Assurance, automated testing, and CI/CD practices**.

🔗 **Live Demo:** https://recipe-app-eight-bay.vercel.app/

---

## 🚀 Tech Stack

- React (Vite)
- JavaScript
- Tailwind CSS
- Edamam API
- Cypress (E2E Testing)
- GitHub Actions (CI/CD)
- Vercel (Deployment)

---

## 🧪 QA & Testing (Main Focus)

This project is designed to demonstrate **real-world QA practices**.

### ✅ End-to-End Testing with Cypress

- Implemented **Cypress E2E tests** for critical user flows
- Focused on:
  - Page rendering & core UI elements
  - Recipe cards display
  - Skeleton loading states
  - Image loading validation
  - Favorites functionality (localStorage)
- Used **custom `data-test` selectors** for stable and maintainable tests
- Assertions include:
  - Visibility checks
  - DOM structure validation
  - Dynamic data validation (e.g. servings count)
  - API-driven content verification

---

## ⚙️ CI/CD (GitHub Actions)

- Set up **automated CI pipeline**
- Runs on:
  - Pull Requests
  - Push to main branch

### Pipeline steps:

1. Install dependencies
2. Run Cypress tests (headless)
3. Validate build before merge

➡️ Ensures every change is tested and prevents broken code from being merged

---

## 🌐 Deployment (Vercel)

- App is deployed on **Vercel**
- Features:
  - Automatic deployments on push
  - Preview deployments for PRs
  - Integrated with CI workflow

➡️ Guarantees safe and tested production releases

---

## 🧠 QA Mindset Demonstrated

- Writing **testable code** (`data-test` attributes)
- Covering **real user scenarios**
- Handling **edge cases**:
  - Empty favorites page
  - Loading states
- Ensuring **stability through CI**
- Simulating **production-like testing environment**

---

## 📂 Installation

```bash
git clone https://github.com/Markobanduka/recipe-app.git
cd recipe-app
npm install
npm run dev
```
