import React from "react";
import Child from "./Child";

const Parent = () => {
  const reciverd = (data) => {
    console.log(data);
  };
  return (
    <>
      <Child name="Jiya" age={25} city="New York" receiverFunction={reciverd} />
    </>
  );
};

export default Parent;
