import React from 'react';
// import products from '@/data/toys.json'
import ProductCards from '../cards/ProductCards';
import { getProduct } from '@/action/server/product';

const Products = async () => {

    const products = (await getProduct()) || [];

    return (
        <div className='space-y-10'>
            <h2 className='font-semibold text-center text-4xl'>Our Products</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {
                    products.map(product => <ProductCards key={product.title} product={product}></ProductCards>)
                }
            </div>
        </div>
    );
};

export default Products; 