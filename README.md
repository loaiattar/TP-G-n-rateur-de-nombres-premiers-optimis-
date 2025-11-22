# Prime Numbers Made Beautiful

A modern, high-performance React application designed to explore the fascinating world of prime numbers. Built with a focus on aesthetics, performance, and user experience.

## 🚀 Tech Stack

This project leverages the latest web technologies to deliver a premium experience:

-   **Core:** [React 19](https://react.dev/) & [Vite](https://vitejs.dev/) - For blazing fast development and rendering.
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS for rapid, responsive design.
-   **Animations:** [Framer Motion](https://www.framer.com/motion/) - Smooth, physics-based animations.
-   **Routing:** [TanStack Router](https://tanstack.com/router) - Type-safe, file-based routing.
-   **State Management:** [Zustand](https://github.com/pmndrs/zustand) - Minimalist state management with persistence.
-   **Validation:** [Zod](https://zod.dev/) - TypeScript-first schema validation.
-   **Notifications:** [Sonner](https://sonner.emilkowal.ski/) - An opinionated toast component for React.

## 📂 Project Structure

```
src/
├── api/                # API simulation and logic
├── components/         # Reusable UI components
│   ├── ui/             # Generic UI elements (Button, Input, etc.)
│   └── ...
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── routes/             # TanStack Router route definitions
├── schemas/            # Zod validation schemas
├── stores/             # Zustand state stores
└── utils/              # Helper functions
```

## 🛠️ Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd TP-G-n-rateur-de-nombres-premiers-optimis-
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```

4.  **Open your browser:**
    Navigate to `http://localhost:5173` to view the app.

## 🗺️ User Journey

Here is how to get the most out of the application:

### 1. The Landing Page
-   Upon entering, you are greeted by a **cinematic entrance animation**.
-   Use the navigation tabs or the call-to-action buttons to explore the tools.

### 2. Check a Number (`/primes`)
-   Navigate to "Prime Numbers Check".
-   Enter any number to **instantly verify** if it is prime.
-   Receive immediate visual feedback: Green for Prime, Red for Not Prime.

### 3. Generate Primes (`/primes-gen`)
-   Go to "Prime Numbers Generator".
-   Enter a starting number (optional).
-   Click **Start** to generate a list of the next 100 prime numbers.
-   *Note: The generator uses an optimized batch algorithm for maximum speed.*

### 4. Contact Us (`/contact`)
-   Have feedback? Go to the "Contact" page.
-   Fill out the form (validated in real-time using Zod).
-   Submit to see a beautiful **toast notification**.

### 5. Personalization
-   Toggle **Dark Mode** using the sun/moon icon in the header. Your preference is saved automatically!

### 6. Error Handling
-   A custom **Not Found** component manages non-existent pages and links, ensuring a smooth user experience even when things go wrong.

---

*Built with ❤️ by Loai ELATTAR*
