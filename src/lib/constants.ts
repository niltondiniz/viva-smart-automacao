export interface SiteConfig {
  name: string
  instagram: string
  phoneWhats: string
  email: string
  cityRegion: string
}

export const SITE: SiteConfig = {
  name: "Viva Smart Automação",
  instagram: "vivasmartautomacao",
  phoneWhats: "5524981411827", // troque para seu número com DDI/DDD
  email: "contato@vivasmart.com.br",
  cityRegion: "",
}

export const LINKS = {
  instagram: `https://www.instagram.com/${SITE.instagram}`,
  whatsOrcamento: `https://wa.me/${SITE.phoneWhats}?text=Oi%2C%20quero%20um%20or%C3%A7amento%20de%20automa%C3%A7%C3%A3o%20residencial.`,
  whatsContato: `https://wa.me/${SITE.phoneWhats}?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20projeto%20de%20automa%C3%A7%C3%A3o.`,
  email: `mailto:${SITE.email}?subject=Projeto%20de%20Automa%C3%A7%C3%A3o%20Residencial&body=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento.`
}
