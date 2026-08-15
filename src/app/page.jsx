import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="space-y-10">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
