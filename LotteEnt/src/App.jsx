import {useState} from "react";
import Header from "./component/Header";
import "./App.css";
import "./header.css";
import "./main.css";
import Main from "./component/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main></Main>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
