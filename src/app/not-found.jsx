import Link from "next/link";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <BiSolidErrorAlt size={200} className="text-primary" />
            <h2 className="text-4xl font-bold">Page Not Found</h2>
            <Link href={"/"} className="btn btn-primary">Go Home</Link>
        </div>
    );
};

export default Error404;