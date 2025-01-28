// import {useState} from "react";
import Header from "./component/Header";
import "./App.css";
import "./header.css";
import "./main.css";
import "./footer.css";
import Main from "./component/Main";
import Footer from "./component/Footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main></Main>
      <Footer />
    </>
  );
}

export default App;
