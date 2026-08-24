"use client"

import { useEffect, useState } from "react"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"
import { useReveal } from "@/hooks/use-reveal"

export function CountUp({
  to,
  suffix = "",
  duration = 1200,
  className,
}: {
  to: number
  suffix?: string
  duration?: number
  className?: string
}) {
  const { ref, isVisible } = useReveal<HTMLSpanElement>()
  const prefersReducedMotion = usePrefersReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible || prefersReducedMotion) return

    let start: number | null = null
    let frame: number

    function step(timestamp: number) {
      if (start === null) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) frame = requestAnimationFrame(step)
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isVisible, prefersReducedMotion, to, duration])

  const displayValue = prefersReducedMotion ? to : value

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  )
}
