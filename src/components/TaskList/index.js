import React, { useEffect, useState } from "react";
const TaskList = ({ tasks, setTasks }) => {
  const [checked, setChecked] = useState([]);

  const removeItem = (value) => {
    const newTasks = [...tasks];
    const index = newTasks.indexOf(value);
    if (index > -1) {
      newTasks.splice(index, 1);
      setTasks(newTasks);
      if (checked.includes(value)) {
        const index = checked.indexOf(value);
        checked.splice(index, 1);
        setChecked([...checked]);
      }
    }
  };

  console.log(checked);

  const handleCheck = (task) => {
    if (checked.includes(task)) {
      const index = checked.indexOf(task);
      if (index > -1) checked.splice(index, 1);
      setChecked([...checked]);
    } else {
      setChecked([...checked, task]);
    }
  };

  useEffect(() => {
    if (tasks.length === 0) {
      setChecked([]);
    }
  }, [tasks]);

  return (
    <div className="tasklist-container">
      <ul className="ul-tasklist">
        {tasks?.map((task) => (
          <li className="li-tasklist" key={task}>
            <div className="label-container-tasklist">
              <div
                className={`label-tasklist ${
                  checked.includes(task) ? "checked" : ""
                }`}
              >
                {task}
              </div>
              <div className="action-container">
                <input
                  className="checkbox"
                  type="checkbox"
                  onClick={() => handleCheck(task)}
                ></input>
                <button className="btn-remove" onClick={() => removeItem(task)}>
                  X
                </button>
              </div>
            </div>
            <div className="line-tasklist" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
