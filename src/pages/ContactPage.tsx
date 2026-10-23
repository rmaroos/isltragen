import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';
import { useSubmitInquiry } from '@/hooks/useData';

export function ContactPage() {
  const { submit, submitting, error, success, reset } = useSubmitInquiry();
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const [form, setForm] = useState({
    full_name: '',
    email: '',
    phone: '',
    preferred_contact: 'phone',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!form.full_name.trim()) errors.full_name = 'Please enter your name';
    if (!form.phone.trim()) errors.phone = 'Please enter a phone number';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Please enter a valid email';
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;
    await submit({ ...form, pilgrimage_type: 'custom', number_of_travelers: 1 });
  };

  return (
    <>
      <section className="bg-emerald-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        <Container className="relative">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold mb-3">Contact Us</h1>
          <p className="text-lg text-ivory-100/80 max-w-2xl">Have a question or ready to start planning? Our team is here to help you understand the options and guide you through the process.</p>
        </Container>
      </section>

      <Container className="py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div>
            <SectionHeading title="Get in touch" subtitle="Reach us by phone, email, or visit our office. We aim to respond to all inquiries within one business day." />

            <div className="space-y-5">
              <ContactInfoCard icon={Phone} label="Phone" value="020 1234 5678" href="tel:+442012345678" />
              <ContactInfoCard icon={Mail} label="Email" value="info@safamarwa-travel.co.uk" href="mailto:info@safamarwa-travel.co.uk" />
              <ContactInfoCard icon={MapPin} label="Office" value="123 Edgware Road, London, W2 2DZ" />
              <ContactInfoCard icon={Clock} label="Opening hours" value="Monday – Saturday: 9am – 6pm" />
            </div>

            <div className="mt-8 bg-ivory-100 rounded-2xl p-5">
              <h3 className="font-display font-semibold text-charcoal-950 mb-2 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-800" /> For existing travelers
              </h3>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                If you are currently traveling and need urgent assistance, please call the emergency number provided in your travel documents. For all other matters, use the contact form or phone number above.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div>
            {success ? (
              <div className="bg-white rounded-2xl shadow-card p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-9 h-9 text-success" />
                </div>
                <h2 className="text-2xl font-display font-bold text-charcoal-950 mb-3">Your message has been received</h2>
                <p className="text-charcoal-700 leading-relaxed mb-3">
                  Thank you for contacting us. Your reference is <span className="font-bold text-emerald-900">{success.reference}</span>. Our team will review your message and contact you using the details provided.
                </p>
                <p className="text-sm text-neutral-500 mb-5">This is not a booking confirmation.</p>
                <button onClick={reset} className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-emerald-900 text-emerald-900 font-semibold hover:bg-emerald-100 transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-card p-6 lg:p-8">
                <h2 className="text-xl font-display font-bold text-charcoal-950 mb-1">Send us a message</h2>
                <p className="text-sm text-charcoal-700 mb-6">Fields marked with * are required.</p>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-50 border border-error/20 flex items-start gap-2.5">
                    <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-error">Something went wrong. Please try again or call us directly.</p>
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Full name *</label>
                    <input
                      type="text"
                      value={form.full_name}
                      onChange={(e) => setForm({ ...form, full_name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.full_name ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`}
                      placeholder="Your full name"
                    />
                    {formErrors.full_name && <p className="mt-1 text-xs text-error">{formErrors.full_name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.phone ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`}
                        placeholder="07123 456789"
                      />
                      {formErrors.phone && <p className="mt-1 text-xs text-error">{formErrors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Email <span className="text-neutral-500 text-xs">(optional)</span></label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border bg-ivory-50 text-charcoal-950 focus:outline-none transition-colors ${formErrors.email ? 'border-error' : 'border-neutral-200 focus:border-emerald-800'}`}
                        placeholder="you@example.com"
                      />
                      {formErrors.email && <p className="mt-1 text-xs text-error">{formErrors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Preferred contact method</label>
                    <select
                      value={form.preferred_contact}
                      onChange={(e) => setForm({ ...form, preferred_contact: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
                    >
                      <option value="phone">Phone call</option>
                      <option value="whatsapp">WhatsApp</option>
                      <option value="email">Email</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-950 mb-1.5">Message</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 bg-ivory-50 text-charcoal-950 focus:border-emerald-800 focus:outline-none transition-colors"
                      placeholder="Tell us what you're looking for..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-900 text-white font-semibold hover:bg-emerald-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send message</>}
                </button>

                <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                  By submitting this form, you agree to be contacted by our team. Your information will be handled in accordance with our privacy policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

function ContactInfoCard({ icon: Icon, label, value, href }: { icon: LucideIcon; label: string; value: string; href?: string }) {
  const content = (
    <div className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-neutral-200 hover:shadow-soft transition-shadow">
      <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-emerald-800" />
      </div>
      <div>
        <p className="text-xs text-neutral-500 mb-0.5">{label}</p>
        <p className="font-medium text-charcoal-950">{value}</p>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}
