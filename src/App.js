
import './App.css';
import Home from './Components/Home/home';
import Login from './Components/Login/loginform';
import CartProduct from './Components/Cartproduct';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
            <Routes>
                <>
<Route path="/" element={<Login />} />
<Route path="/header" element={<Header/>} />
<Route path="/cartlist" element={<CartProduct/>} />
</>
</Routes>
</BrowserRouter>
  )
   
}

export default App;
