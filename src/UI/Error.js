import React, { Component } from "react";
import Card from "./Card";
import Button from "./button";
import classes from "./ErrorModal.module.css";

const Error = (props) => {
  return (
    <React.Fragment>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h1>{props.title}</h1>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okey</Button>
        </footer>
      </Card>
    </React.Fragment>
  );
};

export default Error;
