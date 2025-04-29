import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import About from "./about";

function MyButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <button onClick={handleClick}>
      Go to About Page
    </button>
  );
}

export default function MyApp(){
  return (
    <Router>
      <div>
        <h1>Application 2</h1>
        <p>Test to function.</p>
        <p>This is a working button that links to the About page.</p>
        <MyButton />
        <Routes>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <p>This is the home page.</p>
          </Route>
        </Routes>
      </div>
    </Router>
  );
};
