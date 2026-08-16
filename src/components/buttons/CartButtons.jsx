"use client"

import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButtons = ({ product }) => {

    const pathname = usePathname();
    const router = useRouter();
    const isLogin = false;

    const add2Cart = () => {
        if (isLogin) {
            alert(product._id);
        }else{
            router.push(`/auth/login?callbacks=${pathname}`)
        }
    };

    return (
        <button onClick={add2Cart} className="btn btn-primary w-full gap-2">
            <FaCartPlus size={18} />
            Add to Cart
        </button>
    );
};

export default CartButtons;