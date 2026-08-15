

const ProductCardSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">

            {/* Image skeleton */}
            <div className="skeleton h-64 w-full" />

            <div className="p-5">

                {/* Title */}
                <div className="skeleton h-5 w-4/5" />
                <div className="skeleton mt-2 h-5 w-3/5" />

                {/* Rating */}
                <div className="mt-4 flex gap-2">
                    <div className="skeleton h-4 w-12" />
                    <div className="skeleton h-4 w-24" />
                </div>

                {/* Sold */}
                <div className="skeleton mt-3 h-4 w-20" />

                {/* Price + button */}
                <div className="mt-5 flex items-center justify-between">
                    <div className="skeleton h-8 w-24" />
                    <div className="skeleton h-9 w-20 rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default ProductCardSkeleton;