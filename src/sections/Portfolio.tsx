import Section from '../components/Section'

type Item = {
  title: string
  desc: string
  alt: string
  img: string // data URI (SVG) como placeholder elegante até trocar por fotos reais
  tags?: string[]
}

// Placeholders visuais em SVG (data URI) — prontos para produção, leves e responsivos.
// Depois você pode trocar o campo `img` por imports de imagens reais (ex.: import living from '../assets/portfolio/living.jpg')
const svg = (label: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
      <defs>
        <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0%' stop-color='#f3efe3'/>
          <stop offset='100%' stop-color='#ffffff'/>
        </linearGradient>
      </defs>
      <rect width='100%' height='100%' fill='url(#g)'/>
      <g fill='none' stroke='#2a4d34' stroke-opacity='0.15'>
        <circle cx='200' cy='150' r='120'/>
        <circle cx='1400' cy='200' r='160'/>
        <rect x='100' y='350' width='1400' height='400' rx='32' ry='32'/>
      </g>
      <g font-family='Inter,system-ui' text-anchor='middle'>
        <text x='800' y='460' font-size='44' fill='#386746'>${label}</text>
        <text x='800' y='515' font-size='24' fill='#478158' opacity='0.85'>Viva Smart Automação</text>
      </g>
    </svg>`
  )}`

const items: Item[] = [
  {
    title: 'Sala Inteligente — luz, voz e conforto',
    desc: 'Iluminação dimerizável, cenas “Cinema” e “Jantar”, Alexa na mesa lateral e som ambiente integrado. Controle por voz e app, tudo sem complicação.',
    alt: 'Sala de estar moderna com iluminação indireta, Alexa e som ambiente',
    img: svg('Sala Inteligente'),
    tags: ['Iluminação', 'Alexa', 'Som']
  },
  {
    title: 'Home Theater Imersivo',
    desc: 'Projetor/TV 4K, soundbar ou sistema 5.1/7.1, disparo automático de cena: fechar cortinas, ajustar luz e ligar equipamentos.',
    alt: 'Home theater com cortinas automatizadas e luz cênica',
    img: svg('Home Theater'),
    tags: ['Cortinas', 'Cenas', 'Áudio']
  },
  {
    title: 'Fachada com LED & Acesso',
    desc: 'Iluminação externa em LED com rotinas por horário e presença. Integração com fechaduras/portão e notificações no app.',
    alt: 'Fachada residencial iluminada com LED e controle de acesso',
    img: svg('Fachada LED'),
    tags: ['LED Externo', 'Acesso', 'Rotinas']
  },
  {
    title: 'Suíte Automatizada',
    desc: 'Cortinas blackout, climatização, luz quente dimerizável e cena “Boa noite”: tudo desliga, portas conferidas e alarme ativado.',
    alt: 'Quarto aconchegante com cortinas e iluminação automatizadas',
    img: svg('Suíte Automatizada'),
    tags: ['Clima', 'Cortinas', 'Cenas']
  },
  {
    title: 'Cozinha Conectada',
    desc: 'Spots de tarefa, fitas LED sob armários, Alexa na bancada e tomadas inteligentes. Perfeita para o dia a dia e receber amigos.',
    alt: 'Cozinha moderna com iluminação embutida e assistente de voz',
    img: svg('Cozinha Conectada'),
    tags: ['LED', 'Alexa', 'Tomadas']
  },
  {
    title: 'Área Gourmet & Piscina',
    desc: 'LEDs RGB, caixas embutidas e automação de bombas/aquecimento. Playlist certa e clima perfeito com um toque.',
    alt: 'Área externa com iluminação e som ambiente integrados',
    img: svg('Gourmet & Piscina'),
    tags: ['RGB', 'Som Externo', 'Clima']
  }
]

export default function Portfolio() {
  return (
    <Section id="portfolio" title="Portfólio" subtitle="Alguns ambientes que entregamos ou projetamos. Troque os placeholders por fotos reais quando quiser." tone="muted">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <div key={i} className="rounded-2xl overflow-hidden border border-[#2a4d34]/10 bg-white">
            <div className="aspect-video">
              <img
                src={it.img}
                alt={it.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium">{it.title}</h3>
              <p className="text-sm text-neutral-600 mt-1">{it.desc}</p>
              {it.tags && it.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {it.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md border border-[#386746]/25 text-[#2a4d34] bg-[#f7f4ec]">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
