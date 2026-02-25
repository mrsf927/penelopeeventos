import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Qual é a área de atendimento da Penélope Eventos?',
    answer:
      'Atendemos toda a cidade de Salvador e a Região Metropolitana, incluindo Lauro de Freitas, Camaçari, Simões Filho e o Litoral Norte da Bahia. Para eventos em outras cidades, entre em contato para verificarmos disponibilidade e logística.',
  },
  {
    question: 'Com quanto tempo de antecedência devo fazer a reserva?',
    answer:
      'Recomendamos reservar com pelo menos 30 dias de antecedência para eventos menores. Para casamentos, formaturas e eventos corporativos maiores, o ideal é de 60 a 90 dias. Em alta temporada (dezembro, carnaval e festas juninas), antecipe ainda mais sua reserva.',
  },
  {
    question: 'Vocês fornecem todo o equipamento necessário?',
    answer:
      'Sim! Temos em nosso acervo rechauds (retangulares e redondos), mesas, cadeiras, toalhas, louças completas, taças de cristal, centros de mesa e toda a estrutura para o seu evento. Trabalhamos também com decoração personalizada sob consulta.',
  },
  {
    question: 'Qual o número mínimo de convidados para contratar o serviço?',
    answer:
      'Trabalhamos a partir de 30 convidados para serviço de buffet completo. Para eventos menores ou coqueteleiras, temos pacotes especiais. Entre em contato pelo WhatsApp e montaremos uma proposta adequada ao tamanho e tipo do seu evento.',
  },
  {
    question: 'Como funciona o processo de orçamento?',
    answer:
      'O orçamento é 100% gratuito e sem compromisso! Basta nos enviar uma mensagem pelo WhatsApp ou preencher o formulário de contato com a data, tipo de evento, número de convidados e o que deseja incluir no pacote. Retornamos em até 24 horas.',
  },
  {
    question: 'Vocês fazem buffet baiano tradicional?',
    answer:
      'Com certeza! Essa é uma das nossas especialidades. Oferecemos culinária baiana autêntica: moqueca de peixe e camarão, vatapá, caruru, bobó de camarão, acarajé, além de pratos regionais servidos em panelas de barro com todo o sabor da Bahia.',
  },
  {
    question: 'Posso personalizar o cardápio para restrições alimentares?',
    answer:
      'Sim, com prazer! Desenvolvemos cardápios especiais para convidados com restrições como vegetarianismo, veganismo, intolerância ao glúten e à lactose. Basta nos informar no momento do orçamento para garantirmos opções adequadas a todos os seus convidados.',
  },
  {
    question: 'Qual a forma de pagamento aceita?',
    answer:
      'Aceitamos Pix, transferência bancária, cartão de débito e crédito. Para reserva, solicitamos um sinal de 30% do valor total, com o restante pago alguns dias antes do evento. Consulte condições especiais para pagamento à vista.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-charcoal-mid last:border-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-charcoal pr-4 group-hover:text-wine transition-colors">
          {question}
        </span>
        <span className="shrink-0 w-7 h-7 rounded-full border border-wine/40 flex items-center justify-center text-wine group-hover:bg-wine group-hover:text-cream transition-all">
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-charcoal/65 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-wine text-sm font-medium tracking-widest uppercase">
            Tire suas dúvidas
          </span>
          <h2 className="section-title text-charcoal mt-3 mb-4">Perguntas Frequentes</h2>
          <div className="w-16 h-0.5 bg-wine mx-auto" />
          <p className="text-charcoal/60 max-w-xl mx-auto mt-4">
            Reunimos as perguntas mais comuns dos nossos clientes. Não encontrou o que
            procurava? Fale conosco pelo WhatsApp!
          </p>
        </div>

        {/* Accordion */}
        <div className="bg-white rounded-xl shadow-sm shadow-charcoal/10 overflow-hidden px-6">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-10">
          <p className="text-charcoal/60 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://wa.me/5571996425492?text=Olá!%20Tenho%20uma%20dúvida%20sobre%20os%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wine inline-flex items-center gap-2"
          >
            Fale conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
