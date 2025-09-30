"use client"

import { useEffect, useState } from "react"

interface Trail {
  x: number
  y: number
  id: number
}

export function CursorTrail() {
  const [trails, setTrails] = useState<Trail[]>([])

  useEffect(() => {
    let trailId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
      }

      setTrails((prev) => [...prev.slice(-15), newTrail])
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTrails((prev) => prev.slice(1))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trails.map((trail, idx) => (
        <div
          key={trail.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: trail.x,
            top: trail.y,
            background: `radial-gradient(circle, rgba(0, 201, 167, ${0.6 - idx * 0.04}) 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.3s ease-out",
            opacity: 1 - idx * 0.06,
          }}
        />
      ))}
    </div>
  )
}
