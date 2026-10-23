import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight, Phone } from 'lucide-react';
import { Container, ButtonLink, SectionHeading } from '@/components/ui';
import { PackageCard } from '@/components/PackageCard';
import { usePackages } from '@/hooks/useData';
import type { Package } from '@/types';

interface CategoryPageProps {
  category: string;
  title: string;
  headline: string;
  description: string;
  heroImage: string;
  ctaText: string;
  ctaLink: string;
  features?: { title: string; desc: string }[];
  children?: React.ReactNode;
}

export function CategoryPage({
  category,
  title,
  headline,
  description,
  heroImage,
  ctaText,
  ctaLink,
  features,
  children,
}: CategoryPageProps) {
  const { packages, loading } = usePackages({ category });

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        </div>
        <Container className="relative z-10 pt-20 pb-12 lg:pb-16">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight mb-4 max-w-2xl">{headline}</h1>
          <p className="text-lg text-ivory-100/85 max-w-xl leading-relaxed mb-6">{description}</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={ctaLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gold-500 text-white font-semibold hover:bg-gold-600 shadow-card transition-all"
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 transition-all"
            >
              <Phone className="w-4 h-4" /> Speak to an Advisor
            </Link>
          </div>
        </Container>
      </section>

      {/* Features */}
      {features && features.length > 0 && (
        <section className="py-12 lg:py-16 bg-ivory-100">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => (
                <div key={f.title} className="bg-white rounded-2xl p-6 shadow-soft">
                  <h3 className="font-display font-semibold text-charcoal-950 mb-2">{f.title}</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {children}

      {/* Packages */}
      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow={`Available ${title} packages`}
            title="Browse current departures"
            subtitle="Review the dates, prices and inclusions, then contact our team to discuss the details."
          />
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft">
                  <div className="h-56 skeleton" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 w-3/4 rounded skeleton" />
                    <div className="h-4 w-1/2 rounded skeleton" />
                    <div className="h-8 w-1/3 rounded skeleton" />
                  </div>
                </div>
              ))}
            </div>
          ) : packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg: Package) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-neutral-200">
              <p className="text-charcoal-700 mb-4">No {title.toLowerCase()} packages are currently listed. Please check back soon or contact us for a custom quote.</p>
              <ButtonLink to="/request-a-quote" variant="primary">Request a custom quote</ButtonLink>
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-emerald" />
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-white mb-3">Have questions about {title.toLowerCase()}?</h2>
          <p className="text-ivory-100/80 max-w-lg mx-auto mb-6">Our team is ready to help you understand the options and plan your journey with clarity.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/request-a-quote" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 text-white font-semibold hover:bg-gold-600 shadow-card transition-all">
              Speak to an Advisor <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/faqs" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 backdrop-blur-md text-white font-semibold border border-white/30 hover:bg-white/20 transition-all">
              Read FAQs
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
