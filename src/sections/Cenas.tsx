import Section from '../components/Section'

export default function Cenas() {
  const items = [
    { t: 'Bom dia', d: 'Abre persianas, define temperatura e acende luzes suaves.' },
    { t: 'Cinema', d: 'Fecha cortinas, ajusta dimmer, liga TV/projetor e soundbar.' },
    { t: 'Jantar', d: 'Iluminação quente, playlist tranquila e ar‑condicionado ideal.' },
    { t: 'Boa noite', d: 'Desliga tudo, ativa alarme e confere portas/portões.' },
  ] as const
  return (
    <Section id="cenas" title="Cenas que facilitam o dia a dia" subtitle="Um toque, um comando de voz ou automaticamente com sensores." tone="muted">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((c) => (
          <div key={c.t} className="p-6 rounded-2xl border border-brand-800/15 bg-white">
            <div className="text-sm font-medium text-neutral-500">Cena</div>
            <h3 className="mt-1 font-semibold text-lg">{c.t}</h3>
            <p className="mt-2 text-sm text-neutral-600">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
