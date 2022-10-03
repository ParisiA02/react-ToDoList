import React, { useState } from "react";
import InputLabel from "./InputLabel";
import TaskList from "./TaskList";
const Main = () => {
  const [tasks, setTasks] = useState([]);

  const clearAll = () => {
    setTasks([]);
  };

  return (
    <div className="main">
      <div className="header">
        <div className="header-container">
          <div className="title-section">
            <h1>ToDo List</h1>
          </div>
          <div className="input-section">
            <InputLabel setTasks={setTasks} tasks={tasks} />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="list-section">
          <TaskList setTasks={setTasks} tasks={tasks} />
        </div>
      </div>
      <div className="footer">
        {tasks.length > 0 ? (
          <button
            className="btn-removeAll"
            disabled={tasks.length <= 0}
            onClick={clearAll}
          >
            Clear all
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default Main;
