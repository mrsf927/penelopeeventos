import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Buffet Completo',
    description:
      'Serviço completo de buffet para todos os tipos de evento. Montagem impecável com mesas elegantes, louças premium e atendimento personalizado.',
    image: '/images/buffet-1.jpeg',
    tag: 'Mais Pedido',
  },
  {
    id: 2,
    title: 'Gastronomia Gourmet',
    description:
      'Pratos elaborados com ingredientes selecionados. Da cozinha baiana clássica às preparações internacionais, cada prato é uma experiência.',
    image: '/images/gastronomia-2.jpeg',
    tag: null,
  },
  {
    id: 3,
    title: 'Confeitaria & Doces',
    description:
      'Bolos artesanais, sobremesas refinadas e doces finos que encantam os olhos e o paladar. Cada peça é criada com técnica e muito amor.',
    image: '/images/confeitaria-1.jpeg',
    tag: null,
  },
  {
    id: 4,
    title: 'Locação de Materiais',
    description:
      'Rechauds, mesas, cadeiras, toalhas, louças e toda a estrutura que seu evento precisa. Equipamentos de qualidade para um serviço perfeito.',
    image: '/images/locacao-2.jpeg',
    tag: null,
  },
  {
    id: 5,
    title: 'Decoração de Mesas',
    description:
      'Arranjos florais, taças de cristal, centros de mesa e toda a elegância que transforma uma mesa comum em um cenário deslumbrante.',
    image: '/images/decoracao-1.jpeg',
    tag: null,
  },
  {
    id: 6,
    title: 'Buffet Baiano',
    description:
      'Especialidade da casa: culinária baiana autêntica com panelas de barro, azeite de dendê, moquecas e todo o sabor da Bahia para o seu evento.',
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
            Do buffet à decoração, realizamos eventos completos com dedicação, qualidade
            e o toque especial da gastronomia baiana.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
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
