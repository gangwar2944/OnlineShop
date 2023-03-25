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

function App() {
  const user=useSelector(state=>state.user.currentUser)
  return (
    <div className="App">
      <BrowserRouter>
         
        <Routes>
         
          <Route exact path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={user ? <Navigate to="/"/> :<Register />} />
          <Route path="/login" element={user ? <Navigate to="/"/> :<Login />} />
          <Route path="/success" element={<Success/>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
