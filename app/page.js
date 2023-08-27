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
        <div className="w-full h-full overflow-y-scroll py-20 flex flex-col gap-10 items-center text-white">
          <Image
            className="svg-glow"
            src="/folket.svg"
            alt="Folket"
            width={80}
            height={80}
          />
          <Socials />
          <div className="mb-10" />
          <div className="max-w-[1200px]">
            <ContactForm />
          </div>
          <div className="mb-10" />
          <h1 className="text-center text-4xl mb-5 flex items-center gap-2 select-none">
            Vi är{" "}
            <span className="text-5xl font-semibold display italic svg-glow">
              FOLKET
            </span>
          </h1>
          <div className="w-full">
            <Carousel members={Object.values(members)} />
          </div>
        </div>
      </main>
    </>
  );
}
