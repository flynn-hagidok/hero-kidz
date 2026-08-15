import { singleProduct } from "@/action/server/product";
import Image from "next/image";
import {
    FaCartPlus,
    FaStar,
} from "react-icons/fa";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const product = await singleProduct(id);
    console.log(product, id);

    return {
        title: product.title,
    };
};

const ProductDetailsCard = async ({ params }) => {

    const { id } = await params;
    // console.log(id);
    const product = await singleProduct(id);
    // console.log(product);

    const {
        title,
        bangla,
        image,
        price,
        description,
        reviews,
        ratings,
        qna
    } = product;

    return (
        <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Product Image */}
                <div className="relative min-h-[350px] bg-base-200 md:min-h-[500px]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Product Information */}
                <div className="flex flex-col p-6 md:p-8">

                    {/* Title */}
                    <h1 className="text-2xl font-bold leading-tight md:text-3xl">
                        {title}
                    </h1>

                    {/* Bangla Title */}
                    <p className="mt-2 text-base text-base-content/60">
                        {bangla}
                    </p>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-3">
                        <div className="flex items-center gap-1 text-yellow-500">
                            <FaStar />
                            <span className="font-semibold text-base-content">
                                {ratings}
                            </span>
                        </div>

                        <span className="text-sm text-base-content/60">
                            {reviews} Reviews
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-base-200" />

                    {/* Description */}
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">
                            Description
                        </h2>

                        <p className="line-clamp-6 whitespace-pre-line text-sm leading-6 text-base-content/70">
                            {description}
                        </p>
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                        <span className="text-sm text-base-content/60">
                            Price
                        </span>

                        <p className="mt-1 text-3xl font-bold text-primary">
                            ৳{price}
                        </p>
                    </div>

                    {/* Add to Cart */}
                    <div className="mt-auto pt-6">
                        <button className="btn btn-primary w-full gap-2">
                            <FaCartPlus size={18} />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="mt-8 p-4">
                <h3 className="font-semibold mb-3">Q & A</h3>
                <div className="space-y-3">
                    {
                        qna.map((item, i) => <div key={i} className="border rounded-lg p-3 space-y-2">
                            <p className="font-semibold">{item.question}</p>
                            <p>-{item.answer}</p>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsCard;