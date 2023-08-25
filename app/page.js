import Noise from "@/components/Noise";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Noise />
      <main className="w-100 h-screen p-10 flex items-center justify-center">
        <Image src="/folket.svg" alt="Folket" width={200} height={200} />
      </main>
    </>
  );
}
