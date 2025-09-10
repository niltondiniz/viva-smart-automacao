import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Servicos from './sections/Servicos'
import Cenas from './sections/Cenas'
import Diferenciais from './sections/Diferenciais'
import Portfolio from './sections/Portfolio'
import Depoimentos from './sections/Depoimentos'
import FAQ from './sections/FAQ'
import Contato from './sections/Contato'

export default function App() {
  return (
  <div className="min-h-screen bg-sand text-neutral-900">
      <Navbar />
      <Hero />
      <Servicos />
      <Cenas />
      <Diferenciais />
      <Portfolio />
      <Depoimentos />
      <FAQ />
      <Contato />
  <footer className="py-10 border-t border-brand-800/15 bg-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-neutral-600">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
      <p className="font-medium text-neutral-900">Viva Smart Automação</p>
              <p>@vivasmartautomacao • Todos os direitos reservados</p>
            </div>
            <div className="flex gap-6">
      <a href="#" className="hover:text-neutral-900">Política de Privacidade</a>
      <a href="#" className="hover:text-neutral-900">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
