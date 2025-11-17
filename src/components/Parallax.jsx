import React, { useEffect, useRef } from 'react'

export default function Parallax({ children, speed = 0.2, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleScroll = () => {
      const y = window.scrollY * speed
      el.style.transform = `translate3d(0, ${y}px, 0)`
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  )
}
