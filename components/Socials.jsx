import React from "react";
import {
  TbBrandInstagram,
  TbBrandSpotify,
  TbBrandYoutube,
  TbMail,
} from "react-icons/tb";

export const Socials = () => (
  <div className="flex items-center gap-10">
    <a
      role="button"
      href="https://open.spotify.com/artist/4Ouwq9KjnPW9gjPn2BW76a?si=JlYlPbklRI-AHZSyOULNQw"
      target="_blank"
      aria-label="Folket Spotify"
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
      href="https://www.youtube.com/watch?v=ZAeSO3bHbiI"
      target="_blank"
      aria-label="Folket Youtube"
    >
      <TbBrandYoutube className="svg-glow" size={32} role="button" />
    </a>
    <a
      role="button"
      href="mailto:folket.mgmt@gmail.com"
      target="_blank"
      aria-label="Folket Mail"
    >
      <TbMail className="svg-glow" size={32} role="button" />
    </a>
  </div>
);
