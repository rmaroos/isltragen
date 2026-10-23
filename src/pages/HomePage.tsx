import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, ArrowRight, Phone, ShieldCheck, FileCheck, MapPin,
  Compass, BookOpen, Moon, Users, HelpCircle, Star, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Container, ButtonLink, SectionHeading, Badge } from '@/components/ui';
import { PackageCard } from '@/components/PackageCard';
import { usePackages, useArticles } from '@/hooks/useData';

export function HomePage() {
  const navigate = useNavigate();
  const { packages, loading } = usePackages({ featured: true });
  const { articles } = useArticles();

  const [finder, setFinder] = useState({
    type: '',
    departureCity: '',
    month: '',
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (finder.type) params.set('category', finder.type);
    if (finder.departureCity) params.set('city', finder.departureCity);
    if (finder.month) params.set('month', finder.month);
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[600px] lg:min-h-[680px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="The Kaaba at Masjid al-Haram in Makkah"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        </div>

        <Container className="relative z-10 pt-20 pb-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-gold-500 mb-4 animate-fade-in-up">
              Your journey, thoughtfully arranged
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-5 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Your Sacred Journey,<br />Thoughtfully Arranged.
            </h1>
            <p className="text-lg text-ivory-100/90 leading-relaxed max-w-xl mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore Hajj and Umrah travel options with clear package details, practical guidance and support from our travel team.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link
                to="/packages"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 text-white font-semibold hover:bg-gold-600 shadow-card transition-all"
              >
                Explore Packages
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                Speak to an Advisor
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Package Finder */}
      <section className="relative -mt-12 z-20 mb-20 lg:mb-28">
        <Container>
          <form
            onSubmit={handleSearch}
            className="bg-white rounded-2xl shadow-elevated p-6 lg:p-7 grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Pilgrimage type</label>
              <select
                value={finder.type}
                onChange={(e) => setFinder({ ...finder, type: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
              >
                <option value="">All types</option>
                <option value="umrah">Umrah</option>
                <option value="hajj">Hajj</option>
                <option value="ramadan-umrah">Ramadan Umrah</option>
                <option value="ziyarat">Ziyarat</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Departure city</label>
              <select
                value={finder.departureCity}
                onChange={(e) => setFinder({ ...finder, departureCity: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
              >
                <option value="">Any city</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Birmingham">Birmingham</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Travel month</label>
              <select
                value={finder.month}
                onChange={(e) => setFinder({ ...finder, month: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
              >
                <option value="">Any month</option>
                <option value="2026-11">November 2026</option>
                <option value="2026-12">December 2026</option>
                <option value="2027-01">January 2027</option>
                <option value="2027-02">February 2027</option>
                <option value="2027-03">March 2027</option>
                <option value="2027-06">June 2027</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors"
              >
                <Search className="w-4 h-4" />
                Search packages
              </button>
            </div>
          </form>
        </Container>
      </section>

      {/* Featured Packages */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <SectionHeading
              eyebrow="Featured Packages"
              title="Explore our most sought-after journeys"
              subtitle="Each package includes clear details on what's included, accommodation, and pricing — so you can decide with confidence."
            />
            <Link to="/packages" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-emerald-800 whitespace-nowrap">
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft">
                  <div className="h-56 skeleton" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-3/4 rounded skeleton" />
                    <div className="h-4 w-1/2 rounded skeleton" />
                    <div className="h-4 w-full rounded skeleton" />
                    <div className="h-8 w-1/3 rounded skeleton" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          )}

          <div className="sm:hidden mt-6">
            <Link to="/packages" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900">
              View all packages <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-16 lg:py-24 bg-ivory-100">
        <Container>
          <SectionHeading
            center
            eyebrow="Why travel with us"
            title="Plan with clarity and confidence"
            subtitle="Understand the details before you decide. Explore what's included, review the travel arrangements and speak with our team about the options that suit your needs."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              { icon: FileCheck, title: 'Clear package inclusions', desc: 'Every package lists what is and isn\'t included, so there are no surprises.' },
              { icon: Phone, title: 'Direct support route', desc: 'Speak with a real advisor at every stage, from inquiry to departure.' },
              { icon: ShieldCheck, title: 'Transparent booking steps', desc: 'Know exactly what happens after you submit an inquiry.' },
              { icon: MapPin, title: 'Verified agency information', desc: 'Our contact details, office and policies are easy to find.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-shadow">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-800" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-charcoal-950 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionHeading
            center
            eyebrow="How it works"
            title="Your journey, step by step"
            subtitle="From exploring packages to preparing for departure, we guide you through each stage."
          />
          <div className="hidden lg:flex items-start justify-between gap-2 mt-12">
            {[
              { num: '01', title: 'Explore', desc: 'Browse available packages and compare dates, prices and inclusions.' },
              { num: '02', title: 'Discuss', desc: 'Share your travel preferences with our team and ask any questions.' },
              { num: '03', title: 'Review & confirm', desc: 'Review the details with an advisor and confirm through our approved process.' },
              { num: '04', title: 'Prepare', desc: 'Receive your travel documents, itinerary and pre-departure guidance.' },
              { num: '05', title: 'Travel', desc: 'Travel with the information and support provided throughout your journey.' },
            ].map((step, i) => (
              <div key={step.num} className="flex-1 relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-900 text-white font-display font-bold flex items-center justify-center text-lg mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display font-semibold text-charcoal-950 mb-2">{step.title}</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
                {i < 4 && (
                  <div className="absolute top-7 left-[55%] w-full h-px bg-neutral-200" />
                )}
              </div>
            ))}
          </div>
          <div className="lg:hidden space-y-4 mt-8">
            {[
              { num: '01', title: 'Explore', desc: 'Browse available packages and compare dates, prices and inclusions.' },
              { num: '02', title: 'Discuss', desc: 'Share your travel preferences with our team and ask any questions.' },
              { num: '03', title: 'Review & confirm', desc: 'Review the details with an advisor and confirm through our approved process.' },
              { num: '04', title: 'Prepare', desc: 'Receive your travel documents, itinerary and pre-departure guidance.' },
              { num: '05', title: 'Travel', desc: 'Travel with the information and support provided throughout your journey.' },
            ].map((step) => (
              <div key={step.num} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-2xl bg-emerald-900 text-white font-display font-bold flex items-center justify-center text-sm flex-shrink-0">
                  {step.num}
                </div>
                <div className="pt-1">
                  <h3 className="font-display font-semibold text-charcoal-950 mb-1">{step.title}</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Cards */}
      <section className="py-12 lg:py-16 bg-emerald-100/40">
        <Container>
          <SectionHeading
            eyebrow="Our services"
            title="Find the right journey for you"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Compass, title: 'Umrah', desc: 'Year-round Umrah packages with flexible dates, durations and hotel categories.', to: '/umrah' },
              { icon: Star, title: 'Hajj', desc: 'Comprehensive Hajj packages subject to official registration and allocation.', to: '/hajj' },
              { icon: Moon, title: 'Ramadan Umrah', desc: 'Experience the blessings of Ramadan with specially planned departures.', to: '/ramadan-umrah' },
              { icon: Users, title: 'Group & Family', desc: 'Tailored packages for families and groups with flexible arrangements.', to: '/umrah/family' },
              { icon: MapPin, title: 'Ziyarat', desc: 'Guided tours of significant historical and religious sites.', to: '/ziyarat' },
              { icon: BookOpen, title: 'Travel Guides', desc: 'Practical preparation guides, checklists and answers to common questions.', to: '/travel-guide' },
            ].map((service) => (
              <Link
                key={service.title}
                to={service.to}
                className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-900 transition-colors">
                  <service.icon className="w-6 h-6 text-emerald-800 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-lg text-charcoal-950 mb-2">{service.title}</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-3">{service.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-emerald-900 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Destination Feature */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[480px] shadow-card">
              <img
                src="https://images.pexels.com/photos/20277839/pexels-photo-20277839.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="The Prophet's Mosque in Madinah"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">The two holy cities</p>
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-charcoal-950 leading-tight mb-4">
                Makkah and Madinah,<br />at the heart of your journey
              </h2>
              <p className="text-lg text-charcoal-700 leading-relaxed mb-6">
                Makkah is home to the Kaaba, the holiest site in Islam, where pilgrims perform Tawaf and Sa'i. Madinah is the city of the Prophet Muhammad (peace be upon him), where the Prophet's Mosque offers a place of profound peace and reflection.
              </p>
              <p className="text-charcoal-700 leading-relaxed mb-6">
                Our packages include guided Ziyarat tours in both cities, visiting significant historical and religious sites with experienced guides who enrich your understanding of these sacred places.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink to="/ziyarat" variant="secondary">Explore Ziyarat</ButtonLink>
                <ButtonLink to="/travel-guide/makkah-madinah-overview" variant="tertiary">Read the guide</ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Travel Guides */}
      {articles.length > 0 && (
        <section className="py-12 lg:py-16 bg-ivory-100">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <SectionHeading
                eyebrow="Travel Guides"
                title="Prepare with confidence"
                subtitle="Practical guides to help you understand the process, pack wisely and travel with peace of mind."
              />
              <Link to="/travel-guide" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-emerald-800 whitespace-nowrap">
                All guides <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.slice(0, 3).map((article) => (
                <Link
                  key={article.id}
                  to={`/travel-guide/${article.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5"
                >
                  <div className="h-44 overflow-hidden">
                    <img src={article.hero_image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium text-gold-600 mb-2">{article.reading_time_minutes} min read</p>
                    <h3 className="font-display font-semibold text-charcoal-950 mb-2 group-hover:text-emerald-900 transition-colors">{article.title}</h3>
                    <p className="text-sm text-charcoal-700 leading-relaxed line-clamp-2">{article.summary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* FAQ teaser */}
      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            center
            eyebrow="Common questions"
            title="Questions pilgrims often ask"
          />
          <div className="max-w-3xl mx-auto space-y-3">
            {[
              { q: 'What is included in an Umrah package?', a: 'Our packages typically include return flights, visa assistance, hotel accommodation, ground transfers, meals and guided Ziyarat tours. Specific inclusions vary by package.' },
              { q: 'How do I submit a booking request?', a: 'You can submit an inquiry through any package page, the Request a Quote form, or by contacting us directly. An inquiry is not a confirmed booking.' },
              { q: 'Can my family travel together?', a: 'Yes. We offer family-friendly packages with family rooms and child-friendly options. Let us know your family details when inquiring.' },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-xl border border-neutral-200 overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-charcoal-950 list-none">
                  {faq.q}
                  <HelpCircle className="w-5 h-5 text-gold-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-charcoal-700 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <ButtonLink to="/faqs" variant="secondary">View all FAQs</ButtonLink>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-emerald" />
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative text-center">
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
            Let's plan your journey with clarity.
          </h2>
          <p className="text-lg text-ivory-100/80 max-w-xl mx-auto mb-8">
            Tell us what you are looking for and our team can help you understand the available options.
          </p>
          <Link
            to="/request-a-quote"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gold-500 text-white font-semibold text-lg hover:bg-gold-600 shadow-card transition-all"
          >
            Speak to an Advisor
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-6 text-sm text-ivory-100/60 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> An inquiry is not a confirmed booking
          </p>
        </Container>
      </section>
    </>
  );
}
