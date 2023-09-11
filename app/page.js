import Noise from "@/components/Noise";
import { Socials } from "@/components/Socials";
import Image from "next/image";
import members from "@/static/members.json";
import MemberCard from "@/components/MemberCard";
import Carousel from "@/components/Carousel";

import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-full h-screen">
        <div className="w-full h-full overflow-hidden flex flex-col gap-10 items-center text-white">
          <div className="min-h-[100dvh] flex flex-col items-center justify-center gap-20">
            <Image
              className="svg-glow"
              src="/folket.svg"
              alt="Folket"
              width={120}
              height={120}
            />
            <Socials />
          </div>
        </div>
      </main>
    </>
  );
}
