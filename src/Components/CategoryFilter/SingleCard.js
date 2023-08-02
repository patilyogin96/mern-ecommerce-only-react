import React from "react";
import styles from "./index.module.css";

const SingleCard = ({ item }) => {
  console.log("FinalF", item);
  const { id = 0, title = "Default", image = "" } = item || {};

  const handleCategory = (id) => {
    console.log("Id", id);
  };

  return (
    <>
      <div className={styles.cardContainer} onClick={() => handleCategory(id)}>
        <div>
          <img src={image} alt={title} />
        </div>
        <div>{title}</div>
      </div>
    </>
  );
};

export default SingleCard;
