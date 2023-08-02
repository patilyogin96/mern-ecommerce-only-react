import React from "react";
import styles from "./index.module.css";
import SingleCard from "./SingleCard";



const CategoryFilter= ({ filter }) => {
  console.log("DDDDDDDDSSSSSS", filter);

  return (
    <>
      <div className={styles.container}>
        {filter?.map((f, i) => {
          return <SingleCard item={f} />;
        })}
      </div>
    </>
  );
};

export default CategoryFilter;
