import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="w-[80%] mx-auto mt-10 p-10 rounded bg-zinc-200">
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
};

export default App;
