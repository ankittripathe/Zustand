import "./App.css";
import { useState } from "react";
import zustandLogo from "./assets/zustand.png";
import UserComp from "./Components/UserComp";
// import useCounterStore from "./Store/useCounterStore";

const App = () => {
  const [count, setCount] = useState(0); // local state variable

  // const counter = useCounterStore();
  return (
    <>
      <div>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank">
          <img src={zustandLogo} className="logo" alt="zustand logo" />
        </a>
        <h1>Zustand Tutorial</h1>
      </div>

      <div className="card">
        <h1>Count: {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>

      <UserComp name="Ankit Tripathi" />
    </>
  );
};
export default App;
