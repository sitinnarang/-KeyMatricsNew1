"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme, type Theme } from "@/lib/theme";
import { triggerTranslate } from "@/components/GoogleTranslate";

/* ── Data ────────────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Automation", href: "/automation" },
  { label: "Small Business", href: "/small-business" },
  { label: "About", href: "/#about" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const LANGUAGES = [
  { label: "English", code: "en" },
  { label: "Français", code: "fr" },
  { label: "Español", code: "es" },
  { label: "हिन्दी", code: "hi" },
  { label: "ਪੰਜਾਬੀ", code: "pa" },
  { label: "中文", code: "zh-CN" },
  { label: "العربية", code: "ar" },
  { label: "اردو", code: "ur" },
  { label: "Filipino", code: "tl" },
  { label: "Deutsch", code: "de" },
  { label: "Português", code: "pt" },
  { label: "한국어", code: "ko" },
  { label: "日本語", code: "ja" },
] as const;

const THEMES: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "blue", label: "Blue" },
];

/* ── Dropdown animation variants ─────────────────────── */
const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.18, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -6, scale: 0.95, transition: { duration: 0.12 } },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: "auto" as const, opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 } },
};

/* ── SVG icons (inline to avoid extra deps) ──────────── */
function GearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Component ───────────────────────────────────────── */
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const themeRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close dropdowns on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) setThemeOpen(false);
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navbar-bg backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1 lg:px-8">
        {/* ── Logo ──────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/KeyMetrics.png"
            alt="Key Metrics Accounting"
            style={{ height: "90px", width: "auto", objectFit: "contain" }}
          />
          <div className="hidden sm:block leading-snug">
            <span className={`block text-[1.3rem] font-extrabold transition-colors duration-300 ${scrolled ? "text-[#003c47]" : "text-white"}`}>Key Metrics</span>
            <span className="block text-[0.85rem] font-semibold text-[#2ed1cd] tracking-[0.06em] uppercase">
              Accounting
            </span>
          </div>
        </Link>

        {/* ── Desktop links ─────────────────────── */}
        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-fg transition-colors hover:text-brand hover:bg-brand/10"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Right actions ─────────────────────── */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <div className="relative" ref={themeRef}>
            <button
              onClick={() => { setThemeOpen(!themeOpen); setLangOpen(false); }}
              className="flex items-center justify-center rounded-lg p-2 text-fg-muted transition-colors hover:text-brand hover:bg-brand/10"
              aria-label="Toggle theme"
            >
              <GearIcon className="h-5 w-5" />
            </button>
            <AnimatePresence>
              {themeOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="notranslate absolute right-0 mt-2 w-36 rounded-xl border border-surface-border bg-surface p-1 shadow-xl"
                >
                  {THEMES.map((t) => (
                    <button
                      key={t.value}
                      onClick={() => { setTheme(t.value); setThemeOpen(false); }}
                      className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors ${
                        theme === t.value
                          ? "bg-brand/15 text-brand font-semibold"
                          : "text-fg hover:bg-brand/10 hover:text-brand"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Language selector */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => { setLangOpen(!langOpen); setThemeOpen(false); }}
              className="flex items-center justify-center rounded-lg p-2 text-fg-muted transition-colors hover:text-brand hover:bg-brand/10"
              aria-label="Select language"
            >
              <GlobeIcon className="h-5 w-5" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="notranslate absolute right-0 mt-2 max-h-72 w-44 overflow-y-auto rounded-xl border border-surface-border bg-surface p-1 shadow-xl"
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => { 
                        setSelectedLang(lang.label); 
                        setLangOpen(false);
                        triggerTranslate(lang.code);
                      }}
                      className={`flex w-full items-center rounded-lg px-3 py-2 text-sm transition-colors ${
                        selectedLang === lang.label
                          ? "bg-brand/15 text-brand font-semibold"
                          : "text-fg hover:bg-brand/10 hover:text-brand"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-site-dark transition-colors hover:bg-brand-dark"
          >
            Free Consultation
          </Link>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex xl:hidden items-center justify-center rounded-lg p-2 text-fg-muted transition-colors hover:text-brand hover:bg-brand/10"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* ── Mobile menu ──────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t border-surface-border bg-surface xl:hidden"
          >
            <div className="mx-auto max-w-7xl px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-fg transition-colors hover:bg-brand/10 hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 block rounded-full bg-brand px-5 py-3 text-center text-sm font-semibold text-site-dark transition-colors hover:bg-brand-dark"
              >
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
