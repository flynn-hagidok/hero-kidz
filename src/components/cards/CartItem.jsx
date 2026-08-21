"use client";

import { decreaseItems, deleteItem, increaseItems } from "@/action/server/cart";
import Image from "next/image";
import { useState } from "react";
import {
    FaMinus,
    FaPlus,
    FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, updateQantity, removeItem }) => {
    const { _id, product_image, title, price, quantity } = item;
    const [loading, setLoading] = useState(false);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const result = await deleteItem(id);
                if (result.success) {
                    removeItem(id);
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your item has been deleted.",
                        icon: "success"
                    });
                } else {
                    Swal.fire({
                        title: "Opps!",
                        text: "Something is happened wrong.",
                        icon: "error"
                    });
                }
            }
        });
    };

    const onIncrease = async () => {
        setLoading(true);
        const result = await increaseItems(_id, quantity);
        if (result.success) {
            Swal.fire("Success", "Item increase", "success");
            updateQantity(_id, quantity + 1)
        }
        setLoading(false);
    };

    const onDecrease = async () => {
        setLoading(true);
        const result = await decreaseItems(_id, quantity);
        if (result.success) {
            Swal.fire("Success", "Item decrease", "success");
            updateQantity(_id, quantity - 1)
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-base-100 border border-base-300 rounded-xl shadow-sm">

            {/* Product Image */}
            <div className="relative w-24 h-24 shrink-0">
                <Image
                    src={product_image}
                    alt={title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="96px"
                />
            </div>

            {/* Product Info */}
            <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-base sm:text-lg line-clamp-2">
                    {title}
                </h3>

                <p className="mt-1 font-bold text-primary">
                    ৳{price}
                </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center border border-base-300 rounded-lg">
                <button
                    onClick={() => onDecrease(item)}
                    disabled={quantity <= 1 || loading}
                    className="btn btn-ghost btn-sm rounded-r-none"
                >
                    <FaMinus />
                </button>

                <span className="px-4 font-semibold">
                    {quantity}
                </span>

                <button
                    onClick={() => onIncrease(_id)}
                    disabled={quantity >= 10 || loading}
                    className="btn btn-ghost btn-sm rounded-l-none"
                >
                    <FaPlus />
                </button>
            </div>

            {/* Remove */}
            <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error btn-sm btn-outline"
                title="Remove item"
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default CartItem;