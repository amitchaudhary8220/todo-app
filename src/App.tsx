import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import Navigation from "./components/Navigation";
import TaskEdit from "./components/TaskEdit";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <Task
              isEdit={false}
              data={{ title: "", description: "", index: -1 }}
            />
          }
        />
        <Route path="/list" element={<TaskList />} />
        <Route path="/edit" element={<TaskEdit />} />
      </Routes>
    </div>
  );
}

export default App;
