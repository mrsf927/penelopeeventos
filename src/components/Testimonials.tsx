import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Maria Souza',
    event: 'Casamento',
    rating: 5,
    text: 'A Penélope Eventos foi perfeita para o nosso casamento! Cada detalhe foi cuidado com tanto carinho. A estrutura de locação estava impecável e a decoração das mesas superou todas as expectativas. Emocionante demais!',
    initial: 'M',
  },
  {
    id: 2,
    name: 'João Ribeiro',
    event: 'Formatura',
    rating: 5,
    text: 'Contratamos para a formatura do nosso grupo e foi incrível. A gastronomia baiana estava autêntica e gostosa, os materiais de locação eram de alta qualidade. Super profissionais e pontuais!',
    initial: 'J',
  },
  {
    id: 3,
    name: 'Ana Carolina',
    event: 'Aniversário',
    rating: 5,
    text: 'O aniversário da minha mãe ficou lindo! Os doces artesanais foram um show à parte — todo mundo elogiou. A equipe foi super atenciosa desde o orçamento até o final do evento. Recomendo muito!',
    initial: 'A',
  },
  {
    id: 4,
    name: 'Roberto Lima',
    event: 'Confraternização',
    rating: 5,
    text: 'Contratamos a Penélope para a confraternização da empresa. O resultado foi simplesmente impecável. Nossos clientes ficaram encantados com a organização e a qualidade dos materiais locados.',
    initial: 'R',
  },
  {
    id: 5,
    name: 'Fernanda Costa',
    event: 'Chá de bebê',
    rating: 5,
    text: 'Realizei meu sonho com a Penélope Eventos! O chá de bebê ficou mágico. Os arranjos florais eram lindíssimos e a mesa de doces foi o destaque da festa. Valeu cada centavo!',
    initial: 'F',
  },
  {
    id: 6,
    name: 'Carlos Mendes',
    event: 'Evento Corporativo',
    rating: 5,
    text: 'Profissionalismo exemplar. Nosso evento corporativo em Salvador teve todo o suporte necessário: desde a montagem até o desmonte. A gastronomia gourmet agradou a todos os executivos presentes.',
    initial: 'C',
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold fill-gold' : 'text-gold/30'}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="py-20 lg:py-28 bg-cream relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-wine" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-wine" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-wine text-sm font-medium tracking-widest uppercase">
            Satisfação garantida
          </span>
          <h2 className="section-title text-charcoal mt-3 mb-4">
            O que dizem nossos clientes
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto my-4" />
          <p className="text-charcoal/55 max-w-xl mx-auto mt-4">
            Cada evento é uma história única. Veja o que nossos clientes dizem sobre suas
            experiências com a Penélope Eventos.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-stone-200 rounded-xl p-6 relative hover:border-wine/30 hover:shadow-lg hover:shadow-wine/8 transition-all duration-300 group"
            >
              {/* Quote icon */}
              <Quote
                size={32}
                className="text-wine/15 absolute top-4 right-4 group-hover:text-wine/30 transition-colors"
              />

              {/* Stars */}
              <StarRating rating={t.rating} />

              {/* Text */}
              <p className="text-charcoal/65 text-sm leading-relaxed my-4">"{t.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-wine/10 border border-wine/25 flex items-center justify-center shrink-0">
                  <span className="font-serif text-wine font-bold text-lg">{t.initial}</span>
                </div>
                <div>
                  <div className="text-charcoal font-semibold text-sm">{t.name}</div>
                  <div className="text-wine/70 text-xs">{t.event}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
