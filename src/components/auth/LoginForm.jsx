"use client"

import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const LoginForm = () => {
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

                    <form className="space-y-4">
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
                            href="/auth/register"
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