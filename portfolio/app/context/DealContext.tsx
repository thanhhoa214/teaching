/* Steps in creating a useContext
    1. Create the context with createContext
    2. Use useState to manage shared state in the provider
    3. Wrap the app with the context
    4. Use useContext to access it in child components

    I create the DealsContext here
*/

import { createContext, useContext } from "react";

import type { ItemProps } from "../ecomm/Deals";

interface DealsContextType {
    items: ItemProps[],
}

export const DealsContext = createContext<DealsContextType | null>(null);

export const useDealContext = () => {
    const context = useContext(DealsContext);
    if (!context) {
        throw new Error("useDealContext must be used within DealContext.Provider");
    }
    return context
}