import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null)

const StorecontextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const addTocart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromcart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalCartAmount = () => {
        let totalamount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalamount += iteminfo.price * cartItems[item];
            }
        }
return totalamount;

    }
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addTocart,
        removeFromcart,
        getTotalCartAmount

    }

    return (
        <Storecontext.Provider value={contextValue}>
            {props.children}
        </Storecontext.Provider>
    )
}
export default StorecontextProvider