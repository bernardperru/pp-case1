import { Route, Routes } from "react-router-dom";
import { Footer, NavBar, NavBarLink } from "./components";
import { CartProvider } from "./context/CartContext";
import { FrontPage } from "./pages/Frontpage";
import { PreviousOrderPage } from "./pages/PreviousOrdersPage";
import { OrderPage } from "./pages/OrderPage";
import { useGetOldOrders } from "./hooks";
import { Container } from "./pages/Container";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="" element={<Container />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/prev_orders" element={<PreviousOrderPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
