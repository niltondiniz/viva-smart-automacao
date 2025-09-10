import Section from '../components/Section'
import { LINKS, SITE } from '../lib/constants'

export default function Contato() {
  return (
    <Section id="contato" tone="white">
  <div className="rounded-3xl border border-brand-800/15 p-8 lg:p-12 bg-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
        <div>
          <h2 className="text-3xl font-bold">Vamos projetar sua casa inteligente?</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl">
            Atendimento em {SITE.cityRegion}. Envie uma planta ou fotos e retornamos com um diagnóstico e proposta.
          </p>
        </div>
        <div className="flex gap-3">
          <a href={LINKS.whatsContato} className="inline-flex h-11 px-5 items-center rounded-xl bg-brand text-white hover:bg-brand-700">
            Chamar no WhatsApp
          </a>
          <a href={LINKS.email} className="inline-flex h-11 px-5 items-center rounded-xl border border-brand-800/20 hover:bg-white">
            Enviar por e‑mail
          </a>
        </div>
      </div>
    </Section>
  )
}
