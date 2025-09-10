import Section from '../components/Section'

export default function Portfolio() {
  return (
    <Section id="portfolio" title="Portfólio" subtitle="Substitua as imagens pelos seus cases reais." tone="muted">
      <div className="grid md:grid-cols-3 gap-6">
        {[1,2,3,4,5,6].map((i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-brand-800/15 bg-white">
            <div className="aspect-video bg-sand" />
            <div className="p-4">
              <h3 className="font-medium">Projeto #{i}</h3>
              <p className="text-sm text-neutral-600">Descrição breve do ambiente e soluções aplicadas.</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
