import { ReactNode } from 'react'

type Tone = 'white' | 'muted'

interface Props {
  id: string
  title?: string
  subtitle?: string
  children: ReactNode
  tone?: Tone
}

export default function Section({ id, title, subtitle, children, tone = 'white' }: Props) {
  const bg = tone === 'muted' ? 'bg-sand' : 'bg-white'
  return (
    <section id={id} className={`py-16 sm:py-24 ${bg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && <h2 className="text-3xl font-bold">{title}</h2>}
        {subtitle && <p className="mt-2 text-neutral-600 max-w-3xl">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
