import React from "react";
import Task from "./Task";
import { useLocation } from "react-router-dom";

const TaskEdit = () => {
  const { state } = useLocation();
  console.log("state", state);
  return <Task isEdit={true} data={state} />;
};

export default TaskEdit;
