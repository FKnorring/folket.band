"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import MemberCard from "./MemberCard"; // Import your MemberCard component
import VirtualizedList from "./VirtualizedList";

const Carousel = ({ members }) => {
  const n = members.length;
  return (
    <VirtualizedList>
      {({ index }) => {
        const offset = index % n;
        const memberIndex = offset < 0 ? n + offset : offset;
        const member = members[memberIndex];
        console.log(offset, index, memberIndex, member);
        return <MemberCard {...member} />;
      }}
    </VirtualizedList>
  );
};

export default Carousel;
