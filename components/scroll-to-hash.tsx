"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToHash() {
  const pathname = usePathname()

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    // Petit délai pour laisser le DOM se rendre
    const id = setTimeout(() => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }, 100)

    return () => clearTimeout(id)
  }, [pathname])

  return null
}
