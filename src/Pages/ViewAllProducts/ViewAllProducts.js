import React from "react";
import styles from "./index.module.css";
import ProdListCard from "../../Components/ProdListCard/ProdListCard";

const ViewAllProducts = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.filterContainer}>Filters</div>
        <div className={styles.prodListContainer}>
          {[1, 2, 3, 4, 5].map((e) => {
            return <ProdListCard />;
          })}
        </div>
      </div>
    </>
  );
};

export default ViewAllProducts;
