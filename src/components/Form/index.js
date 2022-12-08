import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    margin: 60,
  },
  TextField: {
    maxWidth: 800,
    width: "100%",
  },
  btn: {
    marginTop: 6,
    marginLeft: 20,
  },
}));
export const Form = ({ onSuccess }) => {
  const classes = useStyles();
  const [state, setState] = useState("");
  const handleChange = (e) => setState(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (state) {
      onSuccess(state);
      setState("");
    }
  };
  return (
    <Container>
      
      <form
        className={classes.container}
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Cadastre nova tarefa"
          variant="outlined"
          value={state}
          onChange={handleChange}
          className={classes.TextField}
          color="secondary"
        />

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          size="large"
          className={classes.btn}
        >
          Adicionar Tarefa
        </Button>
      </form>
    </Container>
  );
};
