import React, { useEffect, useState } from "react";

const Child = ({ name, age, city, receiverFunction }) => {
  const [username, setUserName] = useState("Tridib");
  useEffect(() => {
    receiverFunction(username);
  }, [username]);

  return (
    <>
      <h2>Hello, {name}!</h2>
      <p>You are {age} years old.</p>
      <p>You live in {city}.</p>
    </>
  );
};

export default Child;
