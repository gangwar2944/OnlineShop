import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import { Routes, Route, Navigate } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import CheckOut from "./Checkout/CheckOut";
import "react-toastify/dist/ReactToastify.css";
import Order from "./pages/Order";
import OrderDetailPage from "./pages/OrderDetailPage";
import LoaderIcon from "./components/LoaderIcon";
import { Suspense, lazy } from "react";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./services/redux/theme/theme";

function Router() {
  const Home = lazy(() => import("./pages/Home"));
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
