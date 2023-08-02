import React, { useState } from "react";
import styles from "./index.module.css";
import prodImg from "../../Assets/lenovo.webp";
import { Button } from "@mui/material";
import CustomDrawer from "../CustomDrawer/CustomDrawer";
import Cart from "../Cart/Cart";

const ProdListCard = () => {
  const [openDrw, setOpenDrw] = useState(false);
  return (
    <>
      <div className={styles.cardContainer}>
        <div className={styles.imgBox}>
          <div>
            <img src={product?.image} alt="product" />
          </div>
        </div>
        <div className={styles.descBox}>
          <div className={styles.title}>{product?.title}</div>
          <div className={styles.description}>{product?.description}</div>
          <div className={styles.buyBox}>
            <div>
              <Button variant="contained" onClick={() => setOpenDrw(true)}>
                Add to Cart
              </Button>
            </div>
            <div>
              <Button variant="contained">Buy Now</Button>
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
      <CustomDrawer
        anchor={"right"}
        open={openDrw}
        onClose={() => setOpenDrw((prev) => !prev)}
      >
        <Cart />
      </CustomDrawer>
    </>
  );
};

export default ProdListCard;

const product = {
  image: prodImg,
  title: "Lenovo 23.8 inch Full HD Panel",
  description: "Panel Type:VA Panel",
  price: "7,499",
};
