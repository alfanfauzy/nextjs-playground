import { Product, ProductsType } from "@/types/productsType";
import React, { useEffect, useState } from "react";

const handleFetch = async (): Promise<ProductsType> => {
  const response = await fetch("https://dummyjson.com/products");
  const data: ProductsType = await response.json();
  return data;
};

const HomeClientPage = () => {
  const [dataProducts, setDataProducts] = useState<Array<Product>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getFetch = async () => {
      setIsLoading(true);
      try {
        const getData = await handleFetch();
        console.log(getData.products);
        setDataProducts(getData.products);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    getFetch();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading ...</p>}
      {dataProducts.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
};

export default HomeClientPage;
