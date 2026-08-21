"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaLock, FaShieldAlt } from "react-icons/fa";
import CartItem from "../cards/CartItem";

const Cart = ({ cartItem = [] }) => {
    const [items, setItems] = useState(cartItem);

    // Total quantity
    const totalItems = useMemo(
        () =>
            items.reduce(
                (sum, item) => sum + Number(item.quantity || 0),
                0
            ),
        [items]
    );

    // Total product price
    const subtotal = useMemo(
        () =>
            items.reduce(
                (sum, item) =>
                    sum +
                    Number(item.price || 0) *
                    Number(item.quantity || 0),
                0
            ),
        [items]
    );

    // Shipping
    const shipping = subtotal > 0 ? 100 : 0;

    // Discount
    const discount = 0;

    // Final total
    const total = subtotal + shipping - discount;

    // Remove item
    const removeItem = (id) => {
        setItems((prevItems) =>
            prevItems.filter((item) => item._id !== id)
        );
    };

    // Update quantity
    const updateQantity = (id, quantity) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item._id === id
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    return (
        <section className="py-8 md:py-12">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Shopping Cart
                    </h1>

                    <p className="text-sm text-base-content/60 mt-1">
                        Review your items and proceed to checkout.
                    </p>
                </div>

                {items.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* ================= CART ITEMS ================= */}
                        <div className="lg:col-span-2">

                            {/* Cart Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="font-semibold text-lg">
                                    Your Items
                                </h2>

                                <span className="badge badge-neutral">
                                    {totalItems}{" "}
                                    {totalItems === 1 ? "Item" : "Items"}
                                </span>
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {items.map((item) => (
                                    <CartItem
                                        key={item._id.toString()}
                                        item={item}
                                        removeItem={removeItem}
                                        updateQantity={updateQantity}
                                    />
                                ))}
                            </div>

                            {/* Continue Shopping */}
                            <div className="mt-6">
                                <Link
                                    href="/products"
                                    className="btn btn-ghost gap-2"
                                >
                                    <FaArrowLeft />
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>

                        {/* ================= SUMMARY ================= */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-6">

                                <div className="card bg-base-100 border border-base-300 shadow-sm">
                                    <div className="card-body">

                                        {/* Title */}
                                        <h2 className="text-xl font-bold">
                                            Order Summary
                                        </h2>

                                        <div className="divider my-1" />

                                        {/* Price Details */}
                                        <div className="space-y-4">

                                            <div className="flex justify-between text-sm">
                                                <span className="text-base-content/70">
                                                    Subtotal ({totalItems}{" "}
                                                    {totalItems === 1
                                                        ? "item"
                                                        : "items"})
                                                </span>

                                                <span className="font-medium">
                                                    ৳{subtotal.toLocaleString()}
                                                </span>
                                            </div>

                                            <div className="flex justify-between text-sm">
                                                <span className="text-base-content/70">
                                                    Shipping
                                                </span>

                                                <span className="font-medium">
                                                    ৳{shipping.toLocaleString()}
                                                </span>
                                            </div>

                                            <div className="flex justify-between text-sm">
                                                <span className="text-base-content/70">
                                                    Discount
                                                </span>

                                                <span className="font-medium text-success">
                                                    -৳{discount.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="divider my-2" />

                                        {/* Total */}
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold">
                                                Total
                                            </span>

                                            <span className="text-2xl font-bold text-primary">
                                                ৳{total.toLocaleString()}
                                            </span>
                                        </div>

                                        {/* Checkout */}
                                        <button className="btn btn-primary w-full mt-5">
                                            Proceed to Checkout
                                        </button>

                                        {/* Security */}
                                        <div className="mt-5 space-y-3 text-xs text-base-content/60">

                                            <div className="flex items-center gap-2">
                                                <FaLock className="text-success" />
                                                <span>
                                                    Secure checkout
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2">
                                                <FaShieldAlt className="text-success" />
                                                <span>
                                                    Your payment information is protected
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Free Shipping Notice */}
                                {subtotal < 2000 && (
                                    <div className="alert mt-4">
                                        <div>
                                            <p className="font-medium text-sm">
                                                Add ৳
                                                {(
                                                    2000 - subtotal
                                                ).toLocaleString()}{" "}
                                                more to get free shipping.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </aside>
                    </div>
                ) : (
                    /* ================= EMPTY CART ================= */
                    <div className="min-h-[400px] flex flex-col items-center justify-center border border-base-300 rounded-2xl bg-base-100">
                        <div className="text-center px-4">

                            <div className="text-6xl mb-4">
                                🛒
                            </div>

                            <h2 className="text-2xl font-bold">
                                Your cart is empty
                            </h2>

                            <p className="text-base-content/60 mt-2 max-w-md">
                                Looks like you have not added anything
                                to your cart yet.
                            </p>

                            <Link
                                href="/products"
                                className="btn btn-primary mt-6"
                            >
                                Start Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Cart;