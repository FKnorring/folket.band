"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const range = [-3, -2, -1, 0, 1, 2, 3];
const autoScrollInterval = 6000;
const reEnableScrollTimeout = 2000;
const elemWidth = 480;
const margin = 8;
const totalWidth = elemWidth + margin * 2;

function ListItem({ index, x, renderItem, onDragEnd }) {
  const child = useMemo(() => renderItem({ index }), [index, renderItem]);

  return (
    <motion.div
      style={{
        x,
        left: `${index * totalWidth}px`,
        right: `${index * totalWidth}px`,
        width: `${elemWidth}px`,
      }}
      className="absolute"
      drag="x"
      dragElastic={1}
      draggable
      onDragEnd={onDragEnd}
    >
      {child}
    </motion.div>
  );
}

function VirtualizedList({ children }) {
  const [index, setI] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const ref = useRef(null);
  const x = useMotionValue(0);
  const transition = { type: "spring", stiffness: 300, damping: 60 };

  const getNewX = () => -index * totalWidth;

  const onDragEnd = (e, dragProps) => {
    const cWidth = totalWidth;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, getNewX(), transition);
      return;
    }

    if (offset.x > cWidth / 4) {
      setI(index - 1);
    } else if (offset.x < -cWidth / 4) {
      setI(index + 1);
    } else {
      animate(x, getNewX(), transition);
    }

    setAutoScroll(false);
    setTimeout(() => setAutoScroll(true), reEnableScrollTimeout);
  };

  useEffect(() => {
    const controls = animate(x, getNewX(), transition);
    return () => controls.stop();
  }, [index]);

  useEffect(() => {
    let intervalId;

    if (autoScroll) {
      // Set the interval only if autoScroll is true
      intervalId = setInterval(() => {
        setI((prevI) => prevI + 1);
      }, autoScrollInterval); // Change index every 3 seconds
    }

    // Cleanup interval on unmount or if autoScroll becomes false
    return () => clearInterval(intervalId);
  }, [autoScroll]);

  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[230px] overflow-hidden bg-black bg-opacity-5"
      onMouseEnter={() => setAutoScroll(false)}
      onMouseLeave={() => setAutoScroll(true)}
    >
      {range.map((rVal) => (
        <ListItem
          key={index + rVal}
          index={index + rVal}
          renderItem={children}
          x={x}
          onDragEnd={onDragEnd}
        />
      ))}
    </motion.div>
  );
}

export default VirtualizedList;
