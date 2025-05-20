"use client";
import Navbar from "./Navbar";
import CategoryList from "./CategoryList";
import Deals from "./Deals";
import Cart from "./Cart";
import { useState } from "react";
import { useItems } from "./useItems";

// Data from https://jsonplaceholder.typicode.com/posts -> useState + useEffect + custom hook
// Cart management -> useContext + useState + custom hook

export default function Page() {
  const [inputSearch, setInputSearch] = useState("");
  const items = useItems();

  const filteredItems = items.filter((post) =>
    post.item.toLowerCase().includes(inputSearch.toLowerCase())
  );

  return (
    <div>
      <div className="border-b border-gray-200">
        <Navbar onSearch={setInputSearch} />
      </div>
      <div className="flex md:flex-row flex-col-reverse">
        <main className="md:w-4/5 md:border-r border-gray-200 border-b">
          <div>
            <CategoryList />
          </div>
          <div>
            <Deals items={filteredItems} />
          </div>
        </main>
        <aside className="md:w-1/5">
          <Cart />
        </aside>
      </div>
    </div>
  );
}
