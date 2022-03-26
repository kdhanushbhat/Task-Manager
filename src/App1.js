import React from "react";
import { Routes, Route } from "react-router-dom";
import ShowTasks from "./taskmanager/ShowTasks";
import AddTask from "./taskmanager/AddTasks";
import Header from "./taskmanager/Header";
function App1() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ShowTasks />} />
        <Route path="/add-task" element={<AddTask />} />
      </Routes>
    </div>
  );
}
export default App1;
