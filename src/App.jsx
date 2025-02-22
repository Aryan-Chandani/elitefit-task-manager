import React, { useState, useEffect } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priorityInput, setPriorityInput] = useState("Medium");
  const [dueDateInput, setDueDateInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterPriority, setFilterPriority] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const formatDate = (dateStr) => {
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  const addTask = () => {
    if (taskInput.trim() && dueDateInput) {
      const newTask = {
        id: Date.now(),
        title: taskInput,
        description: descriptionInput,
        priority: priorityInput,
        dueDate: dueDateInput,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      resetForm();
    }
  };

  const resetForm = () => {
    setTaskInput("");
    setDescriptionInput("");
    setPriorityInput("Medium");
    setDueDateInput("");
  };

  const toggleCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const updatePriority = (id, newPriority) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, priority: newPriority } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const priorityColors = {
    High: "bg-red-100 border-red-400",
    Medium: "bg-yellow-100 border-yellow-400",
    Low: "bg-green-100 border-green-400",
  };

  const completedTaskColor = "bg-gray-300 border-gray-500";

  const sectionTasks = (status) =>
    tasks
      .filter((task) => {
        const today = new Date().toISOString().split("T")[0];
        if (status === "Upcoming") return task.dueDate >= today && !task.completed;
        if (status === "Overdue") return task.dueDate < today && !task.completed;
        if (status === "Completed") return task.completed;
        return false;
      })
      .filter((task) =>
        (filterPriority === "All" || task.priority === filterPriority) &&
        (filterStatus === "All" ||
          (filterStatus === "Completed" && task.completed) ||
          (filterStatus === "Pending" && !task.completed))
      )
      .filter((task) =>
        searchQuery
          ? task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            task.description.toLowerCase().includes(searchQuery.toLowerCase())
          : true
      )
      .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  const renderTaskSection = (sectionName, sectionTasks) => (
    <div className="bg-gray-50 p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold mt-2 mb-4 border-b pb-2">{sectionName}</h2>
      <ul>
        {sectionTasks.map((task) => (
          <li
            key={task.id}
            className={`p-4 mb-3 rounded-xl border-l-4 flex justify-between items-start ${
              task.completed
                ? completedTaskColor
                : priorityColors[task.priority] || "bg-gray-100"
            }`}
          >
            <div>
              <h3 className={`text-lg font-semibold ${task.completed ? "line-through" : ""}`}>
                {task.title} - Due: {formatDate(task.dueDate)}
              </h3>
              <p className="text-sm text-gray-700">{task.description}</p>
              <div className="flex items-center gap-2 mt-2">
                <label className="text-xs font-semibold">Priority:</label>
                <select
                  value={task.priority}
                  onChange={(e) => updatePriority(task.id, e.target.value)}
                  className="border rounded p-1 text-xs"
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => toggleCompletion(task.id)}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-2xl shadow-lg space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-center">EliteFit Task Manager</h1>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Add New Task</h2>
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
          placeholder="Task Title"
        />
        <textarea
          value={descriptionInput}
          onChange={(e) => setDescriptionInput(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
          placeholder="Description"
        />
        <input
          type="date"
          value={dueDateInput}
          onChange={(e) => setDueDateInput(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
        />
        <select
          value={priorityInput}
          onChange={(e) => setPriorityInput(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <button
          onClick={addTask}
          className="bg-blue-500 text-white w-full py-2 rounded-2xl"
        >
          Add Task
        </button>
      </div>
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-semibold mb-4">Search & Filter Tasks</h2>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
          placeholder="Search tasks by title or description..."
        />
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="border rounded-2xl p-2 w-full mb-3"
        >
          <option value="All">All Priorities</option>
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border rounded-2xl p-2 w-full"
        >
          <option value="All">All Statuses</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="mt-8 grid gap-6">
        {renderTaskSection("Upcoming Tasks", sectionTasks("Upcoming"))}
        {renderTaskSection("Overdue Tasks", sectionTasks("Overdue"))}
        {renderTaskSection("Completed Tasks", sectionTasks("Completed"))}
      </div>
    </div>
  );
};

export default TaskManager;