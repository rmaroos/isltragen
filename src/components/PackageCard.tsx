import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';
import type { Package } from '@/types';
import { formatPrice, formatDateRange, AVAILABILITY_LABELS, CATEGORY_LABELS } from '@/types';

export function PackageCard({ pkg }: { pkg: Package }) {
  const avail = AVAILABILITY_LABELS[pkg.availability_status] || AVAILABILITY_LABELS['available'];
  const categoryLabel = CATEGORY_LABELS[pkg.category] || pkg.category;

  return (
    <Link
      to={`/packages/${pkg.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden flex-shrink-0">
        <img
          src={pkg.hero_image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-emerald-900">
            {categoryLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
            style={{ color: avail.color, backgroundColor: 'rgba(255,255,255,0.92)' }}
          >
            {avail.label}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg text-charcoal-950 leading-snug mb-3 group-hover:text-emerald-900 transition-colors">
          {pkg.title}
        </h3>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-charcoal-700 mb-3">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
            {pkg.departure_city}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-gold-600 flex-shrink-0" />
            {formatDateRange(pkg.start_date, pkg.end_date)}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
            {pkg.duration_days} days
          </span>
        </div>

        <p className="text-sm text-charcoal-700 leading-relaxed mb-4 line-clamp-2">
          {pkg.short_description}
        </p>

        {/* Top inclusions */}
        {pkg.inclusions.length > 0 && (
          <ul className="space-y-1.5 mb-4">
            {pkg.inclusions.slice(0, 3).map((inc, i) => (
              <li key={i} className="text-xs text-charcoal-700 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-1.5 flex-shrink-0" />
                {inc}
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-auto pt-4 border-t border-neutral-200 flex items-end justify-between">
          <div>
            <p className="text-xs text-neutral-500 mb-0.5">From</p>
            <p className="text-2xl font-display font-bold text-emerald-900">
              {formatPrice(pkg.price_from, pkg.currency)}
            </p>
            <p className="text-xs text-neutral-500">{pkg.price_basis}</p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 group-hover:gap-2.5 transition-all">
            View details
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
