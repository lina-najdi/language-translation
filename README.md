# Multilingual Translation Dashboard 🌐

A modern, responsive multilingual translation web application built with **React**, **Tailwind CSS**, and **react-i18next**. The application supports four languages with full internationalization (i18n), dynamic layout direction switching (LTR / RTL), and persistent language detection.

---

## ✨ Features

- **Multi-Language Support**: Seamlessly switch between **English**, **Arabic (العربية)**, **Spanish (Español)**, and **Urdu (اردو)**.
- **Dynamic RTL / LTR Switching**: Automatic bidirectional layout adjustments (`dir="rtl"` / `dir="ltr"`) for right-to-left languages (Arabic and Urdu).
- **Persistent Localization**: Automatically detects and remembers the user's preferred language using `i18next-browser-languagedetector` and `localStorage`.
- **Modular Translation Files**: Translation resources structured in clean, dedicated JSON files (`en.json`, `ar.json`, `es.json`, `ur.json`).
- **Interactive Language Modal**: Elegant popup dialog for language switching with glassmorphism and backdrop blur.
- **Modern UI**: Styled with Tailwind CSS and responsive design patterns, integrated with Lucide React icons.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) (Vite)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Internationalization**: [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **Language Detection**: `i18next-browser-languagedetector`

---

## 📁 Project Structure

```text
src/
├── assets/             # Media and static images
├── locales/            # JSON translation files
│   ├── ar.json
│   ├── en.json
│   ├── es.json
│   └── ur.json
├── App.css
├── App.jsx             # Main dashboard UI and layout logic
├── i18n.js             # Centralized i18n and detector configuration
├── index.css           # Global styles and Tailwind imports
└── main.jsx            # Application root
