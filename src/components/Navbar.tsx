import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Quem Somos', href: '#quem-somos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/96 backdrop-blur-md shadow-sm shadow-black/8 border-b border-stone-200'
          : 'bg-gradient-to-b from-black/60 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex flex-col leading-tight">
            <span className="font-serif text-gold text-xl md:text-2xl font-bold tracking-wide">
              Penélope
            </span>
            <span className={`font-sans text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? 'text-charcoal/50' : 'text-cream/80'}`}>
              Eventos
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  scrolled ? 'text-charcoal/70 hover:text-wine' : 'text-cream/80 hover:text-gold'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${scrolled ? 'bg-wine' : 'bg-gold'}`} />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/5571920010655?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 btn-gold text-sm py-2 px-5"
            >
              <Phone size={15} />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors p-2 ${scrolled ? 'text-charcoal hover:text-wine' : 'text-cream hover:text-gold'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen bg-white/98 backdrop-blur-md shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1 border-t border-stone-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="block py-3 text-charcoal/70 hover:text-wine font-medium transition-colors border-b border-stone-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5571920010655?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-4 flex items-center justify-center gap-2 btn-gold w-full text-sm"
          >
            <Phone size={15} />
            Solicitar Orçamento
          </a>
        </div>
      </div>
    </nav>
  )
}
