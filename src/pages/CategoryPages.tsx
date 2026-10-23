import { CategoryPage } from '@/components/CategoryPage';
import { Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, FileCheck, Calendar, MapPin } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui';

export function UmrahLandingPage() {
  return (
    <CategoryPage
      category="umrah"
      title="Umrah"
      headline="Find an Umrah journey that suits your needs."
      description="Compare available travel dates, accommodation and package arrangements, then speak with our team to understand the details."
      heroImage="https://images.pexels.com/photos/4118038/pexels-photo-4118038.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ctaText="Explore Umrah Packages"
      ctaLink="/packages?category=umrah"
      features={[
        { title: 'Year-round departures', desc: 'Umrah is available throughout the year with flexible dates and durations to suit your schedule.' },
        { title: 'Range of packages', desc: 'From economy to premium, family to private — choose the package that matches your needs and budget.' },
        { title: 'Complete support', desc: 'Visa assistance, flights, hotels, transfers and guided Ziyarat are included in every package.' },
      ]}
    >
      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Umrah categories"
            title="Choose your travel style"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Economy Umrah', desc: 'Comfortable 3-star accommodation with all essential services at an accessible price.', link: '/packages?category=umrah' },
              { title: 'Family Umrah', desc: 'Spacious family rooms, child-friendly meals and flexible scheduling for families.', link: '/packages?category=umrah' },
              { title: 'Premium Umrah', desc: '5-star hotels adjacent to the Haram with private transfers and personal guides.', link: '/packages?category=umrah' },
              { title: 'Group Travel', desc: 'Organized group departures with experienced group leaders and community support.', link: '/packages?category=umrah' },
              { title: 'Private Umrah', desc: 'Customized itineraries with private transfers and personalized service throughout.', link: '/request-a-quote' },
              { title: 'Custom Quote', desc: 'Tell us your specific requirements and we will prepare a tailored quote for you.', link: '/request-a-quote' },
            ].map((item) => (
              <Link key={item.title} to={item.link} className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-card transition-all hover:-translate-y-0.5">
                <h3 className="font-display font-semibold text-lg text-charcoal-950 mb-2 group-hover:text-emerald-900 transition-colors">{item.title}</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-3">{item.desc}</p>
                <span className="text-sm font-semibold text-emerald-900 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </CategoryPage>
  );
}

export function HajjLandingPage() {
  return (
    <CategoryPage
      category="hajj"
      title="Hajj"
      headline="Prepare for Hajj with clear information and guidance."
      description="Explore the Hajj information and services currently available through our agency. Eligibility, registration, allocation and final arrangements are subject to the applicable official requirements and confirmed availability."
      heroImage="https://images.pexels.com/photos/38546874/pexels-photo-38546874.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ctaText="Contact the Hajj Team"
      ctaLink="/contact"
      features={[
        { title: 'Comprehensive packages', desc: 'Accommodation in Makkah, Mina, Arafat and Madinah with all transportation between ritual sites.' },
        { title: 'Guided support', desc: 'Experienced scholars and group leaders guide you through every ritual of Hajj.' },
        { title: 'Pre-departure briefings', desc: 'Detailed briefing sessions to prepare you for the journey before you travel.' },
      ]}
    >
      {/* Important notice */}
      <section className="py-12 lg:py-16">
        <Container>
          <div className="bg-ivory-100 rounded-2xl p-6 lg:p-8 mb-10">
            <div className="flex items-start gap-3 mb-4">
              <ShieldCheck className="w-6 h-6 text-info flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-semibold text-charcoal-950 mb-2">Important information about Hajj</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  Hajj eligibility, registration and allocation are controlled by official authorities. Submitting an inquiry does not guarantee a Hajj place. Our team will explain the current requirements and process when you contact us. Please ensure you understand the official process for your country before proceeding.
                </p>
              </div>
            </div>
          </div>

          <SectionHeading
            eyebrow="Eligibility & registration"
            title="Understanding the Hajj process"
            subtitle="Hajj involves official registration and allocation processes that vary by country. Here is what you need to know."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: FileCheck, title: 'Eligibility check', desc: 'Confirm you meet the official eligibility requirements for Hajj in your country of residence.' },
              { icon: Calendar, title: 'Registration', desc: 'Complete the official registration process through the relevant authority. We can guide you through this.' },
              { icon: MapPin, title: 'Allocation', desc: 'Allocation of Hajj places is determined by official authorities. We will keep you informed throughout.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-soft">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-800" strokeWidth={1.5} />
                </div>
                <h3 className="font-display font-semibold text-charcoal-950 mb-2">{item.title}</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </CategoryPage>
  );
}

export function RamadanUmrahLandingPage() {
  return (
    <CategoryPage
      category="ramadan-umrah"
      title="Ramadan Umrah"
      headline="Plan your Ramadan Umrah with care."
      description="Explore the Ramadan departures available for the upcoming season and review accommodation, travel arrangements and package inclusions before you book."
      heroImage="https://images.pexels.com/photos/11667465/pexels-photo-11667465.jpeg?auto=compress&cs=tinysrgb&w=1920"
      ctaText="Explore Ramadan Packages"
      ctaLink="/packages?category=ramadan-umrah"
      features={[
        { title: 'Last ten nights', desc: 'Packages designed to help you maximize the spiritual rewards of the last ten nights of Ramadan.' },
        { title: 'Suhoor & Iftar', desc: 'Daily Suhoor and Iftar meals provided at your hotel throughout your stay.' },
        { title: 'Close to the Haram', desc: 'Hotels within walking distance of the Haram in both Makkah and Madinah.' },
      ]}
    >
      <section className="py-12 lg:py-16">
        <Container>
          <div className="bg-ivory-100 rounded-2xl p-6 lg:p-8">
            <h3 className="font-display font-semibold text-charcoal-950 mb-3">Please note</h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Availability of specific hotels for the last ten nights of Ramadan is subject to supplier confirmation. We do not claim access to specific hotels or particular services unless contractually confirmed. Booking deadlines and price validity will be communicated by your advisor. Please inquire early as Ramadan packages are in high demand.
            </p>
          </div>
        </Container>
      </section>
    </CategoryPage>
  );
}

export function ZiyaratPage() {
  return (
    <>
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/18360295/pexels-photo-18360295.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Madinah" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" />
          <div className="absolute inset-0 pattern-stars opacity-[0.05]" />
        </div>
        <Container className="relative z-10 pt-20 pb-12 lg:pb-16">
          <nav className="flex items-center gap-1.5 text-sm text-ivory-100/70 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Ziyarat</span>
          </nav>
          <h1 className="text-3xl lg:text-5xl font-display font-bold text-white leading-tight mb-4 max-w-2xl">Explore the places included in your journey.</h1>
          <p className="text-lg text-ivory-100/85 max-w-xl leading-relaxed">Review the destinations, timing and arrangements for each tour. The locations included depend on the selected package and confirmed itinerary.</p>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <SectionHeading
            eyebrow="Ziyarat tours"
            title="Significant sites in Makkah and Madinah"
            subtitle="Guided tours of historically and spiritually significant sites are included in most of our packages."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Makkah Ziyarat */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="h-56 overflow-hidden">
                <img src="https://images.pexels.com/photos/38547809/pexels-photo-38547809.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Makkah" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-charcoal-950 mb-3">Makkah Ziyarat</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-4">A guided tour of significant sites in and around Makkah, typically including:</p>
                <ul className="space-y-2">
                  {[
                    'Jabal al-Nour (Mountain of Light) — site of the Cave of Hira',
                    'Jabal Thawr — site of the Cave of Thawr',
                    'Masjid Aisha — the Miqat point for Umrah',
                    'Jannat al-Mualla — the historic cemetery',
                    'Factory of Kiswah (Kaaba covering)',
                    'Arafat and Muzdalifah (outside Hajj season)',
                  ].map((site) => (
                    <li key={site} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                      <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      {site}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Madinah Ziyarat */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="h-56 overflow-hidden">
                <img src="https://images.pexels.com/photos/20277839/pexels-photo-20277839.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Madinah" className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-charcoal-950 mb-3">Madinah Ziyarat</h3>
                <p className="text-sm text-charcoal-700 leading-relaxed mb-4">A guided tour of significant sites in and around Madinah, typically including:</p>
                <ul className="space-y-2">
                  {[
                    'Masjid Quba — the first mosque built by the Prophet ﷺ',
                    'Masjid Qiblatain — the mosque of two qiblas',
                    'Jannat al-Baqi — the historic cemetery',
                    'Uhud Mountain and the site of the Battle of Uhud',
                    'Masjid al-Ahzab (Mosque of the Trench)',
                    'The Seven Mosques (Sab\'a Masajid)',
                  ].map((site) => (
                    <li key={site} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                      <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                      {site}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-ivory-100 rounded-2xl p-6">
            <h3 className="font-display font-semibold text-charcoal-950 mb-2">Conduct and visitor guidance</h3>
            <p className="text-sm text-charcoal-700 leading-relaxed">
              Please follow your guide's instructions and respect the sanctity of each site. Dress modestly, speak quietly, and be mindful of other visitors. Some sites may have restricted access depending on the season and local regulations. Accessibility varies by location — please discuss any mobility requirements with your advisor before booking.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
