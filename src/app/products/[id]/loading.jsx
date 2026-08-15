const ProductDetailsSkeleton = () => {
    return (
        <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">

                {/* Image Skeleton */}
                <div className="skeleton min-h-[350px] rounded-none md:min-h-[500px]" />

                {/* Content Skeleton */}
                <div className="p-6 md:p-8">

                    {/* Title */}
                    <div className="skeleton h-8 w-4/5" />
                    <div className="skeleton mt-3 h-5 w-3/5" />

                    {/* Rating */}
                    <div className="mt-5 flex gap-3">
                        <div className="skeleton h-5 w-16" />
                        <div className="skeleton h-5 w-24" />
                    </div>

                    {/* Divider */}
                    <div className="my-5 border-t border-base-200" />

                    {/* Description heading */}
                    <div className="skeleton h-6 w-32" />

                    {/* Description */}
                    <div className="mt-3 space-y-2">
                        <div className="skeleton h-4 w-full" />
                        <div className="skeleton h-4 w-full" />
                        <div className="skeleton h-4 w-11/12" />
                        <div className="skeleton h-4 w-4/5" />
                        <div className="skeleton h-4 w-3/4" />
                    </div>

                    {/* Price */}
                    <div className="mt-6">
                        <div className="skeleton h-4 w-16" />
                        <div className="skeleton mt-2 h-9 w-28" />
                    </div>

                    {/* Button */}
                    <div className="skeleton mt-6 h-12 w-full rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsSkeleton;