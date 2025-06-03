"use client";
import Navbar from "./navbar";
import CategoryList from "./CategoryList";
import Deals, { DealProps } from "./Deals";
import Cart from "./cart";
import { useState } from "react";
import { useItems } from "./useItems";
import { CartContext } from "../context/CartContext";
import { CartContextType } from "../context/CartContext";
import { DealsContext } from "../context/DealContext";


// Data from https://jsonplaceholder.typicode.com/posts -> useState + useEffect + custom hook
// Cart management -> useContext + useState + custom hook

export default function Page() {
  const [inputSearch, setInputSearch] = useState("");
  const items = useItems();

  const filteredItems = items.filter((post) =>
    post.item.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const [cartItems, setCartItems] = useState<CartContextType["cartItems"]>([]);


  const cartValue: CartContextType = {
    cartItems,
    addToCart: (id) => {
      // ? => return
      // TODO: handle productId is existed
      // let targetItem: CartContextType['cartItems'][number];
      // for (const item of cartItems) {
      //   if (item.productId === id) {
      //     targetItem = item;
      //     break;
      //   }
      // }
      //
      // Computer Science: variable -> RAM
      // | cartItems    | 12
      // | cartItems[0] | 13
      // | cartItems[1] | 14
      // | targetItem   | 14 -> targetItem.quantity += 1

      // React
      // dev = npm run dev -> runs rerender 2 -> check
      // production = npm run build -> npm start runs 1
      //
      // find, filter, map, reduce
      // Tham biến (pass by reference) hoặc tham trị (pass by value)
      // find: reference
      // [{ productId: 1; quantity: 1 }, { productId: 2; quantity: 1 }]
      // id=2
      // targetItem = { productId: 2; quantity: 1 } (object in the array)

      // javascript
      // map -> array mới
      // sort -> array cũ (ko array mới)
      const targetItem = cartItems.find((item) => item.productId === id);
      if (targetItem) {
        targetItem.quantity += 1;
        setCartItems(cartItems);
      } else setCartItems([...cartItems, { productId: id, quantity: 1 }]);
    },
  };

  return (
    <div>
      <div className="border-b border-gray-200">
        <Navbar onSearch={setInputSearch} />
      </div>
      <div className="flex md:flex-row flex-col-reverse">
        <CartContext.Provider value={cartValue}>
          <DealsContext.Provider value={ {items: filteredItems} }>
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
          </DealsContext.Provider>
        </CartContext.Provider>
      </div>
    </div>
  );
}
