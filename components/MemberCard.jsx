"use client";

import Image from "next/image";
import React from "react";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";
import { motion } from "framer-motion";

function MemberCard({ name, role, img, socials }) {
  return (
    <motion.div className="flex rounded p-4 gap-2">
      <Image
        draggable={false}
        src={`/${img}`}
        alt={name}
        height={200}
        width={200}
        style={{ objectFit: "cover" }}
        className="h-[200px] w-auto aspect-square rounded-xl"
      />
      <div className="flex flex-col">
        <p className="text-lg font-semibold truncate">{name}</p>
        <p>{role}</p>
        <div className="flex gap-2 mt-auto">
          {socials.instagram && (
            <a role="button" className="svg-glow">
              <TbBrandInstagram size={24} />
            </a>
          )}
          {socials.email && (
            <a role="button" className="svg-glow">
              <TbMail size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default MemberCard;
