import { getProducts } from "@/action/server/cart";
import CartItem from "@/components/cards/CartItem";
import React from "react";

const CartPage = async () => {

    const cart = await getProducts();
    console.log(cart);

    return (
        <div>
            <h2>Total products in cart: {cart.length}</h2>

            <div>
                <div>
                    {cart.map(item => <CartItem key={item._id.toString()} item={item}></CartItem>)}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
};

export default CartPage;