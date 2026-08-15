import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";

const CartSkeleton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                [...Array(9)].map((_, index) => <ProductCardSkeleton key={index}></ProductCardSkeleton>)
            }
        </div>
    )
};

export default CartSkeleton;