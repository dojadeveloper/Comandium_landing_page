"use client"

import { useEffect, useRef, useState } from "react"

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion"

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const [observedVisible, setObservedVisible] = useState(false)

  useEffect(() => {
    if (prefersReducedMotion) return

    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setObservedVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReducedMotion])

  return { ref, isVisible: prefersReducedMotion || observedVisible }
}
