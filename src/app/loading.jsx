import Logo from "@/components/layouts/Logo";

const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-5 min-h-screen">
            <h2 className="text-5xl font-bold animate-pulse">Loading</h2>
            <div>
                <Logo className="animate-ping"></Logo>
            </div>
        </div>
    );
};

export default Loading;