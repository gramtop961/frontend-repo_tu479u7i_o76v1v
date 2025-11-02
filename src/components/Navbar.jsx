import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <a href="#home" className="font-semibold tracking-tight text-neutral-900 dark:text-white">
          <span className="text-indigo-600">&lt;/&gt;</span> Flames
        </a>
        <ul className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Let’s talk
        </a>
      </nav>
    </header>
  );
}
