import Section from '../components/Section'

export default function Diferenciais() {
  const bullets = [
    'Planejamento: número de circuitos, carga, dimerização e paralelismos definidos desde a obra.',
    'Confiabilidade: equipamentos com suporte oficial, garantia e reposição.',
    'Segurança: padrões elétricos, proteção contra surtos e Wi‑Fi segmentado.',
    'Usabilidade: cenas e automações pensadas para toda a família.',
    'Documentação: mapa de rede, credenciais seguras e passo a passo de uso.',
  ] as const

  return (
    <Section id="diferenciais" title="Por que a Viva Smart?">
      <div className="grid lg:grid-cols-3 gap-6">
        {[
          { t: 'Projeto profissional', d: 'Levantamento técnico, memorial de infraestrutura, rede dimensionada e previsão de pontos.' },
          { t: 'Entrega chave‑na‑mão', d: 'Do cabeamento ao comissionamento: configuramos o app, criamos cenas e treinamos você.' },
          { t: 'Suporte e evolução', d: 'Pós‑entrega, expansão por etapas e atualização de firmware com segurança.' },
        ].map((c) => (
      <div key={c.t} className="p-6 rounded-2xl border border-brand-800/15 bg-white">
            <h3 className="font-semibold text-lg">{c.t}</h3>
            <p className="mt-2 text-sm text-neutral-600">{c.d}</p>
          </div>
        ))}
      </div>

    <div className="mt-10 p-6 rounded-2xl border border-brand-800/15 bg-white">
        <h3 className="font-semibold">Hobbista x Profissional — o que muda?</h3>
        <ul className="list-disc pl-6 mt-3 text-sm text-neutral-700 space-y-2">
          {bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
      </div>
    </Section>
  )
}
