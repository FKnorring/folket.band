"use client";

import Image from "next/image";
import React from "react";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";
import { motion } from "framer-motion";

function MemberCard({ name, role, img, socials }) {
  return (
    <motion.div className="flex rounded-2xl p-0 bg-black bg-opacity-50 border-r border-t border-zinc-800">
      <Image
        draggable={false}
        src={`/${img}`}
        alt={name}
        height={240}
        width={240}
        style={{ objectFit: "cover" }}
        className="h-[240px] w-auto aspect-square rounded-s-2xl border-r border-zinc-800"
      />
      <div className="flex flex-col gap-2 p-8">
        <p className="text-lg font-semibold m-0">{name}</p>
        <p className="m-0">{role}</p>
        <div className="flex gap-2 mt-auto">
          {socials.instagram && (
            <a
              role="button"
              href={`https://www.instagram.com/${socials.instagram}`}
              target="_blank"
              className="svg-glow"
            >
              <TbBrandInstagram size={24} />
            </a>
          )}
          {socials.email && (
            <a
              role="button"
              href={`mailto:${socials.email}`}
              target="_blank"
              className="svg-glow"
            >
              <TbMail size={24} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default MemberCard;
