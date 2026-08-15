"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const NavLinks = ({ children, href }) => {

    const path = usePathname();
    const isActive = path === href;

    return (
        <Link href={href} className={`${isActive && "text-primary"} font-semibold`}>{children}</Link>
    );
};

export default NavLinks;