import Banner from "@/app/_components/Home/Banner";
import Offer from "@/app/_components/Home/About";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="text-3xl flex">
        <div className="w-1/2 bg-zinc-800 p-32">
          <Banner />
        </div>
        <div className="w-1/2">
          <Image src="/banner.jpg" alt="banner" width={1100} height={5000} />
        </div>
      </div>
      <Offer />
    </>
  );
}
