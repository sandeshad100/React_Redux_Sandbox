import { useSelector } from "react-redux";

import "./App.css";
import { Counter } from "./Counter";
import Blog from "./Blog";

function App() {
  const count = useSelector((state) => state.counter.value);

  return (
    <>
      <Counter />
      <h1>App Counter {count}</h1>
      <h2>Blog</h2>
      <Blog />
    </>
  );
}

export default App;
