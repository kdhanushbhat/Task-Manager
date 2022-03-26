import React, { useEffect, useState } from "react";
function AddTasks() {
  const getItm = () => {
    let lst = JSON.parse(localStorage.getItem("task-list"));
    if (lst) {
      return lst;
    } else {
      return [];
    }
  };

  const findid = () => {
    if (tasks.length < 1) {
      return 0;
    } else {
      return tasks[tasks.length - 1].id + 1;
    }
  };

  const [tasks, setTasks] = useState(getItm());
  const [inputs, setInputs] = useState({
    status: true,
    id: findid()
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks((tasks) => [...tasks, inputs]);
    setInputs((inputs) => ({
      ...inputs,
      head: "",
      text: "",
      id: findid()
    }));
  };

  useEffect(() => {
    localStorage.setItem("task-list", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <main className="add-task">
      <form onSubmit={handleSubmit}>
        <div className="input-label">
        <p>
          Enter task Heading:
          </p>
          <input
            className="input-box"
            type="text"
            name="head"
            maxLength="20"
            onChange={handleChange}
            value={inputs.head || ""}
            required
          />
          </div>
        <br />
        <div className="input-label">
          <p>
          Enter task description:
          </p>
          <textarea
            rows="2"
            cols="25"
            className="input-box"
            type="text"
            name="text"
            maxLength="50"
            value={inputs.text || ""}
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="input-label">
        <p>
          Enter date and time:
          </p>
          <input
            className="input-box"
            type="datetime-local"
            name="datetime"
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <input className="submitbtn" type="submit" />
      </form>
    </main>
  );
}
export default AddTasks;
