'use client'
import { useEffect, useState } from 'react'

interface Star {
  id: number
  x: number
  y: number
  size: number
  delay: number
  duration: number
}

export default function StarField() {
  const [stars, setStars] = useState<Star[]>([])

  useEffect(() => {
    setStars(
      Array.from({ length: 200 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: i < 170 ? 1 : 2,
        delay: Math.random() * 6,
        duration: 2.5 + Math.random() * 4,
      }))
    )
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, overflow: 'hidden',
      pointerEvents: 'none', zIndex: 0,
    }}>
      {stars.map(star => (
        <div key={star.id} style={{
          position: 'absolute',
          left: `${star.x}%`,
          top: `${star.y}%`,
          width: `${star.size}px`,
          height: `${star.size}px`,
          borderRadius: '50%',
          backgroundColor: '#ffffff',
          animation: `twinkle ${star.duration}s ${star.delay}s infinite ease-in-out`,
        }}/>
      ))}
    </div>
  )
}