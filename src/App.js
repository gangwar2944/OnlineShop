import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import Success from './pages/Success';
import { useSelector } from 'react-redux';
import ErrorPage from './pages/ErrorPage';
import CheckOut from './Checkout/CheckOut';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const user=useSelector(state=>state.user.currentUser)
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/checkout" element={<CheckOut/>} />
          <Route path="/register" element={user ? <Navigate to="/"/> :<Register />} />
          <Route path="/login" element={user ? <Navigate to="/"/> :<Login />} />
          <Route path="/success" element={<Success/>} />
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
