import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/reveal"
import { Ticket } from "@/components/ticket"
import { CountUp } from "@/components/count-up"
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp"
import { DEMO_URL } from "@/lib/demo"

const stats = [
  { to: 184, suffix: "", label: "Órdenes hoy" },
  { to: 9, suffix: " min", label: "Tiempo cocina" },
  { to: 3, suffix: "", label: "Terminales" },
]

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 pt-16 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:pt-24">
        <Reveal>
          <div className="mb-6 flex items-center gap-2 font-mono text-xs tracking-widest text-primary uppercase">
            <span className="h-px w-8 bg-primary" />
            Hecho para restaurantes mexicanos
          </div>

          <h1 className="max-w-xl font-heading text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.05] font-bold text-foreground">
            Tu restaurante, <span className="text-primary">sin comandas de papel</span> ni sorpresas en caja.
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Comandium conecta menú, cocina, cobro y reportes en un solo sistema. Menos errores en las órdenes, cobros con trazabilidad por terminal, y datos reales para decidir qué platillos mueven tu negocio.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button size="lg" className="h-11 px-6 text-[0.95rem]" asChild>
              <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                Solicita una demo
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-11 px-6 text-[0.95rem]" asChild>
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Ver demo en vivo
              </a>
            </Button>
          </div>

          <p className="mt-9 text-sm text-muted-foreground">
            <strong className="font-semibold text-foreground">Deli&apos;s</strong>, Puebla — primer restaurante operando con Comandium.
          </p>
        </Reveal>

        <Reveal
          className="relative flex justify-center lg:justify-end"
          style={{ transitionDelay: "150ms" }}
        >
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,theme(colors.primary/18%),transparent_65%)]" />
          <div className="flex flex-col items-center gap-6 lg:mr-[-2rem]">
            <Ticket className="rotate-2 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:rotate-0" />
            <div className="flex gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <CountUp
                    to={stat.to}
                    suffix={stat.suffix}
                    className="font-heading text-xl font-bold text-foreground"
                  />
                  <div className="text-[0.68rem] tracking-wide text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-5 text-center text-sm text-muted-foreground">
          Con la operación real de <strong className="text-foreground">Deli&apos;s</strong> · Puebla, México
        </p>
      </div>
    </section>
  )
}
