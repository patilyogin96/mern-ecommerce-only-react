import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Hompage/Hompage";
import ViewAllProducts from "../Pages/ViewAllProducts/ViewAllProducts";
import OrderSummary from "../Pages/OrderSummary/OrderSummary";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/view-all-products" element={<ViewAllProducts />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
