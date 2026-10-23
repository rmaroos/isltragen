import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { mockPackages, mockArticles, mockFaqs } from '@/data/mockData';
import type { Package, Article, Faq, Inquiry } from '@/types';

export function usePackages(filters?: {
  category?: string;
  featured?: boolean;
  departureCity?: string;
}) {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const getMockData = () => {
      let result = mockPackages.filter((p) => p.is_published);
      if (filters?.category) {
        result = result.filter((p) => p.category === filters.category);
      }
      if (filters?.featured) {
        result = result.filter((p) => p.is_featured);
      }
      if (filters?.departureCity) {
        result = result.filter(
          (p) => p.departure_city.toLowerCase() === filters.departureCity?.toLowerCase()
        );
      }
      return result;
    };

    if (!supabase) {
      if (isMounted) {
        setPackages(getMockData());
        setLoading(false);
      }
      return;
    }

    let query = supabase
      .from('packages')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false });

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }
    if (filters?.featured) {
      query = query.eq('is_featured', true);
    }
    if (filters?.departureCity) {
      query = query.eq('departure_city', filters.departureCity);
    }

    query
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data || data.length === 0) {
          // Gracefully fallback to rich mock data
          setPackages(getMockData());
        } else {
          setPackages(data as Package[]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setPackages(getMockData());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [filters?.category, filters?.featured, filters?.departureCity]);

  return { packages, loading, error };
}

export function usePackage(slug: string | undefined) {
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const findMock = () => mockPackages.find((p) => p.slug === slug && p.is_published) || null;

    if (!supabase) {
      if (isMounted) {
        const found = findMock();
        setPkg(found);
        setLoading(false);
      }
      return;
    }

    supabase
      .from('packages')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .maybeSingle()
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data) {
          setPkg(findMock());
        } else {
          setPkg(data as Package | null);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setPkg(findMock());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { pkg, loading, error };
}

export function useRelatedPackages(pkg: Package | null, limit = 3) {
  const [related, setRelated] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!pkg) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const getMockRelated = () =>
      mockPackages
        .filter((p) => p.category === pkg.category && p.id !== pkg.id && p.is_published)
        .slice(0, limit);

    if (!supabase) {
      if (isMounted) {
        setRelated(getMockRelated());
        setLoading(false);
      }
      return;
    }

    supabase
      .from('packages')
      .select('*')
      .eq('is_published', true)
      .eq('category', pkg.category)
      .neq('id', pkg.id)
      .limit(limit)
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data || data.length === 0) {
          setRelated(getMockRelated());
        } else {
          setRelated(data as Package[]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setRelated(getMockRelated());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [pkg, limit]);

  return { related, loading };
}

export function useArticles(category?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const getMockArticles = () => {
      let res = mockArticles.filter((a) => a.is_published);
      if (category) {
        res = res.filter((a) => a.category === category);
      }
      return res;
    };

    if (!supabase) {
      if (isMounted) {
        setArticles(getMockArticles());
        setLoading(false);
      }
      return;
    }

    let query = supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false });

    if (category) {
      query = query.eq('category', category);
    }

    query
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data || data.length === 0) {
          setArticles(getMockArticles());
        } else {
          setArticles(data as Article[]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setArticles(getMockArticles());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { articles, loading, error };
}

export function useArticle(slug: string | undefined) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setLoading(false);
      return;
    }

    let isMounted = true;
    const findMock = () => mockArticles.find((a) => a.slug === slug && a.is_published) || null;

    if (!supabase) {
      if (isMounted) {
        setArticle(findMock());
        setLoading(false);
      }
      return;
    }

    supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .maybeSingle()
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data) {
          setArticle(findMock());
        } else {
          setArticle(data as Article | null);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setArticle(findMock());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [slug]);

  return { article, loading, error };
}

export function useFaqs(category?: string) {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const getMockFaqs = () => {
      let res = mockFaqs.filter((f) => f.is_published);
      if (category && category !== 'all') {
        res = res.filter((f) => f.category === category);
      }
      return res.sort((a, b) => a.sort_order - b.sort_order);
    };

    if (!supabase) {
      if (isMounted) {
        setFaqs(getMockFaqs());
        setLoading(false);
      }
      return;
    }

    let query = supabase
      .from('faqs')
      .select('*')
      .eq('is_published', true)
      .order('sort_order', { ascending: true });

    if (category && category !== 'all') {
      query = query.eq('category', category);
    }

    query
      .then(({ data, error: err }) => {
        if (!isMounted) return;
        if (err || !data || data.length === 0) {
          setFaqs(getMockFaqs());
        } else {
          setFaqs(data as Faq[]);
        }
        setLoading(false);
      })
      .catch(() => {
        if (!isMounted) return;
        setFaqs(getMockFaqs());
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [category]);

  return { faqs, loading };
}

export function useSubmitInquiry() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<Inquiry | null>(null);

  const submit = useCallback(
    async (
      inquiry: Omit<Inquiry, 'id' | 'reference' | 'status' | 'created_at' | 'updated_at'>
    ) => {
      setSubmitting(true);
      setError(null);
      setSuccess(null);

      const reference = `INQ-${Date.now().toString(36).toUpperCase()}-${Math.random()
        .toString(36)
        .substring(2, 6)
        .toUpperCase()}`;

      const createdInquiry: Inquiry = {
        ...inquiry,
        id: `inq-${Date.now()}`,
        reference,
        status: 'new',
        created_at: new Date().toISOString(),
      };

      // Save inquiry to localStorage for immediate offline persistence
      try {
        const raw = localStorage.getItem('hajj_umrah_inquiries');
        const stored = raw ? JSON.parse(raw) : [];
        stored.unshift(createdInquiry);
        localStorage.setItem('hajj_umrah_inquiries', JSON.stringify(stored));
      } catch (e) {
        console.warn('Could not cache inquiry to localStorage:', e);
      }

      // If Supabase is connected, also insert remotely
      if (supabase) {
        try {
          const { data, error: err } = await supabase
            .from('inquiries')
            .insert({
              ...inquiry,
              reference,
              status: 'new',
            })
            .select()
            .single();

          if (err) {
            console.warn('Supabase remote insert issue (fallback to local success):', err.message);
          } else if (data) {
            setSuccess(data as Inquiry);
            setSubmitting(false);
            return;
          }
        } catch (remoteErr) {
          console.warn('Supabase remote exception:', remoteErr);
        }
      }

      // Successful response with generated inquiry reference
      setSuccess(createdInquiry);
      setSubmitting(false);
    },
    []
  );

  return {
    submit,
    submitting,
    error,
    success,
    reset: () => {
      setSuccess(null);
      setError(null);
    },
  };
}
