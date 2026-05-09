"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  className,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50); // percent
  const [dragging, setDragging] = useState(false);
  const prefersReduced = useReducedMotion();

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!dragging) return;
      updatePosition(e.clientX);
    },
    [dragging, updatePosition]
  );

  const onPointerUp = () => setDragging(false);

  // Keyboard support
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden rounded-[var(--radius-hero)] select-none",
        "aspect-[3/2] cursor-col-resize",
        className
      )}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      aria-label="Before and after roof comparison slider"
    >
      {/* After image (full) */}
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 800px" />
      </div>

      {/* Labels */}
      <div
        className="absolute top-[var(--space-4)] left-[var(--space-4)] trust-chip pointer-events-none"
        aria-hidden="true"
      >
        {beforeLabel}
      </div>
      <div
        className="absolute top-[var(--space-4)] right-[var(--space-4)] trust-chip pointer-events-none"
        aria-hidden="true"
      >
        {afterLabel}
      </div>

      {/* Divider line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white/90 shadow-lg pointer-events-none"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      />

      {/* Drag handle */}
      <motion.button
        type="button"
        aria-label="Drag to compare before and after"
        aria-valuenow={Math.round(position)}
        aria-valuemin={0}
        aria-valuemax={100}
        role="slider"
        tabIndex={0}
        onPointerDown={onPointerDown}
        onKeyDown={onKeyDown}
        animate={
          !prefersReduced && !dragging
            ? { scale: [1, 1.1, 1] }
            : {}
        }
        transition={
          !prefersReduced
            ? { duration: 1.2, ease: "easeInOut", repeat: 0 }
            : {}
        }
        className={cn(
          "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
          "flex h-10 w-10 items-center justify-center rounded-full",
          "bg-white shadow-[var(--shadow-lg)] border-2 border-[var(--color-border)]",
          "focus-visible:outline-[3px] focus-visible:outline-[var(--color-focus-ring)] focus-visible:outline-offset-2",
          "cursor-col-resize"
        )}
        style={{ left: `${position}%` }}
      >
        <GripVertical size={18} strokeWidth={1.5} aria-hidden="true" className="text-[var(--color-text-muted)]" />
      </motion.button>
    </div>
  );
}
