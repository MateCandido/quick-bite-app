# QuickBite 🍔

A modern and responsive food delivery application concept, built from the ground up with React and TypeScript. This project simulates the core user experience of a food delivery platform, from browsing restaurants to completing a simulated checkout.

The main goal was to build a feature-rich Single Page Application (SPA) to practice and demonstrate key frontend development concepts, including global state management, dynamic routing, and component-based architecture.

## ✨ Key Features

* **Restaurant Showcase:** A dynamic gallery on the home page that displays a list of available restaurants.
* **Detailed Restaurant Menu:** Clicking on a restaurant leads to a dedicated page with its unique menu, fetched dynamically based on the URL parameter.
* **Functional Shopping Cart:** A globally managed shopping cart with full functionality:
    * Add items from any menu.
    * Increment and decrement item quantities.
    * Remove items completely.
* **Persistent State:** The shopping cart's state is saved to `localStorage`, meaning the user's selections are remembered even after closing or refreshing the browser tab.
* **Simulated Checkout Flow:** A complete user journey from cart to a checkout form and a final "Thank You" confirmation page.
* **Seamless Navigation:** Built as a true Single Page Application using `react-router-dom` for instant, smooth navigation between pages without reloads.

## 🚀 Tech Stack

This project was built using a modern set of tools and libraries for frontend development:

* **React:** A library for building user interfaces with a component-based architecture.
* **TypeScript:** Ensures type safety and code robustness, preventing common bugs.
* **Vite:** A blazing-fast build tool for the development environment.
* **Zustand:** A minimalist and powerful global state manager used for the shopping cart.
* **React Router DOM:** For implementing client-side routing and navigation.
* **CSS Modules:** For component-scoped and conflict-free styling.

## 🛠️ Getting Started

To run this project on your local machine, follow the steps below.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (v16 or higher)
* [Git](https://git-scm.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/MateCandido/quick-bite-app.git](https://github.com/MateCandido/quick-bite-app.git)
    ```
    *(Replace `quick-bite-app` with your new repository name if different)*

2.  **Navigate to the project directory:**
    ```bash
    cd quick-bite-app
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

5.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

---

Made with ❤️ by **Mateus dos Santos Cândido**. Let's connect!

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mateus-cândido-b8b06a280)
[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/MateCandido)