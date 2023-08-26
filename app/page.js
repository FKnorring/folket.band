import Noise from "@/components/Noise";
import { Socials } from "@/components/Socials";
import Image from "next/image";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen pt-20 gap-10 flex flex-col justify-start items-center">
        <Image
          className="svg-glow"
          src="/folket.svg"
          alt="Folket"
          width={80}
          height={80}
        />
        <Socials />
      </main>
    </>
  );
}
