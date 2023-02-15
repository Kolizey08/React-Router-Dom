import { Routes, Route, Link } from "react-router-dom";
import Futer from "./components/Futer";
import Headar from "./components/Headar";
import Main from "./components/Main";
import "./styles.css";

function App() {
  return (
    <div className="divBody">
      <div className="divTelo">
        <Headar />
        <Main />
        <Futer />
      </div>
    </div>
  );
}

export default App;
