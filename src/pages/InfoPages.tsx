import { Link } from 'react-router-dom';
import { ChevronRight, Compass, ShieldCheck, Heart, Users, Phone, Mail, MapPin, Star, FileText } from 'lucide-react';
import { Container, SectionHeading, ButtonLink } from '@/components/ui';

export function AboutPage() {
  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Support for your journey, from planning to departure.</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">We aim to make pilgrimage travel easier to understand through clear information, practical planning and responsive assistance.</p>
        </Container>
      </section>

      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative rounded-3xl overflow-hidden h-[400px] shadow-card">
            <img src="https://images.pexels.com/photos/6476996/pexels-photo-6476996.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Al-Masjid an-Nabawi in Madinah" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionHeading eyebrow="Our mission" title="Clarity, care and honest guidance" />
            <p className="text-charcoal-700 leading-relaxed mb-4">
              We believe that planning a sacred journey should not be confusing or stressful. Our approach is built on transparent package details, honest communication, and a genuine commitment to helping each pilgrim make informed decisions.
            </p>
            <p className="text-charcoal-700 leading-relaxed mb-4">
              From the first inquiry to the day of departure, our team walks alongside you — explaining what's included, answering your questions, and making sure you have the information you need every step of the way.
            </p>
            <p className="text-charcoal-700 leading-relaxed">
              We do not make promises we cannot substantiate. We do not use fake urgency or invented credentials. What we offer is clear information, well-organized packages, and a team that cares about getting the details right.
            </p>
          </div>
        </div>
      </Container>

      <section className="py-12 lg:py-16 bg-ivory-100">
        <Container>
          <SectionHeading center eyebrow="Our values" title="What we stand for" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              { icon: ShieldCheck, title: 'Trust before persuasion', desc: 'We never make a claim we cannot substantiate. Trust is built through honest information.' },
              { icon: FileText, title: 'Transparent packages', desc: 'Every package clearly states what is included, excluded, and subject to confirmation.' },
              { icon: Heart, title: 'Respectful service', desc: 'We treat every pilgrim with respect and patience, regardless of their experience or budget.' },
              { icon: Users, title: 'Human support', desc: 'A real advisor is always available to answer your questions and guide your planning.' },
              { icon: Compass, title: 'Accurate information', desc: 'We keep our content reviewed and up to date, especially for time-sensitive travel guidance.' },
              { icon: Star, title: 'Continuous improvement', desc: 'We listen to feedback and work to improve our service with every journey we arrange.' },
            ].map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-emerald-800" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-charcoal-950 mb-2">{value.title}</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading center eyebrow="Contact" title="Speak with our team" subtitle="Have questions or ready to start planning? We're here to help." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mt-8">
            <a href="tel:+442012345678" className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-soft transition-shadow">
              <Phone className="w-6 h-6 text-emerald-800 mb-3" />
              <p className="text-xs text-neutral-500 mb-1">Phone</p>
              <p className="font-medium text-charcoal-950">020 1234 5678</p>
            </a>
            <a href="mailto:info@safamarwa-travel.co.uk" className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-neutral-200 hover:shadow-soft transition-shadow">
              <Mail className="w-6 h-6 text-emerald-800 mb-3" />
              <p className="text-xs text-neutral-500 mb-1">Email</p>
              <p className="font-medium text-charcoal-950 break-all">info@safamarwa-travel.co.uk</p>
            </a>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-neutral-200">
              <MapPin className="w-6 h-6 text-emerald-800 mb-3" />
              <p className="text-xs text-neutral-500 mb-1">Office</p>
              <p className="font-medium text-charcoal-950">123 Edgware Road, London</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <ButtonLink to="/contact" variant="primary">Contact us</ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}

export function ReviewsPage() {
  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Customer Reviews</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">Genuine feedback from pilgrims who have traveled with us, shared with their permission.</p>
        </Container>
      </section>

      <Container className="py-12 lg:py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-ivory-100 rounded-2xl p-6 text-center mb-10">
            <p className="text-charcoal-700 leading-relaxed">
              We believe in honest, verified feedback. Reviews are published only with the customer's permission and reflect their genuine experience. We do not use fabricated testimonials or fake star ratings.
            </p>
          </div>

          <div className="text-center py-12">
            <Star className="w-12 h-12 text-gold-500 mx-auto mb-4" strokeWidth={1} />
            <h2 className="text-xl font-display font-semibold text-charcoal-950 mb-3">Reviews coming soon</h2>
            <p className="text-charcoal-700 max-w-md mx-auto mb-6">
              We are collecting verified reviews from pilgrims who have traveled with us. Please check back soon, or contact us to speak directly with travelers who have used our services.
            </p>
            <ButtonLink to="/contact" variant="primary">Speak to an advisor</ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}

interface PolicyPageProps {
  title: string;
  content: { heading: string; body: string }[];
}

export function PolicyPage({ title, content }: PolicyPageProps) {
  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold">{title}</h1>
        </Container>
      </section>

      <Container className="py-10 lg:py-14">
        <div className="max-w-3xl">
          <div className="bg-ivory-100 rounded-2xl p-5 mb-8">
            <p className="text-sm text-charcoal-700 leading-relaxed">
              This page provides general information and is not legal advice. Policy content must be adapted to the agency's actual jurisdiction and contracts. Please review carefully and contact us with any questions.
            </p>
          </div>
          {content.map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-display font-bold text-charcoal-950 mb-3">{section.heading}</h2>
              <p className="text-charcoal-700 leading-relaxed">{section.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export function NotFoundPage() {
  return (
    <Container className="py-20 lg:py-28 text-center">
      <div className="max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-6">
          <Compass className="w-8 h-8 text-emerald-800" strokeWidth={1.5} />
        </div>
        <h1 className="text-4xl font-display font-bold text-charcoal-950 mb-3">Page not found</h1>
        <p className="text-charcoal-700 mb-6">The page you're looking for doesn't exist or may have been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <ButtonLink to="/" variant="primary">Back to home</ButtonLink>
          <ButtonLink to="/packages" variant="secondary">Browse packages</ButtonLink>
        </div>
      </div>
    </Container>
  );
}
