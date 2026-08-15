import { FaStar, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ProductCards = ({ product }) => {
    const {
        _id,
        title,
        image,
        price,
        reviews,
        sold,
        ratings,
    } = product;

    return (
        <div className="group overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            {/* Image */}
            <Link href={`/products/${_id}`}>
                <div className="relative h-64 overflow-hidden bg-base-200">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>

            {/* Content */}
            <div className="p-5">

                {/* Title */}
                <h2 className="line-clamp-2 text-lg font-semibold text-base-content transition hover:text-primary">
                    {title}
                </h2>


                {/* Rating & Reviews */}
                <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-yellow-500">
                        <FaStar size={14} />
                        <span className="text-sm font-semibold text-base-content">
                            {ratings}
                        </span>
                    </div>

                    <span className="text-sm text-base-content/60">
                        ({reviews} reviews)
                    </span>
                </div>

                {/* Sold */}
                <div className="mt-2 text-sm text-base-content/60">
                    {sold} sold
                </div>

                {/* Price */}
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-primary">
                        ৳{price.toLocaleString()}
                    </p>

                    <button className="btn btn-primary btn-sm gap-2">
                        <FaShoppingCart />
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCards;