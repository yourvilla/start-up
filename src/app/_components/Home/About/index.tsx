import { aboutData } from "@/app/_helpers/home";
import Text from "../../shared/Text";
import Image from "next/image";

export default function About() {
  return (
    <div className="p-10 pb-32 bg-slate-200 flex flex-col items-center">
      <Text className="text-center text-3xl font-semibold">
        About <span className="text-summerSky">Start-Up</span>
      </Text>
      <Text className="text-sm text-gray-700 w-1/2 text-center p-6">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here, content here, making it
        look like readable English. Many desktop publishing packages and web
        page editors now use Lorem Ipsum as their default model text, and a
        search for lorem ipsum will uncover many web sites still in their
        infancy.
      </Text>
      <div className="flex mt-12 w-2/3">
        {aboutData.map((data: { id: string; title: string; image: string,description:string }) => (
          <div className="w-full shadow-md p-5 mx-12 bg-white rounded-lg" key={data.id}>
            <Image src={data.image} width={300} height={300} alt={data.id} className="!h-60"/>
            <Text className="text-center text-summerSky font-semibold">
              {data.title}
            </Text>
            <Text className="text-center text-xs mt-5">
              {data.description}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
}
