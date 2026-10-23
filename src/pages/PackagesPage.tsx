import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal, X, MapPin, Package as PackageIcon, ChevronRight } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { PackageCard } from '@/components/PackageCard';
import { usePackages } from '@/hooks/useData';
import { CATEGORY_LABELS } from '@/types';
import type { Package } from '@/types';

export function PackagesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { packages, loading } = usePackages();

  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filters = useMemo(() => ({
    category: searchParams.get('category') || '',
    city: searchParams.get('city') || '',
    month: searchParams.get('month') || '',
    sort: searchParams.get('sort') || 'newest',
  }), [searchParams]);

  useEffect(() => {
    const q = searchParams.get('q') || '';
    setSearchQuery(q);
  }, [searchParams]);

  const updateFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) newParams.set(key, value);
    else newParams.delete(key);
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSearchQuery('');
  };

  const hasActiveFilters = filters.category || filters.city || filters.month || searchQuery;

  const filteredPackages = useMemo(() => {
    let result: Package[] = [...packages];

    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.city) {
      result = result.filter((p) => p.departure_city === filters.city);
    }
    if (filters.month) {
      result = result.filter((p) => p.start_date.startsWith(filters.month));
    }
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) =>
        p.title.toLowerCase().includes(q) ||
        p.short_description.toLowerCase().includes(q) ||
        p.departure_city.toLowerCase().includes(q)
      );
    }

    switch (filters.sort) {
      case 'price-low':
        result.sort((a, b) => a.price_from - b.price_from);
        break;
      case 'price-high':
        result.sort((a, b) => b.price_from - a.price_from);
        break;
      case 'duration':
        result.sort((a, b) => a.duration_days - b.duration_days);
        break;
      default:
        result.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
    }

    return result;
  }, [packages, filters, searchQuery]);

  const activeFilterCount = [filters.category, filters.city, filters.month].filter(Boolean).length;

  return (
    <>
      {/* Page header */}
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Packages</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">All Packages</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">
            Browse our Hajj, Umrah and Ramadan Umrah packages. Compare dates, prices and inclusions, then speak with our team to find the right journey for you.
          </p>
        </Container>
      </section>

      <Container className="py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white rounded-2xl border border-neutral-200 p-5 shadow-soft">
              <h3 className="font-display font-semibold text-charcoal-950 mb-4 flex items-center gap-2">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </h3>

              <FilterGroup label="Pilgrimage type">
                <FilterOption label="All types" value="" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
                <FilterOption label="Umrah" value="umrah" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
                <FilterOption label="Hajj" value="hajj" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
                <FilterOption label="Ramadan Umrah" value="ramadan-umrah" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
              </FilterGroup>

              <FilterGroup label="Departure city">
                <FilterOption label="Any city" value="" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
                <FilterOption label="London" value="London" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
                <FilterOption label="Manchester" value="Manchester" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
                <FilterOption label="Birmingham" value="Birmingham" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
              </FilterGroup>

              <FilterGroup label="Travel month">
                <FilterOption label="Any month" value="" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Nov 2026" value="2026-11" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Dec 2026" value="2026-12" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Jan 2027" value="2027-01" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Feb 2027" value="2027-02" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Mar 2027" value="2027-03" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
                <FilterOption label="Jun 2027" value="2027-06" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              </FilterGroup>

              {hasActiveFilters && (
                <button onClick={clearFilters} className="mt-4 text-sm font-medium text-error hover:underline">
                  Clear all filters
                </button>
              )}
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1">
            {/* Search + sort bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search packages..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    const newParams = new URLSearchParams(searchParams);
                    if (e.target.value) newParams.set('q', e.target.value);
                    else newParams.delete('q');
                    setSearchParams(newParams, { replace: true });
                  }}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 bg-white text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
                />
              </div>
              <select
                value={filters.sort}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="px-4 py-3 rounded-xl border border-neutral-200 bg-white text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
              >
                <option value="newest">Newest first</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="duration">Duration: Short to Long</option>
              </select>
              <button
                onClick={() => setShowFilters(true)}
                className="lg:hidden inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-neutral-200 bg-white text-charcoal-950 font-medium"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
              </button>
            </div>

            {/* Active filter chips */}
            {hasActiveFilters && (
              <div className="flex flex-wrap items-center gap-2 mb-4">
                {filters.category && (
                  <FilterChip label={CATEGORY_LABELS[filters.category] || filters.category} onRemove={() => updateFilter('category', '')} />
                )}
                {filters.city && (
                  <FilterChip label={filters.city} onRemove={() => updateFilter('city', '')} />
                )}
                {filters.month && (
                  <FilterChip label={filters.month} onRemove={() => updateFilter('month', '')} />
                )}
                {searchQuery && (
                  <FilterChip label={`"${searchQuery}"`} onRemove={() => { setSearchQuery(''); updateFilter('q', ''); }} />
                )}
                <button onClick={clearFilters} className="text-sm font-medium text-error hover:underline ml-1">
                  Clear all
                </button>
              </div>
            )}

            {/* Results count */}
            <p className="text-sm text-charcoal-700 mb-5">
              {loading ? 'Loading...' : `${filteredPackages.length} package${filteredPackages.length !== 1 ? 's' : ''} found`}
            </p>

            {/* Packages grid */}
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
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
            ) : filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <PackageCard key={pkg.id} pkg={pkg} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200">
                <PackageIcon className="w-12 h-12 text-neutral-500 mx-auto mb-4" strokeWidth={1} />
                <h3 className="font-display font-semibold text-lg text-charcoal-950 mb-2">No packages match your filters</h3>
                <p className="text-charcoal-700 mb-5 max-w-md mx-auto">Try adjusting your filters or contact our team for a custom quote tailored to your needs.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button onClick={clearFilters} variant="secondary">Clear filters</Button>
                  <Link to="/request-a-quote" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors">
                    Request a custom quote
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* Mobile filter drawer */}
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-950/50 animate-fade-in" onClick={() => setShowFilters(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-elevated overflow-y-auto animate-slide-in-right p-5">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display font-semibold text-lg text-charcoal-950">Filters</h3>
              <button onClick={() => setShowFilters(false)} className="p-2 rounded-lg hover:bg-neutral-200">
                <X className="w-5 h-5" />
              </button>
            </div>

            <FilterGroup label="Pilgrimage type">
              <FilterOption label="All types" value="" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
              <FilterOption label="Umrah" value="umrah" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
              <FilterOption label="Hajj" value="hajj" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
              <FilterOption label="Ramadan Umrah" value="ramadan-umrah" currentValue={filters.category} onChange={(v) => updateFilter('category', v)} />
            </FilterGroup>

            <FilterGroup label="Departure city">
              <FilterOption label="Any city" value="" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
              <FilterOption label="London" value="London" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
              <FilterOption label="Manchester" value="Manchester" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
              <FilterOption label="Birmingham" value="Birmingham" currentValue={filters.city} onChange={(v) => updateFilter('city', v)} />
            </FilterGroup>

            <FilterGroup label="Travel month">
              <FilterOption label="Any month" value="" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              <FilterOption label="Nov 2026" value="2026-11" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              <FilterOption label="Dec 2026" value="2026-12" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              <FilterOption label="Jan 2027" value="2027-01" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              <FilterOption label="Feb 2027" value="2027-02" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
              <FilterOption label="Mar 2027" value="2027-03" currentValue={filters.month} onChange={(v) => updateFilter('month', v)} />
            </FilterGroup>

            <div className="mt-6 flex gap-3">
              <Button onClick={clearFilters} variant="secondary" className="flex-1">Clear all</Button>
              <Button onClick={() => setShowFilters(false)} className="flex-1">Show results</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-5">
      <p className="text-sm font-semibold text-charcoal-950 mb-2.5">{label}</p>
      <div className="space-y-1.5">{children}</div>
    </div>
  );
}

function FilterOption({ label, value, currentValue, onChange }: { label: string; value: string; currentValue: string; onChange: (v: string) => void }) {
  const checked = currentValue === value;
  return (
    <label className="flex items-center gap-2.5 cursor-pointer text-sm text-charcoal-700 hover:text-charcoal-950">
      <input
        type="radio"
        checked={checked}
        onChange={() => onChange(value)}
        className="w-4 h-4 accent-emerald-900"
      />
      {label}
    </label>
  );
}

function FilterChip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-sm font-medium">
      {label}
      <button onClick={onRemove} className="hover:text-emerald-800">
        <X className="w-3.5 h-3.5" />
      </button>
    </span>
  );
}
