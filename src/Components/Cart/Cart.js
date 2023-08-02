import React from "react";
import styles from "./index.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CartProduct from "./CartProduct/CartProduct";

const Cart = () => {
  let navigate = useNavigate();

  const navToOrderSummary = () => {
    navigate(`/order-summary`);
  };

  return (
    <>
      <div className={styles.cartContainer}>
        Cart Page
        {/* card product card */}
        <CartProduct />
        <div className={styles.priceCard}>
          Price Details
          <div>Price</div>
          <div>Tax</div>
          <div>Delivery charges</div>
          <div>Total Amount</div>
        </div>
        <div>
          <Button variant="contained" onClick={navToOrderSummary}>
            Place order
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
