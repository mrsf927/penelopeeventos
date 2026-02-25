import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Louças para Buffet',
    description:
      'Ampla variedade de louças elegantes e resistentes para servir seus convidados com sofisticação e estilo em qualquer ocasião.',
    image: '/images/buffet-1.jpeg',
    tag: 'Mais Pedido',
  },
  {
    id: 2,
    title: 'Réchauds e Cubas',
    description:
      'Mantenha a temperatura ideal dos seus pratos com nossos réchauds de alta qualidade, garantindo uma apresentação profissional.',
    image: '/images/locacao-2.jpeg',
    tag: null,
  },
  {
    id: 3,
    title: 'Bandejas e Travessas',
    description:
      'Conjuntos de travessas e bandejas em diversos materiais para uma apresentação impecável de cada item do seu serviço.',
    image: '/images/gastronomia-2.jpeg',
    tag: null,
  },
  {
    id: 4,
    title: 'Expositores de Doces',
    description:
      'Suportes e pratos elevados que valorizam bolos e doces finos, criando um cenário deslumbrante na sua mesa de sobremesas.',
    image: '/images/confeitaria-1.jpeg',
    tag: null,
  },
  {
    id: 5,
    title: 'Taças e Cristalaria',
    description:
      'Cristaleria fina e copos de diversos modelos para todos os tipos de bebidas, elevando o nível de requinte da sua recepção.',
    image: '/images/decoracao-1.jpeg',
    tag: null,
  },
  {
    id: 6,
    title: 'Peças em Barro',
    description:
      'Panelas e acessórios de barro que trazem o charme e a autenticidade da Bahia para a montagem do seu buffet típico.',
    image: '/images/buffet-baiano.jpeg',
    tag: 'Especialidade',
  },
]

export default function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-wine text-sm font-medium tracking-widest uppercase">
            O que oferecemos
          </span>
          <h2 className="section-title text-charcoal mt-3 mb-4">Nossos Serviços</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto my-4" />
          <p className="text-charcoal/55 max-w-xl mx-auto mt-4 leading-relaxed">
            Da locação de materiais à decoração, oferecemos tudo para o seu evento com dedicação, qualidade e o charme especial da Bahia.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative bg-cream rounded-xl overflow-hidden border border-cream-dark hover:border-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold/15 hover:-translate-y-1"
            >
              {/* Tag */}
              {service.tag && (
                <div className="absolute top-3 left-3 z-10 bg-gold text-charcoal text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {service.tag}
                </div>
              )}

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cream/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-wine mb-2">{service.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/5571996425492?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-wine text-sm font-medium hover:gap-3 transition-all duration-200"
                >
                  Saiba mais
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Video Feature */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gold/20 bg-charcoal">
            <video
              src="/72d0s.mp4"
              className="w-full aspect-video object-cover"
              controls
              muted
              autoPlay
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
              <h3 className="text-gold font-serif text-2xl mb-2">Qualidade em cada detalhe</h3>
              <p className="text-white/80 text-sm max-w-lg">
                Veja um pouco da nossa dedicação e das peças exclusivas que transformam qualquer evento em uma celebração inesquecível.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="https://wa.me/5571996425492?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2"
          >
            Solicitar Orçamento Personalizado
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
