import type React from "react"

import { useState, useRef } from "react"

export default function AnimatedButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <button
      ref={buttonRef}
      className="relative z-[1] flex items-center justify-center min-w-[225px] min-h-[48px] bg-[#1fbfff] text-white font-medium transition-all duration-300 ease-linear overflow-hidden outline-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      Hover and Click Me
      <span
        className={`absolute left-0 top-0 rounded-[100rem] bg-[#549935] -z-[1] transition-[width,height] duration-700 ease-in-out ${
          isHovered ? "w-[750px] h-[750px]" : "w-0 h-0"
        }`}
        style={{
          transform: `translate(-50%, -50%)`,
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      ></span>
    </button>
  )
}

