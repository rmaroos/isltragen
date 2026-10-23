import { Link } from 'react-router-dom';
import { Compass, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Container } from './ui';

const footerSections = [
  {
    title: 'Packages',
    links: [
      { label: 'Umrah', to: '/umrah' },
      { label: 'Hajj', to: '/hajj' },
      { label: 'Ramadan Umrah', to: '/ramadan-umrah' },
      { label: 'Group Travel', to: '/umrah/group' },
      { label: 'Custom Quote', to: '/request-a-quote' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Travel Guide', to: '/travel-guide' },
      { label: 'FAQs', to: '/faqs' },
      { label: 'Packing Checklist', to: '/travel-guide/packing-checklist' },
      { label: 'Documents', to: '/travel-guide/travel-documents-guide' },
    ],
  },
  {
    title: 'Agency',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'Reviews', to: '/reviews' },
    ],
  },
  {
    title: 'Policies',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Booking Terms', to: '/booking-conditions' },
      { label: 'Cancellation & Refunds', to: '/cancellation-and-refunds' },
      { label: 'Accessibility', to: '/accessibility' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-emerald-950 text-ivory-100 relative overflow-hidden">
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 pattern-stars opacity-[0.04] pointer-events-none" />

      <Container className="relative pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 md:gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Compass className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-display font-bold text-white text-lg leading-none block">Safa & Marwa</span>
                <span className="text-[10px] text-ivory-100/70 tracking-widest uppercase">Hajj & Umrah Travel</span>
              </div>
            </div>
            <p className="text-sm text-ivory-100/80 leading-relaxed max-w-xs mb-5">
              Helping pilgrims plan their sacred journey with clear information, transparent packages and responsive support.
            </p>
            <div className="space-y-2.5 text-sm">
              <a href="tel:+442012345678" className="flex items-center gap-2.5 text-ivory-100/80 hover:text-gold-500 transition-colors">
                <Phone className="w-4 h-4 flex-shrink-0" /> 020 1234 5678
              </a>
              <a href="mailto:info@safamarwa-travel.co.uk" className="flex items-center gap-2.5 text-ivory-100/80 hover:text-gold-500 transition-colors">
                <Mail className="w-4 h-4 flex-shrink-0" /> info@safamarwa-travel.co.uk
              </a>
              <div className="flex items-start gap-2.5 text-ivory-100/80">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" /> 123 Edgware Road, London, W2 2DZ
              </div>
              <div className="flex items-start gap-2.5 text-ivory-100/80">
                <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" /> Mon–Sat: 9am – 6pm
              </div>
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-display font-semibold text-white text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="text-sm text-ivory-100/70 hover:text-gold-500 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory-100/60 text-center md:text-left">
            © {new Date().getFullYear()} Safa & Marwa Hajj & Umrah Travel. All rights reserved.
            <span className="block md:inline md:ml-2">Package details and availability are subject to confirmation.</span>
          </p>
          <p className="text-xs text-ivory-100/50">
            An inquiry is not a confirmed booking.
          </p>
        </div>
      </Container>
    </footer>
  );
}
