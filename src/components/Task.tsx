import { Box, Button, TextField } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/task.css";

interface propsType {
  isEdit: boolean;
  data: { index: number; title: any; description: any };
}

type myStateType = {
  title: any;
  description: any;
};

const Task = ({ isEdit, data }: propsType) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<myStateType>(
    isEdit === true
      ? {
          title: data?.title,
          description: data?.description,
        }
      : {
          title: "",
          description: "",
        }
  );

  const [tasks, setTasks] = useState<myStateType[]>([]);

  const onChangeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  //submithandler

  const handleSubmit = () => {
    if (isEdit) {
      tasks.splice(data?.index, 1, formData);

      localStorage.setItem("tasks", JSON.stringify(tasks));
      setTasks(tasks);
    } else {
      let newTasks = [...tasks, formData];

      localStorage.setItem("tasks", JSON.stringify(newTasks));
      setTasks(newTasks);
    }

    reset();
    navigate("/list");
  };

  //reset

  const reset = () => {
    setFormData({
      title: "",
      description: "",
    });
  };

  useEffect(() => {
    let taskArray: string | null = localStorage.getItem("tasks");
    let parsedArray: myStateType[] = [];
    if (taskArray) parsedArray = JSON.parse(taskArray);

    setTasks(parsedArray);
  }, []);

  return (
    <div className="container">
      <Box className="form">
        <h2>{isEdit ? "Edit Task" : "Create Task"}</h2>
        <TextField
          name="title"
          value={formData?.title}
          label="Title"
          sx={{ m: 3, width: "80%" }}
          onChange={onChangeHandler}
        />
        <TextField
          multiline
          name="description"
          label="Description"
          value={formData?.description}
          sx={{ m: 3, width: "80%" }}
          onChange={onChangeHandler}
        />

        <Button
          disabled={formData?.title === "" && formData?.description === ""}
          onClick={handleSubmit}
          variant="contained"
        >
          {isEdit ? "Edit task" : "Create task"}
        </Button>
      </Box>
    </div>
  );
};

export default Task;
