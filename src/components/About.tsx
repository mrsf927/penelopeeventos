import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Mais de 500 eventos realizados em Salvador e região',
  'Locação completa de mobiliário e utensílios premium',
  'Equipe especializada e materiais de alta qualidade',
  'Atendimento personalizado do planejamento à execução',
]

const galleryImages = [
  { src: '/images/buffet-baiano.jpeg', alt: 'Estrutura estilo baiano' },
  { src: '/images/decoracao-1.jpeg', alt: 'Decoração e utensílios' },
  { src: '/images/locacao-2.jpeg', alt: 'Materiais Premium' },
  { src: '/images/locacao-1.jpeg', alt: 'Equipamentos para locação' },
]

export default function About() {
  return (
    <section id="quem-somos" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <span className="text-wine text-sm font-medium tracking-widest uppercase">
              Nossa história
            </span>
            <h2 className="section-title text-charcoal mt-3 mb-2">Quem Somos</h2>
            <div className="w-16 h-0.5 bg-wine mb-6" />

            <p className="text-charcoal/70 leading-relaxed mb-4">
              A Penélope Eventos nasceu do amor pela arte de celebrar e decorar.
              Localizados no coração de{' '}
              <strong className="text-charcoal">Itapuã, Salvador – BA</strong>, somos
              especialistas em locação de materiais e decoração para transformar cada celebração
              em uma experiência única e inesquecível.
            </p>
            <p className="text-charcoal/70 leading-relaxed mb-6">
              Com mais de uma década de experiência, nossa equipe cuida de cada detalhe —
              da locação de materiais de alta qualidade à decoração refinada — para que você aproveite cada
              momento ao lado de quem ama.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-wine shrink-0 mt-0.5" />
                  <span className="text-charcoal/70 text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '500+', label: 'Eventos' },
                { value: '10+', label: 'Anos' },
                { value: '100%', label: 'Dedicação' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-wine/10 border border-wine/20 rounded-lg p-4 text-center"
                >
                  <div className="font-serif text-2xl font-bold text-wine">{stat.value}</div>
                  <div className="text-charcoal/60 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center lg:justify-start">
              <a
                href="https://wa.me/5571996425492?text=Olá!%20Quero%20saber%20mais%20sobre%20a%20Penélope%20Eventos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wine inline-block"
              >
                Entre em Contato
              </a>
            </div>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="col-span-2">
              <img
                src="/images/buffet-1.jpeg"
                alt="Locação de materiais Penélope Eventos"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            {galleryImages.map((img) => (
              <img
                key={img.src}
                src={img.src}
                alt={img.alt}
                className="w-full h-36 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
