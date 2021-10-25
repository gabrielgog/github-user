import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementCount = (button) => {
    setCount(count + button);
  };
  return (
    <div className="App">
      <Button button={1} onClickFunction={incrementCount} />
      <Button button={10} onClickFunction={incrementCount} />
      <Button button={100} onClickFunction={incrementCount} />
      <Button button={1000} onClickFunction={incrementCount} />

      <span>{count}</span>
    </div>
  );
};

export default App;
