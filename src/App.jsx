import "./App.css";
import { useState } from "react";
import zustandLogo from "./assets/zustand.png";
import OtherComp from "./Componets/OtherComp";

const App = () => {
  const [count, setCount] = useState(0);  // local state variable
  return (
    <>
      <div>
        <a href="https://zustand-demo.pmnd.rs/" target="_blank">
          <img src={zustandLogo} className="logo" alt="zustand logo" />
        </a>
      </div>
       <h1>Zustand</h1>
     

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <OtherComp name="Ankit Tripathi" />
    </>
  );
};
export default App;
