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
        <div className="mb-10" />
        <h1 className="text-center text-4xl mb-5 flex items-center gap-2 select-none">
          Vi är{" "}
          <span className="text-5xl font-semibold display italic svg-glow">
            FOLKET
          </span>
        </h1>
        <Carousel members={Object.values(members)} />
      </main>
    </>
  );
}
