import Products from "@/components/home/Products";

export const metadata = {

    title: "All Products",

    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://hero-kidz-nine-lilac.vercel.app",
        siteName: "Hero Kidz",
        title: "Hero Kidz | Educational Toys for Kids",
        description:
            "Discover educational toys, learning boards, puzzles, and fun learning products for children at Hero C Kidz.",
        images: [
            {
                url: "https://i.ibb.co.com/HTT3QVZ9/Screenshot-2026-08-16-005438.png",
                width: 1200,
                height: 630,
                alt: "Hero Kidz - Educational Toys for Kids",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Hero Kidz | Educational Toys for Kids",
        description:
            "Discover educational toys, learning boards, puzzles, and fun learning products for children.",
        images: ["https://i.ibb.co.com/HTT3QVZ9/Screenshot-2026-08-16-005438.png"],
    },
};

const Product = () => {
    return (
        <div>
            <Products></Products>
        </div>
    )
};

export default Product;