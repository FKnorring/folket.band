import Image from "next/image";
import React from "react";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";

function MemberCard({ name, role, img, socials }) {
  return (
    <div className="flex bg-black bg-opacity-10 p-4">
      <Image src={`/${img}`} alt={name} width={200} height={200} />
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">{name}</p>
        <p>{role}</p>
        <div className="flex gap-2 mt-auto">
          {socials.instagram && (
            <a>
              <TbBrandInstagram size={24} />
            </a>
          )}
          {socials.email && (
            <a>
              <TbMail size={24} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default MemberCard;
