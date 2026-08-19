import Products from "@/components/home/Products";
import { authOptions } from "@/lib/authOptions";
import Banner from "@/components/home/Banner";
import { getServerSession } from "next-auth";
import Text from "@/components/Text";

export default async function Home() {

  const session = await getServerSession(authOptions);

  return (
    <div className="md:space-y-30">
      <Text></Text>
      <p>{JSON.stringify(session)}</p>
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
