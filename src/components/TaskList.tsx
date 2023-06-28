import React, { useEffect, useState } from "react";
import SingleTask from "./SingleTask";
import "../styles/task-list.css";

type taskType = {
  title: any;
  description: any;
};

const TaskList = () => {
  const [tasks, setTasks] = useState<taskType[]>([]);

  const onDeleteHandler = (id: number) => {
    const resttasks = tasks.filter((_, index) => index !== id);
    localStorage.setItem("tasks", JSON.stringify(resttasks));
    setTasks(resttasks);
  };

  useEffect(() => {
    const taskArray: string | null = localStorage.getItem("tasks");
    let parsedArray = [];
    if (taskArray) parsedArray = JSON.parse(taskArray);

    setTasks(parsedArray);
  }, []);
  //   useEffect(() => {
  //     console.log("tasks in list ", tasks);
  //   }, [tasks]);
  return (
    <div className="container-list">
      {tasks.length === 0 && <h2 className="message">No Task Found</h2>}
      {tasks.length > 0 && (
        <div className="task-list">
          {tasks.map((task, index) => (
            <SingleTask
              key={index}
              title={task.title}
              description={task.description}
              index={index}
              onDeleteHandler={onDeleteHandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
