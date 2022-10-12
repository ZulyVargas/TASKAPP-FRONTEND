import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import "../styles/Task.scss";

function Task(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography className="name"> {props.name}</Typography>
        <Typography className="description" mt={4} paragraph>
          {" "}
          {props.description}
        </Typography>
        <Typography className="status"> STATUS: {props.status}</Typography>
        <Typography className="date">
          {" "}
          FINISH BEFORE: {props.dueDate}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Task;
