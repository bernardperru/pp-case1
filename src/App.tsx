import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context";
import { Layout } from "./components";
import { FrontPage, OrderPage, PreviousOrderPage } from "./pages";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route path="/" element={<FrontPage />} />
          <Route path="/prev_orders" element={<PreviousOrderPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
