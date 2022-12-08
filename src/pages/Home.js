import React, { useEffect, useState } from "react";
import { Form } from "../components/Form";
import Header from "../components/Header/Header";
import { TaskList } from "../components/TaskList";

export const Home = () => {
  const [state, setState] = useState([{}]);

  const onSuccess = (title) => {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        title,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setState((prev) => [...prev, json]);
      });
  };

  const onRemove1 = (id, title) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      setState((prev) => prev.filter((item) => item.title !== title));
    });
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((json) => setState(json));
  }, []);
  return (
    <>
      <Header />
      <Form onSuccess={onSuccess} />
      <TaskList tasks={state} onRemove1={onRemove1} />
    </>
  );
};
