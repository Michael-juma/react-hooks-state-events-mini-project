import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";

// Sample data
const CATEGORIES = ["All", "Code", "Food", "Money", "Misc"];
const TASKS = [
  { text: "Buy rice", category: "Food" },
  { text: "Save a tenner", category: "Money" },
  { text: "Build a todo app", category: "Code" },
  { text: "Build todo API", category: "Code" },
  { text: "Get an ISA", category: "Money" },
  { text: "Cook rice", category: "Food" },
  { text: "Tidy house", category: "Misc" }
];

function App() {
  const [filteredTasks, setFilteredTasks] = useState(TASKS);

  const handleCategoryClick = (category) => {
    if (category === "All") {
      setFilteredTasks(TASKS); // Show all tasks
    } else {
      setFilteredTasks(TASKS.filter((task) => task.category === category));
    }
  };

  return (
    <div>
      <CategoryFilter categories={CATEGORIES} onCategoryClick={handleCategoryClick} />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
