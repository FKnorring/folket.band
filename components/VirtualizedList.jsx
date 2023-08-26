"use client";

import React, { useMemo, useState, useRef, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";

const range = [-1, 0, 1];

function ListItem({ index, x, renderItem, onDragEnd }) {
  const child = useMemo(() => renderItem({ index }), [index, renderItem]);

  return (
    <motion.div
      style={{
        x,
        left: `${index * 100}%`,
        right: `${index * 100}%`,
      }}
      className="absolute h-full"
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
  const ref = useRef(null);
  const x = useMotionValue(0);
  const transition = { type: "spring", stiffness: 300, damping: 30 };

  const getNewX = () => -index * (ref.current?.clientWidth || 0);

  const onDragEnd = (e, dragProps) => {
    const cWidth = ref.current?.clientWidth || 0;

    const { offset, velocity } = dragProps;

    if (Math.abs(velocity.y) > Math.abs(velocity.x)) {
      animate(x, getNewX(), transition);
      return;
    }

    if (offset.x > cWidth / 2) {
      setI(index - 1);
    } else if (offset.x < -cWidth / 2) {
      setI(index + 1);
    } else {
      animate(x, getNewX(), transition);
    }
  };

  useEffect(() => {
    const controls = animate(x, getNewX(), transition);
    return () => controls.stop();
  }, [index]);

  return (
    <motion.div ref={ref} className="relative w-full h-full overflow-x-hidden">
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
