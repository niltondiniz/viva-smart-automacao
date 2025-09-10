import Section from '../components/Section'

export default function Servicos() {
  const items = [
    { t: 'Iluminação inteligente', d: 'Interruptores touch ou módulos por trás do interruptor tradicional, dimerização, cenários, sensores e rotinas programadas.' },
    { t: 'Som ambiente & Home Theater', d: 'Multi‑room, embutidos no gesso, Spotify/YouTube Music, controle por app/voz e integração com cenas.' },
    { t: 'Rede Wi‑Fi e Infraestrutura', d: 'Projeto de Wi‑Fi com cobertura total, cabeamento estruturado, racks, switches e roteadores profissionais.' },
    { t: 'Climatização e Persianas', d: 'Controle de ar‑condicionado, cortinas e persianas com automação por horários, presença e temperatura.' },
    { t: 'Segurança & Acesso', d: 'Câmeras, alarmes, fechaduras inteligentes e vídeo‑porteiro, tudo centralizado.' },
    { t: 'Assistentes de voz', d: 'Integração com Alexa, Google Assistente e, quando aplicável, Apple Home.' },
  ] as const

  return (
    <Section id="servicos" title="Soluções que entregamos" subtitle="Integramos marcas confiáveis (Tuya, Sonoff, Shelly e outras) e, quando faz sentido, Home Assistant. Sempre priorizando estabilidade, segurança e facilidade para o cliente.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((c) => (
          <div key={c.t} className="p-6 rounded-2xl border border-brand-800/15 bg-white">
            <h3 className="font-semibold text-lg">{c.t}</h3>
            <p className="mt-2 text-sm text-neutral-600">{c.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
