import { MapPin, Phone, Instagram, MessageCircle, Clock } from 'lucide-react'

export default function Map() {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-wine text-sm font-medium tracking-widest uppercase">
            Venha nos visitar
          </span>
          <h2 className="section-title text-charcoal mt-3 mb-4">Onde Estamos</h2>
          <div className="w-16 h-0.5 bg-gold mx-auto my-4" />
          <p className="text-charcoal/55 max-w-xl mx-auto mt-4">
            Estamos em Itapuã, um dos bairros mais charmosos de Salvador. Venha nos
            visitar ou entre em contato pelo WhatsApp para marcar uma visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Info */}
          <div className="bg-cream rounded-xl p-8 border border-cream-dark flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl text-wine mb-6">Informações de Contato</h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-wine" />
                  </div>
                  <div>
                    <div className="text-charcoal font-medium text-sm mb-0.5">Endereço</div>
                    <div className="text-charcoal/60 text-sm leading-relaxed">
                      Av. Dorival Caymmi, 108
                      <br />
                      Itapuã, Salvador – BA
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-wine" />
                  </div>
                  <div>
                    <div className="text-charcoal font-medium text-sm mb-0.5">Telefone / WhatsApp</div>
                    <a
                      href="https://wa.me/5571996425492"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-wine-light transition-colors text-sm font-medium"
                    >
                      (71) 99642-5492
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                    <Instagram size={18} className="text-wine" />
                  </div>
                  <div>
                    <div className="text-charcoal font-medium text-sm mb-0.5">Instagram</div>
                    <a
                      href="https://www.instagram.com/penelope.eventos/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine hover:text-wine-light transition-colors text-sm font-medium"
                    >
                      @penelope.eventos
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-wine/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-wine" />
                  </div>
                  <div>
                    <div className="text-charcoal font-medium text-sm mb-0.5">Atendimento</div>
                    <div className="text-charcoal/60 text-sm">
                      Seg – Sex: 9h às 18h
                      <br />
                      Sábado: 9h às 14h
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5571996425492?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20meu%20evento."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bc5a] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#25D366]/30 active:scale-95"
            >
              <MessageCircle size={22} />
              Solicitar Orçamento pelo WhatsApp
            </a>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-xl overflow-hidden border border-cream-dark min-h-80 lg:min-h-full shadow-sm">
            <iframe
              title="Localização Penélope Eventos - Av. Dorival Caymmi 108, Itapuã, Salvador"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0!2d-38.3369!3d-12.9517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAv.+Dorival+Caymmi%2C+108%2C+Itapu%C3%A3%2C+Salvador+-+BA!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr&q=Av.+Dorival+Caymmi+108+Itapuã+Salvador+BA"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
