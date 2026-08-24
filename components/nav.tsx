"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp"
import { DEMO_URL } from "@/lib/demo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet"

const links = [
  { href: "#problema", label: "El problema" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
]

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-heading text-base font-bold text-foreground">
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 2h12v16l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5V2z" />
          <path d="M9 7h6M9 10h6M9 13h4" />
        </svg>
      </span>
      Comandium
    </a>
  )
}

export function Nav() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md transition-shadow duration-300",
        scrolled && "shadow-lg shadow-black/20"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground after:absolute after:-bottom-1 after:left-1/2 after:h-px after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              Ver demo
            </a>
          </li>
          <li>
            <Button asChild>
              <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                Solicita una demo
              </a>
            </Button>
          </li>
        </ul>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden" aria-label="Abrir menú">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card text-card-foreground">
            <SheetHeader>
              <SheetTitle className="text-card-foreground">Comandium</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <li key={link.href}>
                  <SheetClose asChild>
                    <a
                      href={link.href}
                      className="block rounded-md px-2 py-3 text-base font-medium text-card-foreground/80 transition-colors duration-300 hover:bg-card-foreground/5 hover:text-card-foreground"
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
              <li className="pt-2">
                <SheetClose asChild>
                  <Button variant="outline" asChild className="w-full">
                    <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                      Ver demo
                    </a>
                  </Button>
                </SheetClose>
              </li>
              <li className="pt-2">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                      Solicita una demo
                    </a>
                  </Button>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
