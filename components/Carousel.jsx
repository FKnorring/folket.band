"use client";

import React from "react";
import MemberCard from "./MemberCard";
import VirtualizedList from "./VirtualizedList";

const Carousel = ({ members }) => {
  const n = members.length;
  return (
    <VirtualizedList>
      {({ index }) => {
        const offset = index % n;
        const memberIndex = offset < 0 ? n + offset : offset;
        const member = members[memberIndex];
        return <MemberCard {...member} />;
      }}
    </VirtualizedList>
  );
};

export default Carousel;
