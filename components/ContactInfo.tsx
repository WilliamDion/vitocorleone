'use client'
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { BUSINESS_HOURS } from '@/src/config/business-hours'

export const whatsappNumber = "5551981391389"

export default function Contact() {

  const instagramUser = "barbeariavitocorleone" 
  const address = "Av. Rubem Berta, 1875 - Tramandaí, RS"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`

  return (
    <section id="ContactInfo" className="py-24 bg-background-color text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Coluna de Informações */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">
              Onde <span className="text-primary">Estamos</span>
            </h2>
            <p className="text-zinc-400 mb-12 max-w-md">
              Venha nos visitar e viver uma experiência de cuidado premium. 
              Agende pelo WhatsApp ou tire suas dúvidas pelo Instagram.
            </p>

            <div className="space-y-8">
              {/* WhatsApp */}
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Opa! Vim do site e gostaria de marcar um horário.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-14 h-14 bg-mid border border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                  <FaWhatsapp className="text-2xl text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">WhatsApp</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">(51) 98139-1389</p>
                </div>
              </a>

              {/* Instagram */}
              <a 
                href={`https://instagram.com/${instagramUser}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-14 h-14 bg-mid border border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                  <FaInstagram className="text-2xl text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Instagram</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors">@{instagramUser}</p>
                </div>
              </a>

              {/* Endereço */}
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group"
              >
                <div className="w-14 h-14 bg-mid border border-zinc-800 flex items-center justify-center group-hover:border-primary transition-colors">
                  <FaMapMarkerAlt className="text-2xl text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Endereço</p>
                  <p className="text-xl font-bold group-hover:text-primary transition-colors whitespace-pre-line">
                    {address}
                  </p>
                </div>
              </a>

              {/* Horários */}
              <div className="flex items-center">
                <div className="w-14 h-14 bg-mid border border-zinc-800 flex items-center justify-center">
                  <FaClock className="text-2xl text-primary" />
                </div>
                <div className="ml-6">
                  <p className="text-xs uppercase tracking-widest text-bg-mid font-bold">Horário de Atendimento</p>
                  <p className="text-lg font-bold">Seg - Sáb: 08h às 20h</p> {/* Ex: Seg-Sex */}
                 {/* <p className="text-lg font-bold">{BUSINESS_HOURS[6].label}</p> {/* Ex: Sábado */}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna do Mapa */}
          <div className="w-full lg:w-1/2 h-[450px] relative group">
            {/* Moldura Deslocada - Alterado para border-primary */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded-sm z-0"></div>
            
            <div className="relative z-10 w-full h-full bg-zinc-900 overflow-hidden rounded-sm grayscale invert contrast-[0.9] hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110575.99043334172!2d-50.28892845664065!3d-29.993804899999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95187369d83ed08d%3A0x3caf29c50e9e790e!2sBarbearia%20Vito%20Corleone!5e0!3m2!1spt-BR!2sbr!4v1770701927779!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
