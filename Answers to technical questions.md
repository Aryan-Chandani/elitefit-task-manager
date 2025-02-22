## 📜 Answers to Technical Questions

###  **1. How long did you spend on the coding test?**

I spent approximately **10-12 hours** on the coding test. This time includes:
- Setting up the React project with Vite and Tailwind CSS.
- Implementing core features like task addition, prioritization, completion status, search, filtering, and sorting by due date.
- Debugging environment-related issues with Node.js, npm, and Tailwind CSS setup.
- Refining the UI and ensuring all required functionalities worked smoothly.
- Writing documentation and addressing technical questions.

---

###  **2. What was the most useful feature that was added to the latest version of your chosen language?**

One of the most useful features in the latest version of **JavaScript (ES2022)** is the **`Object.hasOwn`** method. It provides a reliable way to check for an object's own properties without issues related to `Object.prototype` pollution.

#### ✅ **Code Snippet Using `Object.hasOwn`:**
```javascript
const task = { title: "Complete Assignment", priority: "High" };

if (Object.hasOwn(task, "priority")) {
  console.log(`Priority exists: ${task.priority}`);
} else {
  console.log("Priority not found.");
}
```

####  **Why it's useful in this project:**
While managing task objects, checking for property existence reliably ensures that dynamic task updates (like changing priorities) do not break due to prototype-related issues.

---

###  **3. How would you track down a performance issue in production? Have you ever had to do this?**

####  **Approach to Tracking Performance Issues:**
1. **Reproduce the Issue:** Attempt to reproduce the reported performance issue locally or in a staging environment.

2. **Profiling the Application:**
   - Use **Chrome DevTools** to profile rendering and scripting time.
   - Analyze the **Network** tab to check for slow-loading assets.

3. **Monitoring Tools:**
   - Implement tools like **Lighthouse**, **New Relic**, or **Sentry** for real-time performance monitoring and error reporting.

4. **Code Optimization:**
   - Identify expensive React re-renders using **React DevTools**.
   - Optimize rendering by using **`React.memo`**, **`useMemo`**, and **`useCallback`**.

5. **Lazy Loading:**
   - Implement lazy loading for components and assets where applicable.

####  **Have I Done This Before?**
Yes, I have debugged performance issues in previous React projects by:
- Identifying unnecessary re-renders using React DevTools.
- Optimizing component structures.

---

###  **4. If you had more time, what additional features or improvements would you consider adding to the task management application?**

####  **UI/UX Improvements:**
- **Drag and Drop Functionality:** Enable users to reorder tasks within each section using libraries like `react-beautiful-dnd`.
- **Dark Mode Support:** Allow users to toggle between light and dark themes.

####  **Functional Enhancements:**
- **Notification Reminders:** Notify users when a task's due date is near using the **Notifications API**.
- **Recurring Tasks:** Allow users to set recurring tasks with customizable intervals.

####  **Data Persistence:**
- **Backend Integration:** Connect the app to a backend (e.g., Firebase or Express.js API) for persistent storage and retrieval of tasks.
- **User Authentication:** Let users create accounts and sync their tasks across devices.

####  **Performance Optimization:**
- **Pagination or Infinite Scroll:** For better performance when managing a large number of tasks.
- **Progress Charts:** Integrate visual charts to show task completion trends using libraries like `Recharts` or `Chart.js`.

---

💬 *These additional features would enhance the functionality, usability, and performance of the task management application, providing a more comprehensive user experience.* 

