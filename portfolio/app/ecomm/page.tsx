"use client"
import Navbar from "./navbar";
import CategoryList from "./category";
import Deals from "./hotdeals";
import Cart from "./cart";
import { useState } from "react";

const items = [
    {
        item: "PS5 Controller",
        price: 200,
        newPrice: 100,
        rating: "4.5/5",
        image: "/ps5.webp",
        markdown_perc: "50%"

    },
    {
        item: "Keyboard",
        price: 150,
        newPrice: 100,
        rating: "4.2/5",
        image: "/keyboard.jpg",
        markdown_perc: "33%"

    },
    {
        item: "Ultra wide Monitor",
        price: 800,
        newPrice: 600,
        rating: "4.9/5",
        image: "/monitorwide.avif",
        markdown_perc: "25%"

    }


]


export default function Page() {
    const [inputSearch, SetInputSearch] = useState("")

    const filteredItems = items.filter((item) =>
        item.item.toLowerCase().includes(inputSearch.toLowerCase())
    )

    return (
        <div>
            <div className="border-b border-gray-200"><Navbar onSearch={SetInputSearch}/>
            </div>
            <div className="flex md:flex-row flex-col-reverse">
                <main className="md:w-4/5 md:border-r border-gray-200 border-b">
                    <div><CategoryList/></div>
                    <div><Deals items={filteredItems}/></div>
                </main>
                <aside className="md:w-1/5"><Cart/></aside>

            </div>

        </div>
    );
}