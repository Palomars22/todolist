import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    maxWidth: "600",
    with: "100%",
    background: "#e6e6ed",
    borderRadius: "5px",
    padding: 15,
    marginBottom: 10,  
  },
  title: {
    textAlign: "center",
  },
}));
export const TaskItem = ({ id, title, onRemove1 }) => {
  const classes = useStyles();
  const onClick = () => onRemove1(id, title);
  return (
    <div className={classes.container}>
      <li>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Button
          size="small"
          onClick={onClick}
          variant="contained"
          color="secondary"
        >
          Excluir
        </Button>
      </li>
    </div>
  );
};
