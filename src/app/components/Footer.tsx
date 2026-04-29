import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Instagram, Facebook, MapPin } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { label: 'Startseite', href: '/' },
    { label: 'Felgen', href: '/felgenreparatur' },
    { label: 'Aufbereitung', href: '/fahrzeugaufbereitung' },
    { label: 'Galerie', href: '/galerie' },
    { label: 'Über uns', href: '/ueber-uns' },
    { label: 'Kontakt', href: '/kontakt' }
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <MapPin className="w-5 h-5" />, href: 'https://maps.google.com/?q=Rudolf-Winkel-Straße+11,+37079+Göttingen,+Germany', label: 'Google Maps' }
  ];

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <img
                src="/src/imports/FelgenDoc_Logo_Usable.png"
                alt="FelgenDoc Göttingen"
                className="h-16 w-auto"
              />
            </motion.div>
            <p className="text-[#A8AFBA] mb-4 max-w-md">
              Ihr Spezialist für professionelle Felgenreparatur und hochwertige Fahrzeugveredelung in Göttingen.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-[#1A1A1A] border border-[#C9A84C]/20 rounded-lg flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#F5F5F5] font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-[#A8AFBA] hover:text-[#C9A84C] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#F5F5F5] font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-[#A8AFBA]">
              <li>
                <a href="tel:+4917670363162" className="hover:text-[#C9A84C] transition-colors">
                  +49 (0) 176 70363162
                </a>
              </li>
              <li>
                <a href="mailto:info@felgendoc-goettingen.de" className="hover:text-[#C9A84C] transition-colors">
                  info@felgendoc-goettingen.de
                </a>
              </li>
              <li className="pt-2">Rudolf-Winkel-Straße 11<br />37079 Göttingen, Germany</li>
              <li className="pt-2">Mo-Fr: 8:00-18:00 Uhr</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#C9A84C]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#999999]">
            <p>© 2026 FelgenDoc Göttingen. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Impressum</a>
              <a href="#" className="hover:text-[#C9A84C] transition-colors">Datenschutzerklärung</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
