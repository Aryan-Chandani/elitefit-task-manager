#  **EliteFit Task Manager**

A responsive and feature-rich **Task Management Application** built with **React**, **Vite**, and **Tailwind CSS**. The app allows users to manage tasks efficiently by adding priorities, due dates, and completion statuses, with full search and filter capabilities.

---

##  **Features**
-  Add tasks with **priority levels** (High, Medium, Low)
-  **Due date** assignment and sorting by date
-  **Update priority** dynamically
-  **Mark tasks as completed** with visual styling changes
-  **Search** tasks by title or description
-  **Filter tasks** by priority and completion status
-  **Task categorization**: Upcoming, Overdue, Completed
-  Styled with **Tailwind CSS** for a modern UI
-  **LocalStorage** support for persistent data
-  **Deployed on GitHub Pages**

---

##  **Tech Stack**
-  **React** – Frontend framework
-  **Vite** – Fast build tool
-  **Tailwind CSS** – Utility-first CSS framework
-  **PostCSS** – CSS processing
-  **GitHub Pages** – Deployment platform

---

##  **Live Demo**
👉 **[EliteFit Task Manager - GitHub Pages](https://Aryan-Chandani.github.io/elitefit-task-manager/)**

---

##  **Getting Started Locally**

### ✅ **Prerequisites**
- **Node.js** (v20.x LTS recommended)
- **npm** (v9.x or higher)

### 🔄 **Installation Steps**
```bash
# Clone the repository
git clone https://github.com/Aryan-Chandani/elitefit-task-manager.git
cd elitefit-task-manager

# Install dependencies
npm install

# Start the development server
npm run dev
```
Visit **http://localhost:5173/** in your browser to view the app.

---

## 🌐 **Deployment**
The project is deployed on **GitHub Pages** using the **gh-pages** branch.

### 📦 **Deployment Steps**
```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

Ensure the **vite.config.js** file has the correct `base`:
```javascript
base: '/elitefit-task-manager/',
```

---

##  **Assumptions Made**
- Tasks are stored in **localStorage**, providing persistence between sessions.
- Due dates are formatted as **dd-mm-yyyy** for consistency.
- Priority and completion statuses are visually distinct using Tailwind CSS color schemes.
- Search matches keywords in **title** and **description** fields.

---

##  **Potential Improvements**
-  **Dark mode toggle**
-  **Notification reminders** for upcoming and overdue tasks
-  **Drag and drop support** for reordering tasks
-  **Backend integration** (e.g., Firebase) for persistent storage across devices
-  **User authentication** for personalized task management

---

##  **Acknowledgements**
-  **React** – [https://reactjs.org/](https://reactjs.org/)
-  **Tailwind CSS** – [https://tailwindcss.com/](https://tailwindcss.com/)
-  **Vite** – [https://vitejs.dev/](https://vitejs.dev/)
-  **GitHub Pages** – [https://pages.github.com/](https://pages.github.com/)

---
