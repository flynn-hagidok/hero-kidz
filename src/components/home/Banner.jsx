import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl font-semibold'>আপনার শিশুকে দিন একটি সুন্দর ভবিষ্যৎ</h2>
                <p>Buy every products up to 15% discount</p>
                <button className='btn btn-outline btn-primary'></button>
            </div>
            <div>
                <Image
                    src={"/assets/hero.png"}
                    alt="hero image"
                    width={500}
                    height={400}
                />
            </div>
        </div>
    );
};

export default Banner;