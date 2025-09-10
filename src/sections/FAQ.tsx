import Section from '../components/Section'

export default function FAQ() {
  const items = [
    { q: 'Quanto custa automatizar uma residência?', a: 'Projetos começam em faixas acessíveis para apartamentos compactos e evoluem conforme número de circuitos, ambientes e equipamentos. Fazemos diagnóstico e proposta sob medida.' },
    { q: 'Vou precisar trocar todos os interruptores?', a: 'Não necessariamente. Podemos usar módulos por trás dos interruptores existentes ou optar por interruptores touch — depende do design e da infraestrutura.' },
    { q: 'Funciona sem internet?', a: 'Sim. O controle local continua. A internet é necessária para controle remoto, notificações e assistentes de voz.' },
    { q: 'Dá para começar pequeno e expandir depois?', a: 'Claro. Planejamos a infraestrutura para crescer por etapas sem refazer tudo.' },
  ] as const
  return (
    <Section id="faq" title="Perguntas frequentes" tone="muted">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((f) => (
          <div key={f.q} className="p-6 rounded-2xl border border-brand-800/15 bg-white">
            <h3 className="font-semibold">{f.q}</h3>
            <p className="mt-2 text-sm text-neutral-600">{f.a}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
