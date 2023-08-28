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
        <div className="w-full h-full overflow-y-scroll flex flex-col gap-10 items-center text-white">
          <div className="min-h-screen flex flex-col items-center justify-center gap-20">
            <Image
              className="svg-glow"
              src="/folket.svg"
              alt="Folket"
              width={120}
              height={120}
            />
            <Socials />
          </div>

          <div className="mb-10" />
          <h1 className="text-center text-4xl mb-5 flex items-center gap-2 select-none">
            Vi är{" "}
            <span className="text-5xl font-semibold display italic svg-glow">
              FOLKET
            </span>
          </h1>
          <div className="w-full mb-40">
            <Carousel members={Object.values(members)} />
          </div>
        </div>
      </main>
    </>
  );
}
