import React from "react";
import styles from "./index.module.css";

const OrderSummary = () => {
  return (
    <>
      <div className={styles.orderContainer}>
        Order Summary
        <div className={styles.loginDetailsBox}>Login</div>
        <div className={styles.addressBox}>Address Box</div>
        <div className={styles.orderSummaryBox}>Order Summary</div>
        <div className={styles.paymentOptions}>Payment Options</div>
      </div>
    </>
  );
};

export default OrderSummary;
