import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { TaskItem } from "../TaskItem/TaskItem";

import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  title: {
    textAlign: "center",
  },
}));
export const TaskList = ({ tasks, onRemove1 }) => {
  const classes = useStyles();

  return (
    <Container>
      <Typography variant="h4" gutterBottom className={classes.title}>
        <PlaylistAddCheckIcon color="primary" fontSize="large" /> Lista de
        Tarefas
      </Typography>

      <ul id="tasks">
        {tasks.map((item, index) => (
          <TaskItem key={item.id} {...item} onRemove1={onRemove1} />
        ))}
      </ul>
    </Container>
  );
};
