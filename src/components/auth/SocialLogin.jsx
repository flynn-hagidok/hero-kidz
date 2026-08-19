"use client"

import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const SocialLogin = () => {

    const params = useSearchParams();
    const router = useRouter();
    const callBack = params.get("callbackUrl") || "/";

    const handleSignIn = async () => {
        const result = await signIn("google",
            {
                redirect: false,
                callbackUrl: callBack
            });

        if (result.ok) {
            Swal.fire("Success", "Welcome", "success");
            router.push(callBack);
        } else {
            Swal.fire("Error", "Something is wrong", "error");
        };
    }

    return (
        <div className="flex gap-3">
            <button onClick={handleSignIn} className="btn btn-outline btn-error flex-1">
                <FaGoogle className="text-lg" /> Google
            </button>
        </div>
    );
};

export default SocialLogin;