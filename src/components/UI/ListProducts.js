import React from "react";
import CardProduct from "../UI/CardProduct";

const ListProducts = ({ data }) => {
  return (
    <>
      {data?.map((item, index) => (
        <CardProduct key={index} item={item} />
      ))}
    </>
  );
};

export default ListProducts;
