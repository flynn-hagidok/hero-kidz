"use client"

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

const CartButtons = ({ product }) => {

    const pathname = usePathname();
    const session = useSession();
    const router = useRouter();

    const add2Cart = () => {
        if (session.status === "authenticated") {
            alert(product._id);
        } else {
            router.push(`/login?callbackUrl=${pathname}`)
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