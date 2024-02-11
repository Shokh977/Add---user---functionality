import React, { Component, useState } from "react";

import Card from "../UI/Card";
import "../UI/Error";
import classes from "./AddUser.module.css";
import Button from "../UI/button";
import Error from "./../UI/Error";

const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const userHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input!",
        message: "Please enter a valid name and age.",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age!",
        message: "please enter a valid age (> 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
    setEnteredUserName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={userHandler}
            value={enteredUserName}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            onChange={ageHandler}
            value={enteredAge}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
