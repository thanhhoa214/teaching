"use client";
import { useContext, useRef, createContext } from "react";
import { CartContext } from "../context/CartContext";
import CountdownTimer from "./CountdownTimer";

export interface ItemProps {
  id: number;
  item: string;
  price: number;
  newPrice: number;
  rating: string;
  image: string;
  markdown_perc: string;
}

export interface DealProps {
  items: ItemProps[];
}

export const DealsContext = createContext<DealProps | null>(null);

export default function Deals({ items }: DealProps) {
  const hasItems = items.length !== 0;
  const listRef = useRef<HTMLUListElement>(null);
  const cartInfo = useContext(CartContext);

  return (
    <div className="mt-15">
      <span className="text-red-500 font-bold ml-8 px-4 py-2 border-l-10 text-sm">
        Today&apos;s
      </span>
      <div className="flex items-center justify-between">
        <div className="ml-8 mt-3">
          <span className="font-bold text-3xl mr-9">Flash Sales</span>
          <CountdownTimer/>
        </div>
        <div>
          <span
            className="border border-gray-200 bg-gray-200 rounded-full p-1 mr-2"
            onClick={() => {
              if (listRef.current) {
                listRef.current.scrollLeft = Math.max(
                  listRef.current.scrollLeft - 1200,
                  0
                );
              }
            }}
          >
            ←
          </span>
          <span
            className="border border-gray-200 bg-gray-200 rounded-full p-1 mr-2"
            onClick={() => {
              if (listRef.current) {
                listRef.current.scrollLeft = Math.min(
                  listRef.current.scrollLeft + 1200,
                  listRef.current.scrollWidth
                );
              }
            }}
          >
            →
          </span>
        </div>
      </div>
      <ul className="ml-8 mt-3 flex overflow-auto scroll-smooth" ref={listRef}>
        {hasItems ? (
          items.map((item) => (
            <li key={item.item} className="mx-2">
              <div className="relative overflow-hidden border border-gray-100 bg-white w-40 h-40 mb-2 group">
                <span className="border mx-2 text-xs px-1 rounded text-white border-red-500 bg-red-500 absolute top-2 left-2">
                  -{item.markdown_perc}
                </span>
                <img
                  src={item.image}
                  alt={item.item}
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => cartInfo?.addToCart(item.id)}
                  className="absolute bottom-2 w-full flex flex-col items-center border text-white bg-black py-1 text-sm transform transition duration-300 translate-y-full opacity-0 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible"
                >
                  Add to cart
                </button>
              </div>
              <span className="font-bold line-clamp-2">{item.item}</span>
              <div>
                <span className="text-red-500 mr-2">${item.price}</span>
                <span className="text-gray-500 line-through">
                  ${item.newPrice}
                </span>
              </div>
              <span>{item.rating}</span>
            </li>
          ))
        ) : (
          <p>No item found.</p>
        )}
      </ul>
    </div>
  );
}
