import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";
import Appoint from "../Pages/Appoint";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contacts />} />
      <Route path="/appointment" element={<Appoint/>}/>
    </Routes>
  );
}

export default AllRoutes;
