import { ProductsType } from "@/types/productsType";
import React, { useEffect, useState } from "react";

export const getServerSideProps = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
};

type HomeServerPageProps = {
  data: ProductsType;
};

const HomeServerPage = ({ data }: HomeServerPageProps) => {
  const { products } = data;

  return (
    <div>
      <span>
        ✅ Data is fetched before the page is sent to the browser (SSR)
      </span>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default HomeServerPage;
