import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';
import { Container } from './ui';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Packages', to: '/packages' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/';
    return location.pathname.startsWith(to);
  };

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-emerald-950 text-ivory-100 text-center py-2 px-4 text-xs md:text-sm">
        <span className="font-medium">Hajj 2027 inquiries are now open</span>
        <span className="hidden md:inline"> — subject to official registration and allocation. </span>
        <Link to="/hajj" className="underline text-gold-500 hover:text-gold-600 ml-1">Learn more</Link>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white'}`}>
        <Container className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0" aria-label="Hajj & Umrah Travel Agency home">
            <div className="w-10 h-10 rounded-xl bg-gradient-emerald flex items-center justify-center">
              <Compass className="w-5 h-5 text-gold-500" strokeWidth={1.5} />
            </div>
            <div className="hidden sm:block">
              <span className="font-display font-bold text-charcoal-950 text-lg leading-none block">Safa & Marwa</span>
              <span className="text-[10px] text-charcoal-700 tracking-widest uppercase">Hajj & Umrah Travel</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'text-emerald-900 bg-emerald-100'
                    : 'text-charcoal-700 hover:text-emerald-900 hover:bg-emerald-100/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a href="tel:+442012345678" className="flex items-center gap-1.5 text-sm font-medium text-charcoal-700 hover:text-emerald-900 transition-colors">
              <Phone className="w-4 h-4" />
              <span>020 1234 5678</span>
            </a>
            <Link
              to="/packages"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-emerald-900 text-white text-sm font-semibold hover:bg-emerald-800 shadow-soft transition-all"
            >
              Explore Packages
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-charcoal-950 hover:bg-emerald-100 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </header>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-charcoal-950/50 animate-fade-in" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-elevated overflow-y-auto animate-slide-in-right pt-20 pb-8">
            <nav className="flex flex-col px-5">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3.5 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'text-emerald-900 bg-emerald-100'
                      : 'text-charcoal-700 hover:bg-emerald-100/50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="my-4 h-px bg-neutral-200" />
              <a href="tel:+442012345678" className="flex items-center gap-2 px-4 py-3 text-charcoal-700 font-medium">
                <Phone className="w-5 h-5 text-emerald-900" />
                020 1234 5678
              </a>
              <Link
                to="/packages"
                className="mt-2 inline-flex items-center justify-center px-5 py-3.5 rounded-xl bg-emerald-900 text-white font-semibold"
              >
                Explore Packages
              </Link>
              <Link
                to="/request-a-quote"
                className="mt-3 inline-flex items-center justify-center px-5 py-3.5 rounded-xl border border-emerald-900 text-emerald-900 font-semibold"
              >
                Speak to an Advisor
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
