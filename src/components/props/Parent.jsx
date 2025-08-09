import React from "react";
import Child from "./Child";

const Parent = () => {
  // const reciverd = (data) => {
  //   console.log(data);
  // };
  const [dataFromChild, setDataFromChild] = useState("");
  const getChildData = (data) => {
    setDataFromChild(data);
  };

  return (
    <>
      <Child
        name="Jiya"
        age={25}
        city="New York"
        // receiverFunction={reciverd}
        rcvChildData={getChildData}
      />
    </>
  );
};

export default Parent;
