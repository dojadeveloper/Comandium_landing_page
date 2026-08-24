import { Reveal } from "@/components/reveal"
import { SectionLabel } from "@/components/section-label"

const steps = [
  { title: "Menú QR", body: "El cliente escanea y ve el menú actualizado al instante, sin imprimir nada." },
  { title: "Toma de orden", body: "El mesero captura el pedido desde tablet, con cambios de mesa y reapertura si hace falta." },
  { title: "Impresión por estación", body: "La orden se imprime automáticamente segmentada: cocina caliente, fría y bebidas." },
  { title: "Cobro", body: "Ticket de cobro con desglose por terminal, sin cuadres manuales al cierre." },
  { title: "Reportes", body: "Ventas, horarios pico y platillos top, exportables a Excel cuando los necesites." },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-xl">
          <SectionLabel>Del pase a la cuenta</SectionLabel>
          <h2 className="font-heading text-[clamp(1.9rem,3.2vw,2.6rem)] leading-tight font-bold text-foreground">
            De la mesa a tu reporte de ventas, en un solo flujo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sin integraciones complicadas ni curva de aprendizaje. Así se ve un servicio completo con Comandium.
          </p>
        </Reveal>

        <Reveal className="mt-14 flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="group/step min-w-[220px] shrink-0 translate-y-4 snap-start bg-card px-5 pt-6 pb-5 text-card-foreground opacity-0 shadow-lg shadow-black/20 transition-[opacity,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[state=visible]/reveal:translate-y-0 group-data-[state=visible]/reveal:opacity-100 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/20 lg:min-w-0"
              style={{
                clipPath:
                  "polygon(0 0,100% 0,100% 100%,90% 94%,80% 100%,70% 94%,60% 100%,50% 94%,40% 100%,30% 94%,20% 100%,10% 94%,0 100%)",
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <div className="inline-block font-mono text-xs font-bold text-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/step:-translate-y-0.5 group-hover/step:scale-110">
                {String(i + 1).padStart(2, "0")} /05
              </div>
              <h3 className="mt-3 font-heading text-base font-semibold">{step.title}</h3>
              <p className="mt-1.5 text-sm text-card-foreground/70">{step.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
