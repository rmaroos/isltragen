import { useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from './ui';
import { useSubmitInquiry } from '@/hooks/useData';

interface InquiryFormProps {
  packageId?: string;
  packageTitle?: string;
  onClose: () => void;
}

export function InquiryForm({ packageId, packageTitle, onClose }: InquiryFormProps) {
  const { submit, submitting, error, success, reset } = useSubmitInquiry();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    preferred_contact: 'phone',
    pilgrimage_type: 'umrah',
    departure_city: '',
    preferred_month: '',
    number_of_travelers: 1,
    budget: '',
    accommodation_preference: '',
    group_or_family_details: '',
    accessibility_request: '',
    message: packageTitle ? `I'm interested in the "${packageTitle}" package. Please contact me with more details.` : '',
  });

  const validate = (): boolean => {
    const errors: Record<string, string> = {};
    if (!form.full_name.trim()) errors.full_name = 'Please enter your full name';
    if (!form.phone.trim()) errors.phone = 'Please enter a phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email address';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    await submit({
      ...form,
      package_id: packageId,
    });
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (success) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-charcoal-950/60 animate-fade-in" onClick={handleClose} />
        <div className="relative bg-white rounded-2xl shadow-elevated max-w-lg w-full p-8 animate-scale-in">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-3">Your inquiry has been received</h2>
            <p className="text-charcoal-700 leading-relaxed mb-5">
              Thank you for contacting us. Your reference is <span className="font-bold text-emerald-900">{success.reference}</span>. Our team will review your request and contact you using the details provided.
            </p>
            <div className="bg-ivory-100 rounded-xl p-4 mb-5">
              <p className="text-sm text-charcoal-700">
                This message is not a booking confirmation. Your trip is not confirmed until the agency confirms it through the stated booking process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleClose} variant="secondary" className="flex-1">Close</Button>
              <a href="/travel-guide" onClick={handleClose} className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors">
                Explore Travel Guides
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-charcoal-950/60 animate-fade-in" onClick={handleClose} />
      <div className="relative bg-white rounded-2xl shadow-elevated max-w-2xl w-full my-8 animate-scale-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-200">
          <div>
            <h2 className="text-xl font-display font-bold text-charcoal-950">
              {packageTitle ? `Inquire about: ${packageTitle}` : 'Request a quote'}
            </h2>
            <p className="text-sm text-charcoal-700 mt-1">Tell us what you're looking for and our team will be in touch.</p>
          </div>
          <button onClick={handleClose} className="p-2 rounded-lg hover:bg-neutral-200 transition-colors" aria-label="Close form">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 max-h-[70vh] overflow-y-auto">
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 border border-error/20 flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
              <p className="text-sm text-error">Something went wrong. Please try again or call us directly.</p>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Full name" required error={formErrors.full_name}>
              <input
                type="text"
                value={form.full_name}
                onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                className={inputClass(formErrors.full_name)}
                placeholder="Your full name"
              />
            </Field>

            <Field label="Phone / WhatsApp" required error={formErrors.phone}>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass(formErrors.phone)}
                placeholder="07123 456789"
              />
            </Field>

            <Field label="Email" error={formErrors.email} optional>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass(formErrors.email)}
                placeholder="you@example.com"
              />
            </Field>

            <Field label="Preferred contact method">
              <select
                value={form.preferred_contact}
                onChange={(e) => setForm({ ...form, preferred_contact: e.target.value })}
                className={inputClass()}
              >
                <option value="phone">Phone call</option>
                <option value="whatsapp">WhatsApp</option>
                <option value="email">Email</option>
              </select>
            </Field>

            <Field label="Pilgrimage type">
              <select
                value={form.pilgrimage_type}
                onChange={(e) => setForm({ ...form, pilgrimage_type: e.target.value })}
                className={inputClass()}
              >
                <option value="umrah">Umrah</option>
                <option value="hajj">Hajj</option>
                <option value="ramadan-umrah">Ramadan Umrah</option>
                <option value="custom">Custom / Other</option>
              </select>
            </Field>

            <Field label="Number of travelers">
              <input
                type="number"
                min={1}
                value={form.number_of_travelers}
                onChange={(e) => setForm({ ...form, number_of_travelers: parseInt(e.target.value) || 1 })}
                className={inputClass()}
              />
            </Field>

            <Field label="Departure city" optional>
              <input
                type="text"
                value={form.departure_city}
                onChange={(e) => setForm({ ...form, departure_city: e.target.value })}
                className={inputClass()}
                placeholder="e.g. London"
              />
            </Field>

            <Field label="Preferred month" optional>
              <input
                type="month"
                value={form.preferred_month}
                onChange={(e) => setForm({ ...form, preferred_month: e.target.value })}
                className={inputClass()}
              />
            </Field>

            <Field label="Budget range" optional>
              <select
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className={inputClass()}
              >
                <option value="">Not specified</option>
                <option value="Under £1,500">Under £1,500</option>
                <option value="£1,500 - £2,500">£1,500 - £2,500</option>
                <option value="£2,500 - £4,000">£2,500 - £4,000</option>
                <option value="Over £4,000">Over £4,000</option>
              </select>
            </Field>

            <Field label="Accommodation preference" optional>
              <select
                value={form.accommodation_preference}
                onChange={(e) => setForm({ ...form, accommodation_preference: e.target.value })}
                className={inputClass()}
              >
                <option value="">No preference</option>
                <option value="3 Star">3 Star</option>
                <option value="4 Star">4 Star</option>
                <option value="5 Star">5 Star</option>
              </select>
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Group or family details" optional>
              <input
                type="text"
                value={form.group_or_family_details}
                onChange={(e) => setForm({ ...form, group_or_family_details: e.target.value })}
                className={inputClass()}
                placeholder="e.g. Family of 4 with 2 children"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Accessibility requirements" optional>
              <input
                type="text"
                value={form.accessibility_request}
                onChange={(e) => setForm({ ...form, accessibility_request: e.target.value })}
                className={inputClass()}
                placeholder="e.g. Wheelchair access needed"
              />
            </Field>
          </div>

          <div className="mt-4">
            <Field label="Message" optional>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className={inputClass()}
                placeholder="Any questions or specific requirements..."
              />
            </Field>
          </div>

          <div className="mt-5 p-4 bg-ivory-100 rounded-xl">
            <p className="text-xs text-charcoal-700 leading-relaxed">
              By submitting this form, you agree to be contacted by our team regarding your inquiry. Your information will be handled in accordance with our privacy policy. This inquiry is not a booking confirmation.
            </p>
          </div>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <Button type="button" onClick={handleClose} variant="secondary" className="flex-1">Cancel</Button>
            <Button type="submit" disabled={submitting} className="flex-1">
              {submitting ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</>
              ) : (
                'Submit inquiry'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

function Field({ label, children, required, optional, error }: { label: string; children: React.ReactNode; required?: boolean; optional?: boolean; error?: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-charcoal-950 mb-1.5">
        {label}
        {required && <span className="text-error ml-0.5">*</span>}
        {optional && <span className="text-neutral-500 ml-1 text-xs">(optional)</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-error">{error}</p>}
    </div>
  );
}

function inputClass(error?: string): string {
  return `w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${
    error ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'
  }`;
}
