import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ButtonLinkProps {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function ButtonLink({ to, children, variant = 'primary', size = 'md', className = '', onClick }: ButtonLinkProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const variants = {
    primary: 'bg-emerald-900 text-white hover:bg-emerald-800 shadow-soft hover:shadow-card',
    secondary: 'bg-white text-emerald-900 border border-emerald-900 hover:bg-emerald-100',
    tertiary: 'text-emerald-900 hover:text-emerald-800 underline-offset-4 hover:underline',
    ghost: 'text-charcoal-700 hover:text-emerald-900 hover:bg-emerald-100',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 shadow-soft',
  };
  return (
    <Link to={to} onClick={onClick} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'gold' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export function Button({ children, variant = 'primary', size = 'md', className = '', onClick, type = 'button', disabled }: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const variants = {
    primary: 'bg-emerald-900 text-white hover:bg-emerald-800 shadow-soft hover:shadow-card',
    secondary: 'bg-white text-emerald-900 border border-emerald-900 hover:bg-emerald-100',
    tertiary: 'text-emerald-900 hover:text-emerald-800 underline-offset-4 hover:underline',
    ghost: 'text-charcoal-700 hover:text-emerald-900 hover:bg-emerald-100',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 shadow-soft',
    danger: 'bg-white text-error border border-error hover:bg-red-50',
  };
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export function SectionHeading({ eyebrow, title, subtitle, center = false }: { eyebrow?: string; title: string; subtitle?: string; center?: boolean }) {
  return (
    <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-3">{eyebrow}</p>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold text-charcoal-950 leading-tight">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-charcoal-700 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}

export function Badge({ label, color, bgColor }: { label: string; color: string; bgColor: string }) {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
      style={{ color, backgroundColor: bgColor }}
    >
      {label}
    </span>
  );
}

export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-10 ${className}`}>
      {children}
    </div>
  );
}
