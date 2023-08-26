import Noise from "@/components/Noise";
import { Socials } from "@/components/Socials";
import Image from "next/image";
import members from "@/static/members.json";
import MemberCard from "@/components/MemberCard";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen pt-20 gap-10 flex flex-col justify-start items-center overflow-y-scroll">
        <Image
          className="svg-glow"
          src="/folket.svg"
          alt="Folket"
          width={80}
          height={80}
        />
        <Socials />
        {Object.entries(members)?.map(([key, { name, role, img, socials }]) => {
          return (
            <MemberCard
              key={key}
              name={name}
              role={role}
              img={img}
              socials={socials}
            />
          );
        })}
      </main>
    </>
  );
}
