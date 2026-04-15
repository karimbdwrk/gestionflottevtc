"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-xl font-bold tracking-tight text-foreground">
              DRIVE PRO
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="#forfaits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forfaits
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Comment ça marche
              </Link>
              <Link href="#reassurance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pourquoi nous
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" size="sm">
              Connexion
            </Button>
            <Button size="sm" asChild>
              <Link href="/inscription">Commencer</Link>
            </Button>
          </div>
          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link href="#forfaits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Forfaits
              </Link>
              <Link href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Comment ça marche
              </Link>
              <Link href="#reassurance" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Pourquoi nous
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm" className="justify-start">
                  Connexion
                </Button>
                <Button size="sm" asChild>
                  <Link href="/inscription">Commencer</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
