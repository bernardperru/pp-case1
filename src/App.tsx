import { Route, Routes } from "react-router-dom";
import { BottomBar, NavBar, NavBarLink } from "./components";
import { CartProvider } from "./context/CartContext";
import { FrontPage } from "./pages/Frontpage";
import { PreviousOrderPage } from "./pages/PreviousOrdersPage";
import { OrderPage } from "./pages/OrderPage";

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
        <Route path="/" element={<FrontPage />}>
          <Route path="prev_orders" element={<PreviousOrderPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
      <BottomBar />
    </CartProvider>
  );
}

export default App;
