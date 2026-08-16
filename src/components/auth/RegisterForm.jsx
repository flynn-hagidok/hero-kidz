"use client"

import { postUser } from '@/action/server/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const RegisterForm = () => {

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = {
            name, email, password
        };

        const result = await postUser(newUser);
        if (result.acknowledged) {
            alert("successful. please login");
            router.push("/login");
        }
    };

    const handleGoogle = () => {
        alert("No Bro!")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center mb-2">
                        Create Account
                    </h2>

                    <p className="text-center text-base-content/60 mb-6">
                        Register a new account
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Name</span>
                            </label>

                            <input
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

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
                                placeholder="Create a password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>

                        {/* Register Button */}
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider">OR</div>

                    {/* Google Register */}
                    <button
                        onClick={handleGoogle}
                        type="button"
                        className="btn btn-outline w-full gap-2"
                    >
                        <FaGoogle />
                        Continue with Google
                    </button>

                    {/* Login Link */}
                    <p className="text-center mt-5 text-sm">
                        Already have an account?{" "}
                        <Link
                            href="/login"
                            className="text-primary font-semibold hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;