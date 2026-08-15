import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <button className="btn btn-warning text-bold text-xl">Click Me!</button>
    </div>
  );
}
