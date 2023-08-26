import Noise from "@/components/Noise";
import Image from "next/image";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen pt-20 gap-10 flex flex-col justify-start items-center">
        <Image src="/folket.svg" alt="Folket" width={80} height={80} />
        <div className="flex gap-10">
          <TbBrandSpotify size={32} role="button" />
          <a
            role="button"
            href="https://www.instagram.com/folket.band/"
            target="_blank"
            aria-label="Folket Instagram"
          >
            <TbBrandInstagram size={32} role="button" />
          </a>
        </div>
      </main>
    </>
  );
}
