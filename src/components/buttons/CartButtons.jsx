"use client"

import { handleCart } from '@/action/server/cart';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const CartButtons = ({ product }) => {

    const [isLoading, setIsLoading] = useState(false);
    const pathname = usePathname();
    const session = useSession();
    const router = useRouter();

    const add2Cart = async () => {
        setIsLoading(true);
        if (session.status === "authenticated") {
            const result = await handleCart({ product, inc: true });
            if (result.success) {
                Swal.fire("Success", product?.title, "success");
            } else {
                Swal.fire("Oops", "something happend wrong", "error")
            }
            setIsLoading(false);
        } else {
            router.push(`/login?callbackUrl=${pathname}`);
            setIsLoading(false);
        }
    };

    return (
        <button onClick={add2Cart}
            disabled={session.status == "loading" || isLoading}
            className="btn btn-primary w-full gap-2">
            <FaCartPlus size={18} />
            Add to Cart
        </button>
    );
};

export default CartButtons;