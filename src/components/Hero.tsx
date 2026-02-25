import { ChevronDown, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/image-converted.webp')" }}
      />

      {/* Gradient Overlays - Enhanced for better contrast */}
      <div className="absolute inset-0 bg-charcoal/60" /> {/* Base dimming */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-transparent to-charcoal/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-wine/40 via-transparent to-wine/30" />

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-charcoal to-transparent opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-charcoal to-transparent opacity-60" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <div className="relative group">
          {/* Glass Card Container */}
          <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-md rounded-[3rem] -inset-y-8 -inset-x-4 md:-inset-x-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold/50 rounded-full px-4 py-1.5 mb-8 bg-gold/10 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                Salvador · Bahia
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight text-shadow mb-8">
              Transformamos seus{' '}
              <span className="relative inline-block">
                <em className="text-gold not-italic">momentos</em>
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-gold/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>{' '}
              em memórias{' '}
              <em className="text-gold not-italic">inesquecíveis</em>
            </h1>

            {/* Gold divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-gold" />
              <div className="w-2 h-2 rotate-45 border border-gold bg-gold/20" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-gold" />
            </div>

            {/* Subtitle */}
            <p className="text-cream/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 text-shadow-sm font-light">
              Buffet completo, decoração exclusiva e locação de materiais em Salvador, BA.
              Excelência em cada detalhe para o seu evento em Itapuã e região.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <a
                href="https://wa.me/5571996425492?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 btn-gold text-lg w-full sm:w-auto justify-center group/btn"
              >
                <MessageCircle size={20} className="group-hover/btn:rotate-12 transition-transform" />
                Solicitar Orçamento
              </a>
              <a
                href="#servicos"
                className="flex items-center gap-2 btn-outline-gold text-lg w-full sm:w-auto justify-center hover:bg-gold/10 transition-colors"
              >
                Nossos Serviços
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-12">
              {[
                { value: '500+', label: 'Eventos' },
                { value: '10+', label: 'Anos de Exp.' },
                { value: '100%', label: 'Satisfação' },
              ].map((stat) => (
                <div key={stat.label} className="text-center group/stat">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-gold mb-1 group-hover/stat:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-cream/50 text-xs tracking-[0.2em] uppercase font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 inset-x-0 flex justify-center">
        <a
          href="#servicos"
          className="text-gold/60 hover:text-gold transition-colors animate-bounce"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  )
}
