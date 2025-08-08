import React from "react";

const Child = (props) => {
  return (
    <>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old.</p>
      <p>You live in {props.city}.</p>
    </>
  );
};

export default Child;
