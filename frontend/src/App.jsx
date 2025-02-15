import { BrowserRouter, Routes, Route, Navigate, Form } from "react-router";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Pricing from "./pages/Pricing";
import Nootfound from "./pages/Nootfound";
import Applayout from "./pages/Applayout";
import { useEffect, useState } from "react";
import CitiesList from "./pages/CitiesList";
import CountryList from "./pages/CountryList";
import City from "./components/City";
import Forum from "./pages/Form";


const  API_URL = 'http://localhost:5000'

function App() {

const [cities, setCities] = useState([])
const [isloading, setIsloading] = useState(false)

useEffect(function(){
  async function FetchCities() {
    try {
      setIsloading(true)
      const response = await fetch(`${API_URL}/cities`)
      const data = await response.json()
      setCities(data)
      setIsloading(false)
    } catch (error) {
      console.log(error)
    }
  }
  FetchCities()
}, []) 


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
            <Route path='cities' element={<CitiesList cities={cities} isloading={isloading} />} />
            <Route path='cities/:id' element={<City />} />
            <Route path='countries' element={<CountryList cities={cities} isloading={isloading} />} />
            <Route path='form' element={<Forum/>} />
          </Route>
          <Route path="*" element={<Nootfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
