import { MapPin, Phone, Instagram, Heart, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

const services = [
  'Louças para Buffet',
  'Réchauds e Cubas',
  'Bandejas e Travessas',
  'Expositores de Doces',
  'Taças e Cristalaria',
  'Peças em Barro',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="bg-charcoal border-t border-white/10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-gold text-2xl font-bold block">Penélope</span>
              <span className="font-sans text-cream/50 text-xs tracking-[0.2em] uppercase">Eventos</span>
            </div>
            <p className="text-cream/40 text-sm leading-relaxed mb-5">
              Transformando momentos em memórias inesquecíveis em Salvador, Bahia.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/penelope.eventos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold/20 border border-white/10 hover:border-gold/40 flex items-center justify-center text-cream/50 hover:text-gold transition-all"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://wa.me/5571996425492"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/40 flex items-center justify-center text-cream/50 hover:text-[#25D366] transition-all"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-cream/80 font-semibold text-sm mb-4 tracking-wide uppercase">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/40 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-cream/80 font-semibold text-sm mb-4 tracking-wide uppercase">
              Serviços
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#servicos"
                    className="text-cream/40 hover:text-gold text-sm transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream/80 font-semibold text-sm mb-4 tracking-wide uppercase">
              Contato
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="text-cream/40 text-sm leading-relaxed">
                  Av. Dorival Caymmi, 108
                  <br />
                  Itapuã, Salvador – BA
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-gold shrink-0" />
                <a
                  href="https://wa.me/5571996425492"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold text-sm transition-colors"
                >
                  (71) 99642-5492
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Instagram size={15} className="text-gold shrink-0" />
                <a
                  href="https://www.instagram.com/penelope.eventos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 hover:text-gold text-sm transition-colors"
                >
                  @penelope.eventos
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/25 text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Penélope Eventos. Todos os direitos reservados. Feito com{' '}
            <Heart size={12} className="text-wine fill-wine" /> em Salvador, BA.
          </p>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full bg-gold/15 hover:bg-gold/30 border border-gold/30 flex items-center justify-center text-gold transition-all hover:scale-110"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
