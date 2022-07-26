import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import Product from "./pages/product/Product";

function App() {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contacts" element={<Contacts/>}/>
            <Route path="/products" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;