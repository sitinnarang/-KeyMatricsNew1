"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

/* ── Data ────────────────────────────────────────────── */
const services = [
  {
    slug: "tax-strategy",
    title: "Tax Strategy & Planning",
    description:
      "Proactive tax planning to minimize your liability and maximize savings with custom strategies built for your situation.",
    stat: "$2.4M+",
    statLabel: "Client savings delivered",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    slug: "corporate-tax",
    title: "Corporate Tax (T2)",
    description:
      "Expert corporate tax preparation and filing, ensuring compliance while identifying every deduction available to your business.",
    stat: "$0",
    statLabel: "Penalties for our clients",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    slug: "personal-tax",
    title: "Personal Tax (T1)",
    description:
      "Accurate personal tax returns with an eye for credits and deductions you may have overlooked. Peace of mind, every filing season.",
    stat: "$4,200",
    statLabel: "Average client refund",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping & Reporting",
    description:
      "Accurate, up-to-date bookkeeping so you always know where your business stands. Monthly reconciliation and reporting included.",
    stat: "48hr",
    statLabel: "Turnaround time",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    slug: "payroll",
    title: "Payroll Services",
    description:
      "Reliable payroll processing, T4 preparation, and CRA remittances handled on time, every time. Focus on your team, not paperwork.",
    stat: "0",
    statLabel: "CRA penalties",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    description:
      "Strategic guidance to help you scale, restructure, or optimize your operations. We become your fractional CFO.",
    stat: "3.2x",
    statLabel: "Average client growth",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "cra-audit",
    title: "CRA Audit & Representation",
    description:
      "Experienced audit representation and defence. We handle CRA correspondence and protect your interests through the entire process.",
    stat: "94%",
    statLabel: "Clean audit outcomes",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    slug: "wealth-management",
    title: "Wealth Management",
    description:
      "Long-term wealth building strategies including investment guidance, retirement planning, and portfolio optimization.",
    stat: "$180M+",
    statLabel: "Assets under management",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    slug: "estate-succession",
    title: "Estate & Succession Planning",
    description:
      "Protect your legacy with comprehensive estate planning, trust structures, and succession strategies for families and business owners.",
    stat: "$1M+",
    statLabel: "LCGE utilized",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a2 2 0 100-4 2 2 0 000 4zm0 0v2" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "How do I know which service is right for my business?",
    answer:
      "We offer a free initial consultation where we assess your financial situation and recommend the services that will deliver the most value. Many clients start with one service and expand as their needs grow.",
  },
  {
    question: "Can I bundle multiple services together?",
    answer:
      "Absolutely. Most of our clients use two or more services. We offer bundled pricing that provides significant savings compared to purchasing services individually, and a single point of contact for all your needs.",
  },
  {
    question: "Do you work with businesses outside of Calgary?",
    answer:
      "Yes. While we are based in Calgary, we serve clients across Alberta and throughout Canada. Our cloud-based systems and virtual meeting capabilities make it easy to work with us from anywhere.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have deep expertise in energy, construction, technology, professional services, real estate, and healthcare. However, our team is equipped to serve businesses in virtually any industry.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "Most clients are fully onboarded within one to two weeks. For urgent needs like CRA audit representation or year-end filing, we offer expedited onboarding to meet your deadlines.",
  },
];

