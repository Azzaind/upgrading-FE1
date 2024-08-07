import Navbar from "@/components/navbar";
import Banner from "@/app/about/banner";
import Description from "@/app/about/descriptions";
import Laboratory from "@/app/about/laboratory";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Banner/>
      <Description/>
      <Laboratory/>

    </div>
  );
}
