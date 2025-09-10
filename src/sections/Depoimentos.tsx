import Section from '../components/Section'

export default function Depoimentos() {
  const items = [
    { n: 'Marcos A.', d: 'Instalaram iluminação inteligente e som em 4 ambientes. Tudo integrado com Alexa e cenas — ficou perfeito!' },
    { n: 'Priscila R.', d: 'A rede Wi‑Fi ficou impecável e as persianas automatizadas mudaram nossa rotina.' },
    { n: 'Elaine G.', d: 'Entrega profissional do início ao fim. Agora controlo a casa toda por um app.' },
  ] as const
  return (
    <Section title="O que dizem os clientes">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.n} className="p-6 rounded-2xl border border-neutral-200 bg-neutral-50">
            <p className="text-sm text-neutral-700">“{t.d}”</p>
            <p className="mt-3 text-xs text-neutral-500">— {t.n}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
