import React, { useEffect, useState, useContext } from "react";
import NavBar from "../NavBar";
import getRequests from "../../utils/useFetchGET";
import { AuthContext } from "../../contexts/DataContext";
import { Grid } from "@mui/material";
import Task from "../Task";
import Button from "../Button";

function Home() {
  const { userInfo } = useContext(AuthContext);
  const [inHome, setInHome] = useState({ inHome: false });
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      if (!inHome.inHome) {
        const urlGetTasksById =
          "http://localhost:8081/api/v1/task/tasks/" + userInfo.id;
        const request = { url: urlGetTasksById };
        getRequests
          .UseFetchGET(request)
          .then((res) =>
            res.data.length > 0 ? setTasks(res.data) : console.log("No ok")
          );
        setInHome({ inHome: true });
      }
    } catch (e) {
      console.log(e);
    }
  }, [inHome, userInfo]);

  return (
    <div>
      <NavBar />
      <h1>👋 Hello, Welcome {userInfo.name} !</h1>
      <Grid
        className="tasks"
        rowSpacing={3}
        justifyContent="center"
        columnSpacing={1}
        container
      >
        {tasks.map((task) => (
          <Grid item xs="auto" wrap="nowrap" container key={task.id}>
            <Task
              key={task.id}
              name={task.name}
              description={task.description}
              status={task.status}
              dueDate={task.dueDate}
            ></Task>
          </Grid>
        ))}
      </Grid>
      <Button id="addTask" content="New task +" type="submit"></Button>
    </div>
  );
}

export default Home;
