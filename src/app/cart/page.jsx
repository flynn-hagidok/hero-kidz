import { getProducts } from "@/action/server/cart";
import Cart from "@/components/home/Cart";
import React from "react";

const CartPage = async () => {

    const cart = await getProducts();
    const formattedItems = cart.map((item) => ({
        ...item,
        _id: item._id
    }))

    return (
        <div>
            <h2>Total products in cart: {cart.length}</h2>

            <div>
                <Cart cartItem={formattedItems}></Cart>
            </div>
        </div>
    )
};

export default CartPage;