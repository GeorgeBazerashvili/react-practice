import React from "react";
import ReactDOM from "react-dom/client";

const Button = () => {
  return (
    <>
      <button onClick={myFunc}>Click Me!</button>
    </>
  );
};

function myFunc() {
  console.log("hello there");
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Button />);
