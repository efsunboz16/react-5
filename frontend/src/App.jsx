import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Nootfound from "./pages/Nootfound";
import Applayout from "./pages/Applayout";

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path='/app' element={<Applayout />} >
          <Route index element={<Navigate to="cities" replace />} />
            <Route path='cities' element={<div>list of cities</div>} />
            <Route path='countries' element={<div>list of countries</div>} />
            <Route path='form' element={<div>form</div>} />
          </Route>
          <Route path="*" element={<Nootfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
