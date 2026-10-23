export interface Package {
  id: string;
  title: string;
  slug: string;
  category: string;
  short_description: string;
  long_description: string;
  hero_image: string;
  gallery: string[];
  departure_city: string;
  start_date: string;
  end_date: string;
  duration_days: number;
  price_from: number;
  price_basis: string;
  currency: string;
  hotel_category: string;
  hotel_name_makkah?: string;
  hotel_distance_makkah?: string;
  hotel_name_madinah?: string;
  hotel_distance_madinah?: string;
  inclusions: string[];
  exclusions: string[];
  itinerary: ItineraryDay[];
  availability_status: string;
  is_featured: boolean;
  is_published: boolean;
  meta_description?: string;
  last_reviewed_at: string;
  created_at: string;
  updated_at: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  hero_image: string;
  reading_time_minutes: number;
  author?: string;
  is_published: boolean;
  published_at: string;
  last_reviewed_at: string;
  created_at: string;
  updated_at: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_published: boolean;
}

export interface Inquiry {
  id?: string;
  reference?: string;
  full_name: string;
  email?: string;
  phone: string;
  preferred_contact: string;
  pilgrimage_type: string;
  package_id?: string;
  departure_city?: string;
  preferred_month?: string;
  number_of_travelers: number;
  budget?: string;
  accommodation_preference?: string;
  group_or_family_details?: string;
  accessibility_request?: string;
  message?: string;
  status?: string;
  created_at?: string;
}

export const CATEGORY_LABELS: Record<string, string> = {
  'umrah': 'Umrah',
  'hajj': 'Hajj',
  'ramadan-umrah': 'Ramadan Umrah',
  'ziyarat': 'Ziyarat',
};

export const CATEGORY_ROUTES: Record<string, string> = {
  'umrah': '/umrah/packages',
  'hajj': '/hajj/packages',
  'ramadan-umrah': '/ramadan-umrah/packages',
  'ziyarat': '/ziyarat',
};

export const AVAILABILITY_LABELS: Record<string, { label: string; color: string; bgColor: string }> = {
  'available': { label: 'Available for inquiry', color: '#246B4A', bgColor: '#E5EFEA' },
  'limited': { label: 'Limited availability', color: '#8A5A12', bgColor: '#FDF4E5' },
  'fully_booked': { label: 'Fully booked', color: '#B42318', bgColor: '#FDEEEE' },
  'closed': { label: 'Booking closed', color: '#727A75', bgColor: '#F0F2EF' },
};

export function formatPrice(price: number, currency: string): string {
  const symbols: Record<string, string> = { GBP: '£', USD: '$', EUR: '€' };
  const symbol = symbols[currency] || currency + ' ';
  return `${symbol}${price.toLocaleString('en-GB', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
}

export function formatDateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  const sameMonth = s.getMonth() === e.getMonth() && s.getFullYear() === e.getFullYear();
  const sameYear = s.getFullYear() === e.getFullYear();
  if (sameMonth) {
    return `${s.toLocaleDateString('en-GB', { day: 'numeric' })}–${e.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }
  if (sameYear) {
    return `${s.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}–${e.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`;
  }
  return `${formatDate(start)} – ${formatDate(end)}`;
}
