"use client"

import { FaGoogle } from 'react-icons/fa';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const LoginForm = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);

        const result = await signIn("credentials", { email, password, redirect: false });
        console.log(result);
        if (!result.ok) {
            Swal.fire("Error", "Data doesn't matched", "error");
        } else {
            Swal.fire("Success", "Welcome to Hero Kidz", "success");
            router.push("/");
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Welcome Back!
                    </h2>

                    <p className="text-center text-base-content/60 mb-6">
                        Login to your account
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Email</span>
                            </label>

                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Password</span>
                            </label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Login Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Google Login */}
                    <button
                        type="button"
                        className="btn btn-outline w-full gap-2"
                    >
                        <FaGoogle />
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <p className="text-center mt-5 text-sm">
                        Don`t have an account?{" "}
                        <Link
                            href="/register"
                            className="text-primary font-semibold hover:underline"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;