/* ── Animation variants ─────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

/* ── Component ───────────────────────────────────────── */
export default function ServicesPage() {
  const router = useRouter();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] pt-32 pb-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
          >
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight"
          >
            Comprehensive Financial Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Everything you need to stay compliant, reduce taxes, and grow your
            wealth — all under one roof. Explore our full range of accounting,
            tax, and advisory services tailored for Calgary businesses and
            individuals.
          </motion.p>
        </div>
      </section>

      {/* ── Expertise You Can Trust ─────────────────── */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left column — text */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Expertise You Can Trust
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3 leading-tight">
                Tailored Solutions for{" "}
                <span className="text-[#2ed1cd]">Every Financial Need</span>
              </h2>
              <p className="text-gray-500 mt-6 text-lg leading-relaxed">
                Whether you&apos;re a startup building financial foundations, a
                growing SME navigating complexity, or a high-net-worth individual
                planning for legacy — Key Metrics Accounting delivers precision,
                speed, and peace of mind.
              </p>
              <p className="text-gray-500 mt-4 text-lg leading-relaxed">
                Our 40+ certified professionals bring specialized knowledge
                across technology, real estate, healthcare, manufacturing,
                professional services, and non-profits. We don&apos;t believe in
                templates — every engagement starts with a deep understanding of
                your unique goals and the Canadian tax landscape.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 mt-8"
              >
                Start with a Free Consultation
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Right column — highlight cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="grid grid-cols-2 gap-5"
            >
              {[
                { value: "40+", label: "Certified Professionals" },
                { value: "15+", label: "Years Experience" },
                { value: "6", label: "Industry Specializations" },
                { value: "100%", label: "Client Retention Rate" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                    ease: "easeOut" as const,
                  }}
                  className="bg-bg-alt rounded-2xl p-6 border border-surface-border text-center hover:shadow-lg hover:border-brand/20 transition-all duration-300"
                >
                  <p className="text-3xl font-bold text-[#2ed1cd]">
                    {item.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 font-medium">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Service Cards Grid ───────────────────────── */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                onClick={() => router.push(`/services/${service.slug}`)}
                className="group cursor-pointer bg-surface rounded-2xl p-8 shadow-sm border border-surface-border hover:shadow-xl hover:border-brand/20 hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#2ed1cd]">
                        {service.stat}
                      </p>
                      <p className="text-xs text-gray-400">{service.statLabel}</p>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#003c47] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works — 4-Step Process ────────────── */}
      <section className="py-24 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              How We Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Our Simple{" "}
              <span className="text-[#2ed1cd]">4-Step Process</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg"
            >
              Getting started is easy. We make onboarding smooth and ensure you
              see value from day one.
            </motion.p>
          </div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Gradient connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-16 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-[#2ed1cd]/20 via-[#2ed1cd] to-[#2ed1cd]/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  description:
                    "Schedule a no-obligation discovery call. We learn your goals, challenges, and current financial situation in detail.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                },
                {
                  step: "2",
                  title: "Custom Proposal",
                  description:
                    "We deliver a tailored service proposal with a clear scope, timeline, and fully transparent pricing — no hidden fees, ever.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  ),
                },
                {
                  step: "3",
                  title: "Seamless Onboarding",
                  description:
                    "Your dedicated account manager handles data migration, system integration, and setup with zero disruption to operations.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  ),
                },
                {
                  step: "4",
                  title: "Ongoing Partnership",
                  description:
                    "Regular check-ins, proactive advice, and real-time reporting keep you informed and ahead of every financial challenge.",
                  icon: (
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: "easeOut" as const,
                  }}
                  className="relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative z-10 w-14 h-14 rounded-full bg-[#2ed1cd] text-white flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#2ed1cd]/25">
                    <span className="text-lg font-bold">{item.step}</span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#003c47] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────── */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
              Have questions about our services? Find answers to the most common
              inquiries below.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: i * 0.08,
                      duration: 0.4,
                      ease: "easeOut" as const,
                    },
                  },
                }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bg-alt transition-colors"
                >
                  <span className="font-semibold text-[#003c47] pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#2ed1cd] flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ──────────────────────────────── */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47] px-8 py-16 md:px-16 md:py-20 text-center"
          >
            {/* Decorative blurs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2ed1cd]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2ed1cd]/10 rounded-full blur-3xl" />

            <div className="relative">
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Get Started Today
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Not Sure Where to Start?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Book a free consultation and we&apos;ll recommend the right
                combination of services for your unique situation. No obligation,
                no pressure — just expert guidance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  Book Free Consultation
                </Link>
                <a
                  href="tel:18005559999"
                  className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call 1-800-555-9999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
