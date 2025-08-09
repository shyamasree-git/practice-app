import React, { useEffect, useState } from "react";

const Child = ({ name, age, city, rcvChildData }) => {
  // const [username, setUserName] = useState("Tridib");
  // useEffect(() => {
  //   receiverFunction(username);
  // }, [username]);

  const handleClick = () => {
    rcvChildData("Data from child!");
  };
  return (
    <>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
      <p>You live in {city}.</p>
      <button onClick={handleClick}>Send Data to Parent</button>
    </>
  );
};

export default Child;
