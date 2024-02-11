import { FrontPage } from "./pages/Frontpage";
import { NavBarLink } from "./components/Navbar/Navbar";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BottomBar } from "./components/BottomBar/BottomBar";

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
      <NavBar links={routes} />
      <div>
        <Routes>
          <Route path="/" element={<FrontPage />} />
        </Routes>
      </div>
      <BottomBar />
    </div>
  );
}

export default App;
