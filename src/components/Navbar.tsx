import { LINKS, SITE } from '../lib/constants'
import logo from '../../assets/svg/logo.svg'
import { FaInstagram } from 'react-icons/fa'

export default function Navbar() {
  return (
  <header className="sticky top-0 z-40 backdrop-blur bg-sand/80 border-b border-brand-800/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Viva Smart Automação" className="h-10 w-auto object-contain" />
          <div className="leading-tight">
            <p className="font-semibold">{SITE.name}</p>
            <p className="text-xs text-neutral-500">@{SITE.instagram}</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
      <a href="#servicos" className="hover:text-neutral-700">Soluções</a>
      <a href="#cenas" className="hover:text-neutral-700">Cenas</a>
      <a href="#diferenciais" className="hover:text-neutral-700">Diferenciais</a>
      <a href="#portfolio" className="hover:text-neutral-700">Portfólio</a>
      <a href="#faq" className="hover:text-neutral-700">FAQ</a>
      <a href="#contato" className="hover:text-neutral-700">Contato</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LINKS.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-sm inline-flex items-center gap-2 underline underline-offset-4 hover:no-underline"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href={LINKS.whatsContato}
            className="hidden sm:inline-flex h-10 px-4 items-center rounded-xl bg-brand text-white hover:bg-brand-700 text-sm"
          >
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </header>
  )
}
