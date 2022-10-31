import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./Component/404/NotFound";
import About from "./Component/About/About";
import Login from "./Component/Authentication/Login";
import SignUp from "./Component/Authentication/SignUp";
import Inventory from "./Component/Inventory/Inventory";
import Navber from "./Component/Navber/Navber";
import Order from "./Component/Order/Order";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import Shipment from "./Component/Shipment/Shipment";
import Shop from "./Component/Shop/Shop";

function App() {
  return (
    <div>
      {/* <AuthProvider> */}
      <Navber />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Order />} />
        <Route
          path="/inventory"
          element={
            <RequireAuth>
              <Inventory />
            </RequireAuth>
          }
        />
        <Route
          path="/shipment"
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="ProductDetails/:pdID" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* </AuthProvider> */}
    </div>
  );
}

export default App;
