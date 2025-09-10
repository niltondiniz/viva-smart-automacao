import { LINKS } from '../lib/constants'
import heroImage from '../../assets/hero-imagem.png'
import { FiSun, FiMusic, FiWifi, FiShield, FiKey } from 'react-icons/fi'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sand via-white to-sand" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 grid lg:grid-cols-2 gap-10">
        <div>
          <span className="inline-block text-xs font-medium tracking-widest uppercase text-neutral-500">Casa conectada de verdade</span>
          <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight">
            Conforto, segurança e tecnologia em cada ambiente
          </h1>
          <p className="mt-4 text-neutral-600 text-lg leading-relaxed max-w-2xl">
            Automação profissional que integra o essencial de uma casa inteligente com estabilidade e simplicidade no uso diário.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={LINKS.whatsOrcamento}
              className="inline-flex h-11 px-5 items-center rounded-xl bg-brand text-white hover:bg-brand-700"
            >
              Quero um orçamento
            </a>
            <a href="#servicos" className="inline-flex h-11 px-5 items-center rounded-xl border border-brand-800/20 hover:bg-white">
              Ver soluções
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 sm:grid-cols-5 gap-6 max-w-xl">
            {[
              { icon: FiSun, label: 'Iluminação' },
              { icon: FiMusic, label: 'Som' },
              { icon: FiWifi, label: 'Rede / Wi‑Fi' },
              { icon: FiShield, label: 'Segurança' },
              { icon: FiKey, label: 'Acesso' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <div className="h-12 w-12 rounded-xl border border-brand-800/15 bg-white text-brand-700 grid place-items-center">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-xs font-medium text-neutral-600 tracking-wide text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl bg-white border border-brand-800/15 p-6 grid place-items-center">
            <img src={heroImage} alt="Viva Smart Automação — logomarca" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
