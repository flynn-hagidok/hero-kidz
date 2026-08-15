import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
    return (
        <Link href={"/"} className="flex gap-4 items-center">
            <Image
                src={"/assets/logo.png"}
                alt="hero-kidz-log"
                width={50}
                height={30}
            />
            <h2 className="text-xl font-semibold">Hero <span className='text-primary'>Kidz</span></h2>
        </Link>
    );
};

export default Logo;