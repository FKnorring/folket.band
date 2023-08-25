import Noise from "@/components/Noise";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen pt-20 flex justify-center items-start">
        <Image src="/folket.svg" alt="Folket" width={80} height={80} />
      </main>
    </>
  );
}
