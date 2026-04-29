import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Telefon',
      value: '+49 (0) 176 70363162',
      link: 'tel:+4917670363162'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'E-Mail',
      value: 'info@felgendoc-goettingen.de',
      link: 'mailto:info@felgendoc-goettingen.de'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Adresse',
      value: 'Rudolf-Winkel-Straße 11, 37079 Göttingen, Germany',
      link: 'https://maps.google.com/?q=Rudolf-Winkel-Straße+11,+37079+Göttingen,+Germany'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Öffnungszeiten',
      value: 'Mo-Fr: 8:00-18:00 Uhr',
      link: null
    }
  ];

  return (
    <section id="kontakt" className="py-24 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="inline-block relative p-[2px] rounded-full overflow-hidden mb-4"
            style={{ background: 'linear-gradient(135deg, #8B6914, #C9A84C, #E8C068)' }}
          >
            <div className="px-4 py-2 bg-[#111111] rounded-full">
              <span className="text-sm font-semibold tracking-wide uppercase text-gradient-gold">
                Kontakt
              </span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5F5] mb-4">
            Jetzt Termin vereinbaren
          </h2>
          <p className="text-xl text-[#A8AFBA] max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-[#F5F5F5] mb-2">FelgenDoc Göttingen</h3>
              <p className="text-[#A8AFBA]">Inhaber: Burim Shashivari</p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg hover:border-[#C9A84C]/40 transition-all"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, rgba(139, 105, 20, 0.1), rgba(201, 168, 76, 0.2))' }}>
                    <div className="text-gradient-gold">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <p className="text-[#999999] text-sm mb-1">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#F5F5F5] hover:text-[#C9A84C] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-[#F5F5F5]">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <motion.a
                href="tel:+4917670363162"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 text-[#0A0A0A] rounded-full font-bold text-center transition-all shadow-gold whitespace-nowrap"
                style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
              >
                <span>Jetzt anrufen</span>
              </motion.a>

              <motion.a
                href="https://wa.me/4917670363162"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-[#25D366] text-white rounded-full font-bold text-center hover:bg-[#1ea952] transition-all shadow-lg whitespace-nowrap"
              >
                <span>WhatsApp schreiben</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-xl p-8">
              <div>
                <label htmlFor="name" className="block text-[#F5F5F5] text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg text-[#F5F5F5] focus:border-[#C9A84C] focus:outline-none transition-all"
                  placeholder="Ihr Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#F5F5F5] text-sm font-medium mb-2">
                  Telefonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg text-[#F5F5F5] focus:border-[#C9A84C] focus:outline-none transition-all"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-[#F5F5F5] text-sm font-medium mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg text-[#F5F5F5] focus:border-[#C9A84C] focus:outline-none transition-all"
                  placeholder="ihre@email.de"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-[#F5F5F5] text-sm font-medium mb-2">
                  Service auswählen
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg text-[#F5F5F5] focus:border-[#C9A84C] focus:outline-none transition-all"
                >
                  <option value="">Bitte auswählen</option>
                  <option value="felgenreparatur">Felgenreparatur</option>
                  <option value="pulverbeschichtung">Pulverbeschichtung</option>
                  <option value="fahrzeugaufbereitung">Fahrzeugaufbereitung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#F5F5F5] text-sm font-medium mb-2">
                  Fahrzeug & Beschreibung
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-[#C9A84C]/20 rounded-lg text-[#F5F5F5] focus:border-[#C9A84C] focus:outline-none transition-all resize-none"
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 text-[#0A0A0A] rounded-full font-bold text-lg transition-all shadow-gold flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #8B6914 0%, #C9A84C 50%, #E8C068 100%)' }}
              >
                <Send className="w-5 h-5" />
                Anfrage senden
              </motion.button>

              <p className="text-[#999999] text-xs text-center">
                Mit dem Absenden akzeptieren Sie unsere Datenschutzerklärung
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
