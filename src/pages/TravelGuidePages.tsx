import { Link, useParams } from 'react-router-dom';
import { ChevronRight, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { useArticles, useArticle } from '@/hooks/useData';

const categoryLabels: Record<string, string> = {
  'getting-started': 'Getting Started',
  'hajj-preparation': 'Hajj Preparation',
  'documents': 'Documents',
  'packing': 'Packing',
  'ihram': 'Ihram',
  'travel': 'Travel',
  'makkah-madinah': 'Makkah & Madinah',
  'family': 'Family',
  'accessibility': 'Accessibility',
  'health': 'Health',
  'general': 'General',
};

export function TravelGuideListPage() {
  const { articles, loading } = useArticles();

  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Travel Guide</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Travel Guides</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">
            Practical guides to help you prepare for your pilgrimage — from understanding the rituals to packing your bags and managing your documents.
          </p>
        </Container>
      </section>

      <Container className="py-8 lg:py-12">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-soft">
                <div className="h-44 skeleton" />
                <div className="p-5 space-y-3">
                  <div className="h-4 w-1/3 rounded skeleton" />
                  <div className="h-5 w-3/4 rounded skeleton" />
                  <div className="h-4 w-full rounded skeleton" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/travel-guide/${article.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5 flex flex-col"
              >
                <div className="h-44 overflow-hidden">
                  <img src={article.hero_image} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-gold-600">{categoryLabels[article.category] || article.category}</span>
                    <span className="flex items-center gap-1 text-xs text-neutral-500">
                      <Clock className="w-3.5 h-3.5" /> {article.reading_time_minutes} min
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-charcoal-950 mb-2 group-hover:text-emerald-900 transition-colors">{article.title}</h3>
                  <p className="text-sm text-charcoal-700 leading-relaxed line-clamp-2 mb-3">{article.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 group-hover:gap-2.5 transition-all">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </>
  );
}

export function ArticlePage() {
  const { slug } = useParams();
  const { article, loading, error } = useArticle(slug);

  if (loading) {
    return (
      <Container className="py-20">
        <div className="animate-pulse max-w-3xl mx-auto">
          <div className="h-6 w-48 rounded skeleton mb-6" />
          <div className="h-12 w-3/4 rounded skeleton mb-4" />
          <div className="h-80 rounded-2xl skeleton mb-8" />
          <div className="h-4 w-full rounded skeleton mb-2" />
          <div className="h-4 w-full rounded skeleton mb-2" />
          <div className="h-4 w-2/3 rounded skeleton mb-2" />
        </div>
      </Container>
    );
  }

  if (error || !article) {
    return (
      <Container className="py-20 text-center">
        <BookOpen className="w-12 h-12 text-neutral-500 mx-auto mb-4" strokeWidth={1} />
        <h1 className="text-2xl font-display font-bold text-charcoal-950 mb-4">Article not found</h1>
        <Link to="/travel-guide" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors">
          Browse all guides
        </Link>
      </Container>
    );
  }

  const reviewDate = new Date(article.last_reviewed_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

  return (
    <>
      <div className="bg-ivory-100 border-b border-neutral-200">
        <Container className="py-3">
          <nav className="flex items-center gap-1.5 text-sm text-charcoal-700 overflow-hidden">
            <Link to="/" className="hover:text-emerald-900 whitespace-nowrap">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <Link to="/travel-guide" className="hover:text-emerald-900 whitespace-nowrap">Travel Guide</Link>
            <ChevronRight className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="text-charcoal-950 truncate">{article.title}</span>
          </nav>
        </Container>
      </div>

      <article>
        {/* Hero */}
        <section className="relative h-[300px] lg:h-[400px] overflow-hidden">
          <img src={article.hero_image} alt={article.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/30 to-transparent" />
          <Container className="absolute inset-x-0 bottom-0 pb-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-medium text-gold-500 mb-3">{categoryLabels[article.category] || article.category}</span>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight">{article.title}</h1>
            </div>
          </Container>
        </section>

        {/* Content */}
        <Container className="py-10 lg:py-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-neutral-500">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {article.reading_time_minutes} min read</span>
              {article.author && <span>By {article.author}</span>}
              <span>Last reviewed: {reviewDate}</span>
            </div>

            <p className="text-lg text-charcoal-700 leading-relaxed mb-8 font-medium">{article.summary}</p>

            <div className="prose-content">
              {article.content.split('\n').map((line, i) => {
                if (line.startsWith('## ')) {
                  return <h2 key={i} className="text-2xl font-display font-bold text-charcoal-950 mt-8 mb-4">{line.replace('## ', '')}</h2>;
                }
                if (line.startsWith('- ')) {
                  return <div key={i} className="flex items-start gap-2.5 text-charcoal-700 leading-relaxed mb-2 ml-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-800 mt-2.5 flex-shrink-0" />{line.replace('- ', '')}</div>;
                }
                if (line.trim() === '') {
                  return <div key={i} className="h-3" />;
                }
                return <p key={i} className="text-charcoal-700 leading-relaxed mb-4">{line}</p>;
              })}
            </div>

            <div className="mt-10 p-5 bg-ivory-100 rounded-2xl">
              <p className="text-sm text-charcoal-700 leading-relaxed">
                This guide is for general informational purposes. Always consult a qualified scholar for specific religious guidance and your travel advisor for current travel requirements.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/travel-guide" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-emerald-800">
                ← Back to all guides
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-900 hover:text-emerald-800">
                Have questions? Contact us →
              </Link>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
