import { useState } from "react";
import Parent from "./components/props/Parent";
function App() {
  const [count, setCount] = useState(0);
  const pageStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      <h2>Welcome to React Project</h2>
      <p>Testing new branch creation</p>
      <div style={pageStyle}>
        <Parent />
      </div>
    </>
  );
}

export default App;
