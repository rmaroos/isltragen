import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CheckCircle2, AlertCircle, Loader2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Container, Button } from '@/components/ui';
import { useSubmitInquiry } from '@/hooks/useData';

export function RequestQuotePage() {
  const navigate = useNavigate();
  const { submit, submitting, error, success, reset } = useSubmitInquiry();
  const [step, setStep] = useState(1);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    pilgrimage_type: 'umrah',
    preferred_month: '',
    departure_city: '',
    number_of_travelers: 1,
    budget: '',
    accommodation_preference: '',
    full_name: '',
    phone: '',
    email: '',
    preferred_contact: 'phone',
    group_or_family_details: '',
    accessibility_request: '',
    message: '',
  });

  const validateStep = (s: number): boolean => {
    const errors: Record<string, string> = {};
    if (s === 2) {
      if (!form.full_name.trim()) errors.full_name = 'Please enter your name';
      if (!form.phone.trim()) errors.phone = 'Please enter a phone number';
      if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(2)) return;
    await submit(form);
  };

  if (success) {
    return (
      <Container className="py-16 lg:py-24">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-11 h-11 text-success" />
          </div>
          <h1 className="text-3xl font-display font-bold text-charcoal-950 mb-4">Your inquiry has been received</h1>
          <p className="text-lg text-charcoal-700 leading-relaxed mb-3">
            Thank you for contacting us. Your reference is <span className="font-bold text-emerald-900 text-xl">{success.reference}</span>. Our team will review your request and contact you using the details provided.
          </p>
          <div className="bg-ivory-100 rounded-2xl p-5 my-6">
            <p className="text-sm text-charcoal-700 leading-relaxed">
              This message is not a booking confirmation. Your trip is not confirmed until the agency confirms it through the stated booking process.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate('/travel-guide')} variant="primary">Explore Travel Guides</Button>
            <Button onClick={() => navigate('/contact')} variant="secondary">Contact the Agency</Button>
          </div>
        </div>
      </Container>
    );
  }

  const steps = ['Trip preferences', 'Contact details', 'Additional requirements'];

  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Request a Quote</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Request a Custom Quote</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">Tell us what you're looking for and our team will prepare a tailored quote. This is an inquiry, not a booking confirmation.</p>
        </Container>
      </section>

      <Container className="py-10 lg:py-14">
        <div className="max-w-2xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-8">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    step > i + 1 ? 'bg-emerald-800 text-white' : step === i + 1 ? 'bg-emerald-900 text-white' : 'bg-neutral-200 text-neutral-500'
                  }`}>
                    {step > i + 1 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`text-xs mt-2 hidden sm:block ${step >= i + 1 ? 'text-charcoal-950 font-medium' : 'text-neutral-500'}`}>{label}</span>
                </div>
                {i < steps.length - 1 && <div className={`h-px flex-1 mx-2 ${step > i + 1 ? 'bg-emerald-800' : 'bg-neutral-200'}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
            {error && (
              <div className="mb-4 p-3 rounded-xl bg-red-50 border border-error/20 flex items-start gap-2.5">
                <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                <p className="text-sm text-error">Something went wrong. Please try again.</p>
              </div>
            )}

            {/* Step 1: Trip preferences */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-display font-bold text-charcoal-950 mb-4">Trip preferences</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Pilgrimage type</label>
                    <select value={form.pilgrimage_type} onChange={(e) => setForm({ ...form, pilgrimage_type: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors">
                      <option value="umrah">Umrah</option>
                      <option value="hajj">Hajj</option>
                      <option value="ramadan-umrah">Ramadan Umrah</option>
                      <option value="custom">Custom / Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Preferred month</label>
                    <input type="month" value={form.preferred_month} onChange={(e) => setForm({ ...form, preferred_month: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Departure city</label>
                    <input type="text" value={form.departure_city} onChange={(e) => setForm({ ...form, departure_city: e.target.value })} placeholder="e.g. London" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Number of travelers</label>
                    <input type="number" min={1} value={form.number_of_travelers} onChange={(e) => setForm({ ...form, number_of_travelers: parseInt(e.target.value) || 1 })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Budget range <span className="text-neutral-500 text-xs">(optional)</span></label>
                    <select value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors">
                      <option value="">Not specified</option>
                      <option value="Under £1,500">Under £1,500</option>
                      <option value="£1,500 - £2,500">£1,500 - £2,500</option>
                      <option value="£2,500 - £4,000">£2,500 - £4,000</option>
                      <option value="Over £4,000">Over £4,000</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Accommodation <span className="text-neutral-500 text-xs">(optional)</span></label>
                    <select value={form.accommodation_preference} onChange={(e) => setForm({ ...form, accommodation_preference: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors">
                      <option value="">No preference</option>
                      <option value="3 Star">3 Star</option>
                      <option value="4 Star">4 Star</option>
                      <option value="5 Star">5 Star</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end pt-4">
                  <Button type="button" onClick={() => setStep(2)}>Continue <ArrowRight className="w-4 h-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 2: Contact details */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-display font-bold text-charcoal-950 mb-4">Contact details</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Full name *</label>
                    <input type="text" value={form.full_name} onChange={(e) => setForm({ ...form, full_name: e.target.value })} className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.full_name ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`} placeholder="Your full name" />
                    {formErrors.full_name && <p className="mt-1 text-xs text-error">{formErrors.full_name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Phone / WhatsApp *</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.phone ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`} placeholder="07123 456789" />
                    {formErrors.phone && <p className="mt-1 text-xs text-error">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Email <span className="text-neutral-500 text-xs">(optional)</span></label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.email ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`} placeholder="you@example.com" />
                    {formErrors.email && <p className="mt-1 text-xs text-error">{formErrors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Preferred contact</label>
                    <select value={form.preferred_contact} onChange={(e) => setForm({ ...form, preferred_contact: e.target.value })} className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors">
                      <option value="phone">Phone call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between pt-4">
                  <Button type="button" onClick={() => setStep(1)} variant="secondary"><ArrowLeft className="w-4 h-4" /> Back</Button>
                  <Button type="button" onClick={() => { if (validateStep(2)) setStep(3); }}>Continue <ArrowRight className="w-4 h-4" /></Button>
                </div>
              </div>
            )}

            {/* Step 3: Additional requirements */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h2 className="text-xl font-display font-bold text-charcoal-950 mb-4">Additional requirements</h2>
                <div>
                  <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Group or family details <span className="text-neutral-500 text-xs">(optional)</span></label>
                  <input type="text" value={form.group_or_family_details} onChange={(e) => setForm({ ...form, group_or_family_details: e.target.value })} placeholder="e.g. Family of 4 with 2 children" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Accessibility requirements <span className="text-neutral-500 text-xs">(optional)</span></label>
                  <input type="text" value={form.accessibility_request} onChange={(e) => setForm({ ...form, accessibility_request: e.target.value })} placeholder="e.g. Wheelchair access needed" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Questions or preferences <span className="text-neutral-500 text-xs">(optional)</span></label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={4} placeholder="Anything else you'd like us to know?" className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors" />
                </div>

                {/* Summary */}
                <div className="bg-ivory-100 rounded-xl p-4 space-y-1.5 text-sm">
                  <p className="font-semibold text-charcoal-950 mb-2">Summary</p>
                  <p><span className="text-neutral-500">Type:</span> {form.pilgrimage_type}</p>
                  <p><span className="text-neutral-500">Travelers:</span> {form.number_of_travelers}</p>
                  {form.departure_city && <p><span className="text-neutral-500">From:</span> {form.departure_city}</p>}
                  {form.preferred_month && <p><span className="text-neutral-500">Month:</span> {form.preferred_month}</p>}
                  {form.budget && <p><span className="text-neutral-500">Budget:</span> {form.budget}</p>}
                </div>

                <div className="bg-ivory-100 rounded-xl p-4">
                  <p className="text-xs text-charcoal-700 leading-relaxed">
                    By submitting this form, you agree to be contacted by our team regarding your inquiry. This is not a booking confirmation. Your trip is confirmed only when the agency confirms it through the stated booking process.
                  </p>
                </div>

                <div className="flex justify-between pt-2">
                  <Button type="button" onClick={() => setStep(2)} variant="secondary"><ArrowLeft className="w-4 h-4" /> Back</Button>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : 'Submit request'}
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </Container>
    </>
  );
}
