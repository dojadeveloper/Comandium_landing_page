"use client"

import { useState } from "react"
import {
  Building2,
  Check,
  ClipboardList,
  GraduationCap,
  HardDrive,
  LifeBuoy,
  Rocket,
  Settings2,
} from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp"

const MONTHS_FREE = 2

const plans = [
  {
    name: "Básico",
    icon: ClipboardList,
    monthly: 599.99,
    note: "El punto de partida para dejar el papel atrás",
    featured: false,
    features: [
      "Menú digital con QR",
      "Toma de órdenes por mesero",
      "Impresión automática por estaciones",
      "Ticket de cobro por terminal",
      "Cambio de mesa y reapertura de órdenes",
      "Reportes exportables a Excel",
      "Panel admin de menú, usuarios y terminales",
    ],
  },
  {
    name: "Pro",
    icon: Rocket,
    monthly: 1199.99,
    note: "El más elegido: control financiero y de equipo",
    featured: true,
    features: [
      "Todo lo de Básico",
      "Autofactura con QR en el ticket",
      "Gestión de inventario inteligente",
      "Rendimiento de meseros",
      "Calculadora de reparto de propinas",
      "Landing page con reservaciones online",
    ],
  },
  {
    name: "Premium",
    icon: Building2,
    monthly: 2499.99,
    note: "Para cadenas y operaciones multi-sucursal",
    featured: false,
    features: [
      "Todo lo de Pro",
      "Chatbot con IA para consultas de negocio",
      "Recomendaciones basadas en datos",
      "Sistema de fidelidad de clientes",
      "Gestión multi-sucursal",
    ],
  },
]

const installationIncludes = [
  {
    icon: Settings2,
    title: "Sistema configurado",
    description: "Menú, estaciones, usuarios y terminales listos para operar desde el día uno.",
  },
  {
    icon: HardDrive,
    title: "Hardware instalado",
    description: "Impresoras, terminales y equipo conectados y probados en tu local.",
  },
  {
    icon: GraduationCap,
    title: "Capacitación de tu equipo",
    description: "Meseros, cocina y administración aprenden el flujo completo antes de arrancar.",
  },
  {
    icon: LifeBuoy,
    title: "Soporte durante el arranque",
    description: "Te acompañamos en las primeras semanas para resolver cualquier ajuste.",
  },
]

const currency = new Intl.NumberFormat("es-MX", {
  style: "currency",
  currency: "MXN",
  minimumFractionDigits: 2,
})

export function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly")

  return (
    <section id="planes" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="max-w-xl">
        <SectionLabel>Cuenta por cobrar</SectionLabel>
        <h2 className="font-heading text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight font-bold text-foreground">
          Un plan para cada etapa de tu restaurante
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Empieza con lo esencial y crece hacia automatización total. Sin contratos forzosos.
        </p>
      </Reveal>

      <Reveal className="mt-10 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ease-out",
              billing === "monthly"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Mensual
          </button>
          <button
            type="button"
            onClick={() => setBilling("annual")}
            className={cn(
              "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
              billing === "annual"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            Anual
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[0.65rem] font-bold uppercase",
                billing === "annual"
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-success/15 text-success"
              )}
            >
              {MONTHS_FREE} meses gratis
            </span>
          </button>
        </div>
      </Reveal>

      <Reveal className="mt-10 grid gap-5 lg:grid-cols-3">
        {plans.map((plan) => {
          const annualTotal = plan.monthly * (12 - MONTHS_FREE)
          const price = billing === "monthly" ? plan.monthly : annualTotal
          const period = billing === "monthly" ? "/mes" : "/año"

          return (
            <div key={plan.name} className="group relative">
              {plan.featured && (
                <div className="absolute -top-3 left-6 z-10 rounded-sm bg-primary px-3 py-1 font-mono text-[0.65rem] font-bold tracking-wide whitespace-nowrap text-primary-foreground uppercase shadow-sm">
                  Recomendado
                </div>
              )}
              <Card
                className={cn(
                  "h-full gap-0 border-0 px-1 pt-1 transition-[transform,box-shadow,--tw-ring-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2",
                  plan.featured
                    ? "ring-2 ring-primary hover:shadow-2xl hover:shadow-primary/30"
                    : "hover:shadow-xl hover:shadow-black/10 hover:ring-primary/40"
                )}
              >
                <CardContent className="flex grow flex-col pt-6">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[#6B4D9A] text-primary-foreground shadow-md shadow-primary/25 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[5deg] group-hover:scale-110">
                    <plan.icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <div className="mt-4 font-heading text-base font-semibold">{plan.name}</div>
                  <div className="mt-2 font-heading text-3xl font-bold">
                    {currency.format(price)}
                    <span className="ml-1 text-sm font-medium text-card-foreground/60">
                      {period}
                    </span>
                  </div>
                  {billing === "annual" && (
                    <div className="mt-1 text-sm font-medium text-success">
                      Equivale a {currency.format(annualTotal / 12)}/mes · {MONTHS_FREE} meses
                      gratis
                    </div>
                  )}
                  <div className="mt-2 border-b border-dashed border-paper-line pb-4 text-sm text-card-foreground/60">
                    {plan.note}
                  </div>

                  <ul className="mt-5 flex grow flex-col gap-3">
                    {plan.features.map((feature, i) => (
                      <li
                        key={feature}
                        className={cn(
                          "flex -translate-x-1 items-start gap-2.5 text-sm text-card-foreground/75 opacity-0 transition-[opacity,transform] duration-500 ease-out group-data-[state=visible]/reveal:translate-x-0 group-data-[state=visible]/reveal:opacity-100",
                          i === 0 && plan.name !== "Básico" && "font-semibold text-card-foreground"
                        )}
                        style={{ transitionDelay: `${i * 60}ms` }}
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-success" strokeWidth={2.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="bg-transparent px-6 pt-2 pb-6">
                  <Button
                    asChild
                    variant={plan.featured ? "default" : "outline"}
                    className={cn(
                      "w-full",
                      !plan.featured &&
                        "border-card-foreground/20 bg-transparent text-card-foreground hover:bg-card-foreground/5"
                    )}
                  >
                    <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
                      Solicita una demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          )
        })}
      </Reveal>

      <p className="mt-10 text-center text-sm text-muted-foreground">
        Precios en pesos mexicanos, más IVA. El onboarding es personalizado — no hay registro
        automático.
      </p>

      <Reveal className="mt-20">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="font-heading text-[clamp(1.5rem,2.4vw,2rem)] leading-tight font-bold text-foreground">
            ¿Qué incluye la instalación?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Cada plan llega acompañado de una puesta en marcha completa en tu restaurante. Cotizamos
            la instalación según el tamaño y las estaciones de tu local.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {installationIncludes.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-lg hover:shadow-black/5"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[#6B4D9A] text-primary-foreground shadow-sm shadow-primary/25">
                <item.icon className="size-5" strokeWidth={1.75} />
              </div>
              <div className="mt-4 font-heading text-sm font-semibold text-card-foreground">
                {item.title}
              </div>
              <p className="mt-1.5 text-sm text-card-foreground/70">{item.description}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
