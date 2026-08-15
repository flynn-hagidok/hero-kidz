import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} md:text-7xl font-semibold md:leading-20`}>আপনার শিশুকে দিন একটি <span className='text-primary'>সুন্দর ভবিষ্যৎ</span></h2>
                <p>Buy every products up to 15% discount</p>
                <button className='btn btn-outline btn-primary'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image
                    src={"/assets/hero.png"}
                    alt="hero image"
                    width={700}
                    height={500}
                />
            </div>
        </div>
    );
};

export default Banner;