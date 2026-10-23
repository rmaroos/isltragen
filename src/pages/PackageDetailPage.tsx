import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ChevronRight, MapPin, Calendar, Clock, Star, Check, X,
  Hotel, Plane, Car, Utensils, FileCheck, Phone, ArrowLeft,
  ChevronDown, ShoppingBag, ShieldCheck, HelpCircle
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container, Button, Badge } from '@/components/ui';
import { PackageCard } from '@/components/PackageCard';
import { InquiryForm } from '@/components/InquiryForm';
import { usePackage, useRelatedPackages } from '@/hooks/useData';
import { formatPrice, formatDateRange, AVAILABILITY_LABELS, CATEGORY_LABELS, CATEGORY_ROUTES } from '@/types';

export function PackageDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { pkg, loading, error } = usePackage(slug);
  const { related } = useRelatedPackages(pkg);
  const [activeImage, setActiveImage] = useState(0);
  const [openItinerary, setOpenItinerary] = useState<number | null>(0);
  const [showInquiry, setShowInquiry] = useState(false);

  if (loading) {
    return (
      <Container className="py-20">
        <div className="animate-pulse">
          <div className="h-6 w-48 rounded skeleton mb-6" />
          <div className="h-80 rounded-2xl skeleton mb-8" />
          <div className="h-8 w-2/3 rounded skeleton mb-4" />
          <div className="h-4 w-full rounded skeleton mb-2" />
          <div className="h-4 w-3/4 rounded skeleton mb-8" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-32 rounded-xl skeleton" />
            <div className="h-32 rounded-xl skeleton" />
            <div className="h-32 rounded-xl skeleton" />
          </div>
        </div>
      </Container>
    );
  }

  if (error || !pkg) {
    return (
      <Container className="py-20 text-center">
        <h1 className="text-2xl font-display font-bold text-charcoal-950 mb-4">Package not found</h1>
        <p className="text-charcoal-700 mb-6">The package you are looking for may have been removed or is no longer available.</p>
        <Button onClick={() => navigate('/packages')} variant="primary">Browse all packages</Button>
      </Container>
    );
  }

  const avail = AVAILABILITY_LABELS[pkg.availability_status] || AVAILABILITY_LABELS['available'];
  const categoryLabel = CATEGORY_LABELS[pkg.category] || pkg.category;
  const gallery = pkg.gallery && pkg.gallery.length > 0 ? pkg.gallery : [pkg.hero_image];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-ivory-100 border-b border-neutral-200">
        <Container className="py-3">
          <nav className="flex items-center gap-1.5 text-sm text-charcoal-700 overflow-hidden">
            <Link to="/" className="hover:text-emerald-900 whitespace-nowrap">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/packages" className="hover:text-emerald-900 whitespace-nowrap">Packages</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to={CATEGORY_ROUTES[pkg.category] || '/packages'} className="hover:text-emerald-900 whitespace-nowrap">{categoryLabel}</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-charcoal-950 truncate">{pkg.title}</span>
          </nav>
        </Container>
      </div>

      {/* Gallery */}
      <section className="py-6 lg:py-8">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            {/* Main gallery */}
            <div>
              <div className="rounded-2xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[460px] shadow-card mb-3">
                <img
                  src={gallery[activeImage]}
                  alt={`${pkg.title} — image ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              {gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {gallery.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all ${
                        activeImage === i ? 'border-emerald-900 shadow-soft' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Sticky booking panel */}
            <aside className="lg:order-last">
              <div className="lg:sticky lg:top-24 bg-white rounded-2xl border border-neutral-200 shadow-card p-6">
                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 mb-3">
                    {categoryLabel}
                  </span>
                  <Badge label={avail.label} color={avail.color} bgColor={avail.bgColor} />
                </div>

                <div className="mb-5 pb-5 border-b border-neutral-200">
                  <p className="text-sm text-neutral-500 mb-1">Starting from</p>
                  <p className="text-3xl font-display font-bold text-emerald-900">{formatPrice(pkg.price_from, pkg.currency)}</p>
                  <p className="text-sm text-neutral-500">{pkg.price_basis}</p>
                </div>

                <div className="space-y-3 mb-5">
                  <FactRow icon={MapPin} label="Departure" value={pkg.departure_city} />
                  <FactRow icon={Calendar} label="Dates" value={formatDateRange(pkg.start_date, pkg.end_date)} />
                  <FactRow icon={Clock} label="Duration" value={`${pkg.duration_days} days`} />
                  <FactRow icon={Hotel} label="Hotel" value={pkg.hotel_category} />
                </div>

                <button
                  onClick={() => setShowInquiry(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 shadow-soft transition-all mb-3"
                >
                  Ask About This Package
                </button>
                <a
                  href="tel:+442012345678"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-emerald-900 text-emerald-900 font-semibold hover:bg-emerald-100 transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call an advisor
                </a>

                <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                  An inquiry is not a confirmed booking. Availability and final pricing are subject to confirmation by our team.
                </p>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      {/* Main content */}
      <Container className="pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">
          <div className="lg:order-first">
            {/* Title and description */}
            <div className="mb-10">
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-charcoal-950 mb-4 leading-tight">{pkg.title}</h1>
              <p className="text-lg text-charcoal-700 leading-relaxed">{pkg.short_description}</p>
            </div>

            {/* Overview */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              <InfoCard icon={Clock} label="Duration" value={`${pkg.duration_days} days`} />
              <InfoCard icon={Calendar} label="Departure" value={formatDateRange(pkg.start_date, pkg.end_date)} />
              <InfoCard icon={MapPin} label="From" value={pkg.departure_city} />
              <InfoCard icon={Star} label="Hotel" value={pkg.hotel_category} />
            </div>

            {/* Long description */}
            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-4">About this package</h2>
              <p className="text-charcoal-700 leading-relaxed whitespace-pre-line">{pkg.long_description}</p>
            </section>

            {/* Inclusions & Exclusions */}
            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-5">What's included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-emerald-100/40 rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-emerald-900 mb-3 flex items-center gap-2">
                    <Check className="w-5 h-5" /> Inclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                        <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-ivory-100 rounded-2xl p-5">
                  <h3 className="font-display font-semibold text-charcoal-950 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5 text-error" /> Exclusions
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                        <X className="w-4 h-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Itinerary */}
            {pkg.itinerary && pkg.itinerary.length > 0 && (
              <section className="mb-10">
                <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-5">Day-by-day itinerary</h2>
                <div className="space-y-3">
                  {pkg.itinerary.map((day) => (
                    <div key={day.day} className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
                      <button
                        onClick={() => setOpenItinerary(openItinerary === day.day ? null : day.day)}
                        className="w-full flex items-center justify-between p-4 text-left hover:bg-ivory-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-9 h-9 rounded-lg bg-emerald-900 text-white font-display font-bold flex items-center justify-center text-sm flex-shrink-0">
                            {day.day}
                          </span>
                          <span className="font-medium text-charcoal-950">{day.title}</span>
                        </div>
                        <ChevronDown className={`w-5 h-5 text-charcoal-700 flex-shrink-0 transition-transform ${openItinerary === day.day ? 'rotate-180' : ''}`} />
                      </button>
                      {openItinerary === day.day && (
                        <div className="px-4 pb-4 pl-16 text-sm text-charcoal-700 leading-relaxed animate-fade-in">
                          {day.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Hotel info */}
            <section className="mb-10">
              <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-5">Accommodation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.hotel_name_makkah && (
                  <div className="bg-white rounded-2xl border border-neutral-200 p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <Hotel className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-charcoal-950">{pkg.hotel_name_makkah}</h3>
                        <p className="text-xs text-gold-600 font-medium">{pkg.hotel_category} · Makkah</p>
                      </div>
                    </div>
                    {pkg.hotel_distance_makkah && (
                      <p className="text-sm text-charcoal-700 mt-2 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold-600" /> {pkg.hotel_distance_makkah}
                      </p>
                    )}
                  </div>
                )}
                {pkg.hotel_name_madinah && (
                  <div className="bg-white rounded-2xl border border-neutral-200 p-5">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                        <Hotel className="w-5 h-5 text-emerald-800" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-charcoal-950">{pkg.hotel_name_madinah}</h3>
                        <p className="text-xs text-gold-600 font-medium">{pkg.hotel_category} · Madinah</p>
                      </div>
                    </div>
                    {pkg.hotel_distance_madinah && (
                      <p className="text-sm text-charcoal-700 mt-2 flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-gold-600" /> {pkg.hotel_distance_madinah}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </section>

            {/* Service icons */}
            <section className="mb-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <ServiceIcon icon={Plane} label="Flights included" />
                <ServiceIcon icon={Car} label="Transfers" />
                <ServiceIcon icon={Utensils} label="Meals" />
                <ServiceIcon icon={FileCheck} label="Visa assistance" />
              </div>
            </section>

            {/* Availability note */}
            <section className="mb-10">
              <div className="bg-ivory-100 rounded-2xl p-5 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-info flex-shrink-0 mt-0.5" />
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  Availability is subject to confirmation by the agency and its suppliers. The price shown is indicative and may vary based on room occupancy, travel dates and currency fluctuations. Please speak with our team before making any commitments.
                </p>
              </div>
            </section>

            {/* Back link */}
            <Link to={CATEGORY_ROUTES[pkg.category] || '/packages'} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-emerald-800">
              <ArrowLeft className="w-4 h-4" /> Back to {categoryLabel} packages
            </Link>
          </div>
        </div>
      </Container>

      {/* Related packages */}
      {related.length > 0 && (
        <section className="py-12 lg:py-16 bg-ivory-100">
          <Container>
            <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-6">Related packages</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <PackageCard key={p.id} pkg={p} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Inquiry modal */}
      {showInquiry && (
        <InquiryForm
          packageId={pkg.id}
          packageTitle={pkg.title}
          onClose={() => setShowInquiry(false)}
        />
      )}

      {/* Mobile sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-neutral-200 p-3 shadow-elevated">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-neutral-500">From</p>
            <p className="text-xl font-display font-bold text-emerald-900">{formatPrice(pkg.price_from, pkg.currency)}</p>
          </div>
          <button
            onClick={() => setShowInquiry(true)}
            className="flex-1 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-emerald-900 text-white font-semibold"
          >
            Inquire now
          </button>
        </div>
      </div>
    </>
  );
}

function FactRow({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <Icon className="w-4 h-4 text-gold-600 flex-shrink-0" />
      <div className="min-w-0">
        <p className="text-xs text-neutral-500">{label}</p>
        <p className="text-sm font-medium text-charcoal-950 truncate">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl border border-neutral-200 p-4 text-center">
      <Icon className="w-5 h-5 text-emerald-800 mx-auto mb-2" />
      <p className="text-xs text-neutral-500 mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-charcoal-950">{value}</p>
    </div>
  );
}

function ServiceIcon({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <div className="flex flex-col items-center text-center p-3">
      <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-2">
        <Icon className="w-6 h-6 text-emerald-800" strokeWidth={1.5} />
      </div>
      <p className="text-xs font-medium text-charcoal-700">{label}</p>
    </div>
  );
}
