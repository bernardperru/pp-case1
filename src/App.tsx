import React from "react";
import logo from "./logo.svg";
import { NavBarLink } from "./components/Navbar/Navbar";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";

const routes: NavBarLink[] = [
  { path: "", title: "SERIER" },
  { path: "", title: "VUGGE" },
  { path: "", title: "BØRNESENGE" },
  { path: "", title: "OPBEVARING" },
  { path: "", title: "HØJSTOL" },
  { path: "", title: "PUSLE" },
  { path: "", title: "TEKSTILER" },
  { path: "", title: "TILBEHØR" },
  { path: "", title: "RESERVEDELE" },
];

function App() {
  return (
    <div>
      <NavBar links={routes}></NavBar>
    </div>
  );
}

export default App;
