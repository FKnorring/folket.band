import Noise from "@/components/Noise";
import { Socials } from "@/components/Socials";
import Image from "next/image";
import members from "@/static/members.json";
import MemberCard from "@/components/MemberCard";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen pt-20 gap-10 flex flex-col justify-start items-center overflow-y-scroll scroll-smooth overflow-x-hidden">
        <Image
          className="svg-glow"
          src="/folket.svg"
          alt="Folket"
          width={80}
          height={80}
        />
        <Socials />
        <Carousel members={Object.values(members)} />
      </main>
    </>
  );
}
