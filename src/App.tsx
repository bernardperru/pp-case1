import { FrontPage } from "./pages/Frontpage";
import { NavBarLink } from "./components/Navbar/Navbar";
import { NavBar } from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { BottomBar } from "./components/BottomBar/BottomBar";
import { CartProvider } from "./context/CartContext";

const routes: NavBarLink[] = [
  { path: "/serier", title: "SERIER" },
  { path: "/vugge", title: "VUGGE" },
  { path: "/børnesenge", title: "BØRNESENGE" },
  { path: "/opbevaring", title: "OPBEVARING" },
  { path: "/højstol", title: "HØJSTOL" },
  { path: "/pusle", title: "PUSLE" },
  { path: "/tekstiler", title: "TEKSTILER" },
  { path: "/tilbehør", title: "TILBEHØR" },
  { path: "/reservedele", title: "RESERVEDELE" },
];

function App() {
  return (
    <CartProvider>
      <NavBar links={routes} />
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
      <BottomBar />
    </CartProvider>
  );
}

export default App;
