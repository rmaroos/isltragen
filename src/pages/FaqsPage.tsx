import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, HelpCircle, Search } from 'lucide-react';
import { Container } from '@/components/ui';
import { useFaqs } from '@/hooks/useData';

const categoryLabels: Record<string, string> = {
  packages: 'Packages & Pricing',
  booking: 'Booking & Inquiries',
  payments: 'Payments',
  documents: 'Documents & Visa',
  travel: 'Travel & Support',
  general: 'General',
};

export function FaqsPage() {
  const { faqs, loading } = useFaqs();
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = ['all', ...Object.keys(categoryLabels).filter((cat) => faqs.some((f) => f.category === cat))];

  const filteredFaqs = faqs.filter((f) => {
    if (activeCategory !== 'all' && f.category !== activeCategory) return false;
    if (search && !f.question.toLowerCase().includes(search.toLowerCase()) && !f.answer.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">FAQs</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">Find answers to common questions about our packages, booking process, payments, documents and travel support.</p>
        </Container>
      </section>

      <Container className="py-8 lg:py-12">
        <div className="max-w-3xl mx-auto">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-neutral-200 bg-white text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
            />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? 'bg-emerald-900 text-white'
                    : 'bg-white text-charcoal-700 border border-neutral-200 hover:bg-emerald-100'
                }`}
              >
                {cat === 'all' ? 'All' : categoryLabels[cat] || cat}
              </button>
            ))}
          </div>

          {/* FAQs */}
          {loading ? (
            <div className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-16 rounded-xl skeleton" />
              ))}
            </div>
          ) : filteredFaqs.length > 0 ? (
            <div className="space-y-3">
              {filteredFaqs.map((faq) => (
                <details
                  key={faq.id}
                  open={openId === faq.id}
                  onToggle={(e) => { if ((e.target as HTMLDetailsElement).open) setOpenId(faq.id); else if (openId === faq.id) setOpenId(null); }}
                  className="group bg-white rounded-xl border border-neutral-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-charcoal-950 list-none hover:bg-ivory-50 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <HelpCircle className="w-5 h-5 text-gold-600 flex-shrink-0 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-charcoal-700 leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-neutral-200">
              <p className="text-charcoal-700 mb-4">No FAQs match your search.</p>
              <button onClick={() => { setSearch(''); setActiveCategory('all'); }} className="text-sm font-semibold text-emerald-900 hover:underline">
                Clear search
              </button>
            </div>
          )}

          {/* Contact prompt */}
          <div className="mt-10 bg-ivory-100 rounded-2xl p-6 text-center">
            <h3 className="font-display font-semibold text-charcoal-950 mb-2">Still have questions?</h3>
            <p className="text-sm text-charcoal-700 mb-4">Our team is happy to help with any questions you may have about your journey.</p>
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors">
              Contact us
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
}
