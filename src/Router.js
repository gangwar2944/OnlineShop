import "./App.css";
import Cart from "./screens/cart/Cart";
import Login from "./screens/login/Login";
import ProductList from "./screens/product/ProductList";
import Register from "./screens/login/Register";
import SingleProduct from "./screens/product/SingleProduct";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./commonComponents/Success";
import { useSelector } from "react-redux";
import ErrorPage from "./commonComponents/ErrorPage";
import CheckOut from "./screens/address/CheckOut";
import "react-toastify/dist/ReactToastify.css";
import Order from "./screens/order/Order";
import OrderDetailPage from "./screens/order/OrderDetailPage";
import LoaderIcon from "./commonComponents/LoaderIcon";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./services/redux/theme/theme";

function Router() {
  const Home = lazy(() => import("./screens/Home"));
  const user = useSelector((state) => state.user.currentUser);

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Suspense
                fallback={
                  <div className="centered-fallback">
                    <LoaderIcon />
                  </div>
                }
              >
                <Home />
              </Suspense>
            }
          />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CheckOut />} />
          <Route
            path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/OrderDetailPage/:id" element={<OrderDetailPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default Router;
