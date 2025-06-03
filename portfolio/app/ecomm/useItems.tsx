import { useEffect, useState } from "react";
import type { ItemProps } from "./Deals";


interface DbProduct {
  id: number;
  name: string;
  price: number;
  category: string
}

type DbProductResponse = DbProduct[]



export const useItems = () => {
  const [dbProducts, setdbProducts] = useState<DbProductResponse>([]);
  const items: ItemProps[] = dbProducts.map((product) => {
    const discountedPrice = Math.round(product.price * 0.8 * 100)/100; // round item price to 2 decimals

    return {
      id: product.id,
      item: product.name,
      image: "https://picsum.photos/200",
      price: product.price,
      newPrice: discountedPrice,
      markdown_perc: "20%",
      rating: "4/5",
    };
  });

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((response) => {
        return response.json();
      })
      .then((data: DbProduct[]) => {
        setdbProducts(data);
      });
  });

  return items;
};
