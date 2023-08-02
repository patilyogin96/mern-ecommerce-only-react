import React from "react";
import styles from "../index.module.css";
import { Button } from "@mui/material";
import prodImg from "../../../Assets/lenovo.webp";
const CartProduct = () => {
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgBox}>
          <div  >
            <img className={styles.imgEleStyle} src={product?.image} alt="product" />
          </div>
        </div>
        <div className={styles.descBox}>
          <div className={styles.title}>{product?.title}</div>
          <div className={styles.description}>{product?.description}</div>
          <div className={styles.buyBox}>
            <div>
              <Button size="small" variant="contained">
                remove{" "}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.priceBox}>
          <div>
            <span>&#8377;</span>
            <span>{product?.price}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;

const product = {
  image: prodImg,
  title: "Lenovo 23.8 inch Full HD Panel",
  description: "Panel Type:VA Panel",
  price: "7,499",
};
