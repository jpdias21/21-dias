import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Usuario from "./pages/Usuario";

const RoutesComponents= () => {
   return(
       <BrowserRouter>
           <Routes>
           <Route  path="/" element={<Home/>} />
           <Route  path="/sobre" element={<Sobre/>} />
           <Route  path="/usuario" element={<Usuario/>} />
           </Routes>
       </BrowserRouter>
   )
}

export default RoutesComponents;