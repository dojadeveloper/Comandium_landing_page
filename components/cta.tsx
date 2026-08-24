import { ArrowRight } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { WHATSAPP_DEMO_URL } from "@/lib/whatsapp"
import { DEMO_URL } from "@/lib/demo"

export function Cta() {
  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal
        as="div"
        className="bg-primary px-8 py-16 text-center text-primary-foreground transition-[box-shadow,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/30 sm:px-16"
      >
        <h2 className="font-heading text-[clamp(1.8rem,3vw,2.4rem)] font-bold">
          ¿Listo para dejar el papel atrás?
        </h2>
        <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
          Agenda una demo de 20 minutos. Te mostramos el sistema con tu propio menú y resolvemos tus dudas sin compromiso.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="h-11 bg-background px-6 text-[0.95rem] text-foreground hover:bg-background/90"
            asChild
          >
            <a href={WHATSAPP_DEMO_URL} target="_blank" rel="noopener noreferrer">
              Solicita una demo
              <ArrowRight className="size-4 transition-transform duration-300 group-hover/button:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 border-primary-foreground/30 bg-transparent px-6 text-[0.95rem] text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            asChild
          >
            <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
              Ver demo en vivo
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 font-mono text-sm text-primary-foreground/85">
          <a href="mailto:dojaque.developer@gmail.com" className="font-semibold hover:underline">
            dojaque.developer@gmail.com
          </a>
          <a
            href="https://wa.me/522292234703"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            WhatsApp +52 229 223 4703
          </a>
        </div>
      </Reveal>
    </section>
  )
}
