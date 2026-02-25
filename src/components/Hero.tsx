import { ChevronDown, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream"
    >
      {/* Background Image with Light Treatment */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/image-converted.webp')",
          filter: 'grayscale(20%) brightness(1.1)',
        }}
      />

      {/* Light Premium Overlays */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-transparent to-cream/80" />

      {/* Delicate Side Borders */}
      <div className="absolute inset-y-12 left-12 w-px bg-gold/20 hidden lg:block" />
      <div className="absolute inset-y-12 right-12 w-px bg-gold/20 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto pt-20">
        {/* Simple Location Badge */}
        <div
          className={`transition-all duration-1000 ease-out mb-8 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
            }`}
        >
          <span className="text-gold-dark text-[10px] font-bold tracking-[0.4em] uppercase border-b border-gold/30 pb-2">
            Salvador · Bahia
          </span>
        </div>

        {/* Clean, Elegant Headline */}
        <div
          className={`transition-all duration-1000 delay-200 ease-out mb-10 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-6'
            }`}
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-charcoal leading-tight">
            Transformamos seus <br />
            <span className="italic text-wine font-medium">momentos</span> em <br />
            <span className="relative">
              memórias inesquecíveis
              <div className="absolute -bottom-2 left-0 w-full h-px bg-wine/20" />
            </span>
          </h1>
        </div>

        {/* Minimalist Subtitle */}
        <div
          className={`transition-all duration-1000 delay-500 ease-out mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <p className="text-charcoal/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            Decoração exclusiva e locação de materiais para buffets e eventos.
            <span className="block mt-2 text-gold-dark font-medium italic">Onde o requinte encontra a celebração.</span>
          </p>
        </div>

        {/* Clean Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
          <a
            href="https://wa.me/5571996425492?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento."
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 bg-wine text-cream font-medium px-10 py-4 rounded-sm transition-all duration-300 hover:bg-wine-dark hover:shadow-xl active:scale-95 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            <span className="tracking-wider">Solicitar Orçamento</span>
          </a>
          <a
            href="#servicos"
            className="group flex items-center gap-2 border border-charcoal/20 text-charcoal font-medium px-10 py-4 rounded-sm transition-all duration-300 hover:border-wine hover:text-wine active:scale-95 w-full sm:w-auto justify-center"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Minimal Stats */}
        <div
          className={`grid grid-cols-3 gap-4 max-w-lg mx-auto transition-all duration-1000 delay-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
          {[
            { value: '500+', label: 'Eventos' },
            { value: '10+', label: 'Anos' },
            { value: '100%', label: 'Satisfação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="font-serif text-2xl md:text-3xl font-light text-wine mb-1">
                {stat.value}
              </div>
              <div className="text-gold-dark text-[10px] tracking-[0.2em] uppercase font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <a
          href="#servicos"
          className="text-charcoal/30 hover:text-wine transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  )
}
