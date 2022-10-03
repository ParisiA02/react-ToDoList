import { useState } from "react";

const InputLabel = ({ setTasks, tasks }) => {
  const [value, setValue] = useState("");

  const handleChange = (value) => {
    setValue(value);
  };

  const firstLetterToUpperCase = (value) => {
    const task = value.slice(1);
    const finalTask = value.charAt(0).toUpperCase() + task;
    return finalTask;
  };

  const addTask = () => {
    if (!tasks.includes(firstLetterToUpperCase(value))) {
      const task = firstLetterToUpperCase(value);
      setTasks([...tasks, task]);
      setValue("");
    } else {
      setValue("");
      alert("elemento già inserito");
    }
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && value) {
      addTask(e.target.value);
    }
  };

  return (
    <>
      <input
        className="input-task"
        type="text"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => handleEnterPress(e)}
        value={value}
      />
      <button
        className="btn-add"
        id="submitButton"
        onClick={addTask}
        disabled={!value}
      >
        +
      </button>
    </>
  );
};

export default InputLabel;
