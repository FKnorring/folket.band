import React from "react";
import { TbBrandInstagram, TbBrandSpotify, TbMail } from "react-icons/tb";

export const Socials = () => (
  <div className="flex items-center gap-10">
    <a
      role="button"
      href="https://www.instagram.com/folket.band/"
      target="_blank"
      aria-label="Folket Instagram"
    >
      <TbBrandSpotify className="svg-glow" size={32} role="button" />
    </a>
    <a
      role="button"
      href="https://www.instagram.com/folket.band/"
      target="_blank"
      aria-label="Folket Instagram"
    >
      <TbBrandInstagram className="svg-glow" size={32} role="button" />
    </a>
    <a
      role="button"
      href="mailto:folket@band.com"
      target="_blank"
      aria-label="Folket Mail"
    >
      <TbMail className="svg-glow" size={32} role="button" />
    </a>
  </div>
);
