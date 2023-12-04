import React from "react";
import { Route, Routes } from "react-router-dom";
import Contacts from "../Pages/Contacts";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/contact" element={<Contacts />} />
      <Route path="/appointment" />
    </Routes>
  );
}

export default AllRoutes;
