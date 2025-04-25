import React, { useState } from "react";
import Task from "./Task";
import CategoryFilter from "./CategoryFilter";

function TaskList({ tasks }) {
  const [filteredCategory, setFilteredCategory] = useState("All");

  function handleCategoryChange(category) {
    setFilteredCategory(category);
  }

  const filteredTasks = filteredCategory === "All" 
    ? tasks 
    : tasks.filter(task => task.category === filteredCategory);

  return (
    <div>
      <CategoryFilter categories={["All", "Code", "Food", "Money", "Misc"]} onCategoryChange={handleCategoryChange} />
      <div className="tasks">
        {filteredTasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
