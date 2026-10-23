import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { HomePage } from '@/pages/HomePage';
import { PackagesPage } from '@/pages/PackagesPage';
import { PackageDetailPage } from '@/pages/PackageDetailPage';
import { UmrahLandingPage, HajjLandingPage, RamadanUmrahLandingPage, ZiyaratPage } from '@/pages/CategoryPages';
import { TravelGuideListPage, ArticlePage } from '@/pages/TravelGuidePages';
import { FaqsPage } from '@/pages/FaqsPage';
import { ContactPage } from '@/pages/ContactPage';
import { RequestQuotePage } from '@/pages/RequestQuotePage';
import { AboutPage, ReviewsPage, PolicyPage, NotFoundPage } from '@/pages/InfoPages';
import { privacyPolicy, bookingConditions, cancellationRefunds, accessibilityStatement } from '@/data/policies';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:slug" element={<PackageDetailPage />} />

            <Route path="/umrah" element={<UmrahLandingPage />} />
            <Route path="/umrah/packages" element={<PackagesPage />} />
            <Route path="/umrah/family" element={<PackagesPage />} />
            <Route path="/umrah/group" element={<PackagesPage />} />
            <Route path="/umrah/private" element={<PackagesPage />} />
            <Route path="/umrah/custom" element={<RequestQuotePage />} />

            <Route path="/hajj" element={<HajjLandingPage />} />
            <Route path="/hajj/packages" element={<PackagesPage />} />

            <Route path="/ramadan-umrah" element={<RamadanUmrahLandingPage />} />
            <Route path="/ramadan-umrah/packages" element={<PackagesPage />} />

            <Route path="/ziyarat" element={<ZiyaratPage />} />

            <Route path="/travel-guide" element={<TravelGuideListPage />} />
            <Route path="/travel-guide/:slug" element={<ArticlePage />} />

            <Route path="/faqs" element={<FaqsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/request-a-quote" element={<RequestQuotePage />} />

            <Route path="/privacy" element={<PolicyPage {...privacyPolicy} />} />
            <Route path="/booking-conditions" element={<PolicyPage {...bookingConditions} />} />
            <Route path="/cancellation-and-refunds" element={<PolicyPage {...cancellationRefunds} />} />
            <Route path="/accessibility" element={<PolicyPage {...accessibilityStatement} />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
