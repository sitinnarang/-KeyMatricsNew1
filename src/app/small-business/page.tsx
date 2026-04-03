"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

const heroStats = [
  { value: "500+", label: "Small Businesses Served" },
  { value: "$2.4M+", label: "Tax Savings Delivered" },
  { value: "100%", label: "On-Time Filing Rate" },
  { value: "18+", label: "Years Experience" },
];

const services = [
  {
    slug: "corporate-tax",
    title: "GST/HST Filing",
    description:
      "Accurate GST registration, collection, and filing. We ensure you claim every eligible input tax credit.",
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
      "Professional T2 corporate tax return preparation with strategic planning to minimize your tax burden.",
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
      "Comprehensive personal tax returns for business owners, including self-employment, rental, and investment income.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    description:
      "Monthly bookkeeping, bank reconciliation, and financial statement preparation to keep your books clean.",
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
      "Full-service payroll processing, T4 preparation, ROE filing, and CRA remittance management.",
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
      "Strategic guidance on incorporation, restructuring, and growth planning to help you scale confidently.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "cra-audit",
    title: "CRA Audit Support",
    description:
      "Experienced representation during CRA reviews and audits. We handle all correspondence and protect your interests.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    slug: "wealth-management",
    title: "Financial Reporting",
    description:
      "Monthly and quarterly financial reports with insights and KPIs tailored to your industry and goals.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    slug: "tax-strategy",
    title: "Incorporation Services",
    description:
      "End-to-end incorporation support including federal/provincial registration, business number setup, and CRA accounts.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

const gstFeatures = [
  "GST/HST registration and setup",
  "Quarterly and annual GST filing",
  "Input tax credit optimization",
  "Voluntary disclosure programs",
  "GST audit representation",
  "Interstate and cross-border GST compliance",
];

const stats = [
  { value: "500+", label: "Businesses Served", description: "Across Calgary and Alberta" },
  { value: "$2.4M+", label: "Tax Savings", description: "Delivered last year" },
  { value: "100%", label: "On-Time Filing", description: "Never missed a deadline" },
  { value: "48hrs", label: "Response Time", description: "Average for all inquiries" },
];

const tSlips = [
  {
    name: "T4",
    title: "Statement of Remuneration Paid",
    description:
      "Employment income slips for all employees including salary, wages, taxable benefits, and deductions.",
  },
  {
    name: "T5",
    title: "Statement of Investment Income",
    description:
      "Investment income reporting including dividends, interest, and capital gains distributions.",
  },
  {
    name: "T4A",
    title: "Statement of Pension & Other Income",
    description:
      "Self-employment commissions, fees for services, pensions, and other income types.",
  },
  {
    name: "T1",
    title: "Individual Tax Return",
    description:
      "Comprehensive personal tax return preparation for business owners and sole proprietors.",
  },
];

const supportChannels = [
  {
    title: "Phone Support",
    description: "Speak directly with your dedicated accountant during business hours.",
    detail: "1-800-555-9999",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    title: "Email Support",
    description: "Send us your questions anytime — we respond within 24 hours.",
    detail: "info@keymetrics.ca",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Client Portal",
    description: "Upload documents, track progress, and message your team 24/7.",
    detail: "portal.keymetrics.ca",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const faqs = [
  {
    question: "Do I need to incorporate my small business?",
    answer:
      "It depends on your revenue, liability exposure, and growth plans. Generally, once your net business income exceeds $50,000-$60,000, incorporation can offer significant tax advantages. We provide a free assessment to help you decide.",
  },
  {
    question: "How often should I file GST/HST?",
    answer:
      "Filing frequency depends on your annual revenue. Businesses with over $6M file monthly, $1.5M-$6M file quarterly, and under $1.5M can file annually. We help you choose the optimal filing frequency and handle all submissions.",
  },
  {
    question: "What records do I need to keep for CRA?",
    answer:
      "CRA requires you to keep all business records for at least 6 years. This includes invoices, receipts, bank statements, payroll records, and tax returns. Our bookkeeping services ensure everything is organized and audit-ready.",
  },
  {
    question: "Can you help with my business if I'm just starting out?",
    answer:
      "Absolutely. We specialize in helping new businesses get set up correctly — from incorporation and CRA registration to choosing the right accounting software and establishing good financial habits from day one.",
  },
  {
    question: "What's the difference between a bookkeeper and an accountant?",
    answer:
      "Bookkeepers handle day-to-day transaction recording and reconciliation. Accountants provide higher-level services like tax planning, financial analysis, and strategic advisory. At Key Metrics, we offer both under one roof.",
  },
  {
    question: "How much does small business accounting cost?",
    answer:
      "Our small business packages start at $199/month for essential bookkeeping. Pricing depends on transaction volume, complexity, and which services you need. We offer a free consultation to provide an accurate quote.",
  },
];

export default function SmallBusinessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] min-h-[70vh] flex items-center">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              Small Business Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight"
            >
              GST &amp; Small Business{" "}
              <span className="text-[#2ed1cd]">Tax Services</span> in Calgary
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
            >
              From startup to scale-up, we handle your GST, corporate tax,
              bookkeeping, and payroll so you can focus on running your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20"
              >
                Get a Free Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Hero stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {heroStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-[#2ed1cd]">{stat.value}</p>
                <p className="text-gray-300 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Service Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              Our Services
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Everything Your Small Business Needs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg"
            >
              Comprehensive accounting, tax, and advisory services built for
              Calgary small businesses.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mb-5 group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003c47] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm hover:gap-2 transition-all duration-300"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting to Know Your Business */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#003c47] to-[#005566] overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-[#2ed1cd]/20 mx-auto flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-[#2ed1cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-[#2ed1cd]/60 text-sm font-medium">
                        Your Business, Our Priority
                      </p>
                    </div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #2ed1cd 1px, transparent 1px)",
                      backgroundSize: "24px 24px",
                    }}
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                  <p className="text-3xl font-bold text-[#003c47]">500+</p>
                  <p className="text-gray-500 text-sm">Businesses Trust Us</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Our Approach
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] leading-tight">
                Getting to Know Your Business
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every small business is unique, and cookie-cutter solutions
                don&apos;t cut it. We start by understanding your industry, your
                goals, and your pain points — then build a tailored accounting
                and tax strategy that grows with you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re a sole proprietor filing your first GST
                return or an established company with a team of 50, our CPAs
                bring the same level of dedication and expertise to your file.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {[
                  "Dedicated Account Manager",
                  "Industry-Specific Expertise",
                  "Proactive Tax Planning",
                  "Year-Round Support",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#2ed1cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[#003c47] font-medium text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* GST & Tax Compliance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Tax Compliance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] leading-tight">
                GST &amp; Tax Compliance Made Simple
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Navigating Canadian tax obligations can be complex. Our team
                ensures your business stays fully compliant with all CRA
                requirements while maximizing every available credit and
                deduction.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                {gstFeatures.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#2ed1cd]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-[#003c47] rounded-2xl p-8 shadow-2xl"
            >
              <div className="text-center mb-6">
                <p className="text-gray-400 text-xs uppercase tracking-wide">
                  Compliance Dashboard
                </p>
                <p className="text-white text-2xl font-bold mt-1">
                  All Filings Up to Date
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "GST/HST Q4 Filing", status: "Filed", date: "Jan 31, 2026" },
                  { label: "T2 Corporate Return", status: "Filed", date: "Mar 15, 2026" },
                  { label: "Payroll Remittance", status: "Filed", date: "Mar 15, 2026" },
                  { label: "T4 Slips", status: "Filed", date: "Feb 28, 2026" },
                  { label: "GST/HST Q1 Filing", status: "Upcoming", date: "Apr 30, 2026" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white/5 rounded-xl p-4"
                  >
                    <div>
                      <p className="text-white text-sm font-medium">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.date}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        item.status === "Filed"
                          ? "bg-[#2ed1cd]/10 text-[#2ed1cd]"
                          : "bg-yellow-500/10 text-yellow-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#2ed1cd]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2ed1cd]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-[#2ed1cd] font-semibold text-lg">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-sm mt-1">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cash Management */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-[#003c47] rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    Cash Flow Overview
                  </p>
                  <p className="text-white text-2xl font-bold mt-1">
                    $84,320.00
                  </p>
                </div>
                <span className="text-[#2ed1cd] text-sm font-semibold bg-[#2ed1cd]/10 px-3 py-1 rounded-full">
                  Healthy
                </span>
              </div>

              <div className="flex items-end justify-between h-28 gap-2 mb-6">
                {[35, 50, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i >= 10
                            ? "linear-gradient(to top, #2ed1cd, #34e8e3)"
                            : "rgba(46, 209, 205, 0.25)",
                      }}
                    />
                  )
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Receivables", value: "$32.1K" },
                  { label: "Payables", value: "$18.4K" },
                  { label: "Operating Cash", value: "$54.2K" },
                  { label: "Runway", value: "8.2 months" },
                ].map((item) => (
                  <div key={item.label} className="bg-white/5 rounded-xl p-3">
                    <p className="text-gray-400 text-[10px] uppercase">
                      {item.label}
                    </p>
                    <p className="text-white font-bold mt-1">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-6"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Cash Management
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] leading-tight">
                Stay on Top of Your Cash Flow
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Cash flow is the lifeblood of every small business. We help you
                track receivables, manage payables, and forecast your runway — so
                you always know where you stand financially.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our monthly reports give you a clear picture of your cash
                position, upcoming obligations, and growth opportunities. No
                surprises, no scrambling at tax time.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#2ed1cd] font-semibold mt-2 group"
              >
                Learn More About Cash Management
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* T-Slips Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              Tax Slips
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              T-Slip Preparation &amp; Filing
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg"
            >
              We prepare and file all required tax information slips accurately
              and on time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tSlips.map((slip, i) => (
              <motion.div
                key={slip.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2ed1cd]/10 flex items-center justify-center mx-auto mb-5">
                  <span className="text-[#2ed1cd] font-bold text-xl">
                    {slip.name}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#003c47] mb-2">
                  {slip.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {slip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              Support
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              We&apos;re Here When You Need Us
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, i) => (
              <motion.div
                key={channel.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mx-auto mb-5 group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                  {channel.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003c47] mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {channel.description}
                </p>
                <p className="text-[#2ed1cd] font-semibold">{channel.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
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
                {openFaq === i && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47] px-8 py-16 md:px-16 md:py-20 text-center"
          >
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2ed1cd]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2ed1cd]/10 rounded-full blur-3xl" />

            <div className="relative">
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Get Started
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Ready to Simplify
                <br />
                Your Small Business Finances?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Join over 500 Calgary small businesses who trust Key Metrics
                Accounting. Book your free consultation today and see the
                difference a dedicated accounting partner makes.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg"
                >
                  Book Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:18005559999"
                  className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call 1-800-555-9999
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
