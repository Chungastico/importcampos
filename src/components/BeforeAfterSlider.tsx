"use client";

import { useRef, useState, useCallback } from "react";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeLabel?: string;
  afterLabel?: string;
  title: string;
  description?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = "Antes",
  afterLabel = "Después",
  title,
  description,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseDown = () => {
    dragging.current = true;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (dragging.current) updatePosition(e.clientX);
  };
  const onMouseUp = () => {
    dragging.current = false;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="group">
      {/* Slider */}
      <div
        ref={containerRef}
        className="relative aspect-video rounded-lg overflow-hidden cursor-col-resize select-none"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchMove={onTouchMove}
      >
        {/* After (full width background) */}
        <img
          src={afterSrc}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeSrc}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ width: `${(100 / position) * 100}%`, maxWidth: "none" }}
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-[#BF1725] z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 bg-[#BF1725] rounded-full border-2 border-[#F2F2F2] flex items-center justify-center shadow-lg">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <path d="M6 1L1 7L6 13" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 1L19 7L14 13" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 bg-[#0D0D0D]/70 text-[#F2F2F2] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
          {beforeLabel}
        </span>
        <span className="absolute top-3 right-3 bg-[#BF1725]/90 text-[#F2F2F2] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded">
          {afterLabel}
        </span>
      </div>

      {/* Card info */}
      <div className="mt-4 px-1">
        <h3 className="text-[#F2F2F2] font-bold text-lg">{title}</h3>
        {description && (
          <p className="text-[#8C8C8C] text-sm mt-1">{description}</p>
        )}
      </div>
    </div>
  );
}
