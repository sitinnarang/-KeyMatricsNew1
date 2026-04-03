"use client";

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

const categories = [
  {
    id: "personal",
    title: "Personal Tax",
    description: "Individual tax returns for every situation",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "corporate",
    title: "Corporate Tax",
    description: "Business tax preparation and strategy",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    description: "Monthly bookkeeping and financial reporting",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: "payroll",
    title: "Payroll",
    description: "Payroll processing and CRA remittances",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  popular?: boolean;
  description: string;
  features: string[];
  cta: string;
}

const pricingData: Record<string, PricingTier[]> = {
  personal: [
    {
      name: "Basic",
      price: "$49",
      description: "Simple tax returns for salaried employees",
      features: [
        "T4 employment income",
        "Basic deductions & credits",
        "RRSP & charitable donations",
        "CRA e-filing",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Standard",
      price: "$149",
      popular: true,
      description: "For individuals with multiple income sources",
      features: [
        "Everything in Basic",
        "Rental income (T776)",
        "Investment income (T3/T5)",
        "Self-employment income",
        "Capital gains & losses",
        "Prior year adjustments",
        "Phone & email support",
      ],
      cta: "Most Popular",
    },
    {
      name: "Premium",
      price: "$299",
      description: "Comprehensive tax planning and optimization",
      features: [
        "Everything in Standard",
        "Tax planning consultation",
        "Multi-province returns",
        "Foreign income reporting",
        "CRA correspondence handling",
        "Year-round tax advisory",
        "Priority support",
      ],
      cta: "Get Started",
    },
  ],
  corporate: [
    {
      name: "Starter",
      price: "$499",
      description: "For new and small corporations",
      features: [
        "T2 corporate tax return",
        "Basic financial statements",
        "GST/HST annual filing",
        "CRA e-filing",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Growth",
      price: "$899",
      popular: true,
      description: "For growing businesses with complex needs",
      features: [
        "Everything in Starter",
        "Quarterly GST/HST filing",
        "Tax planning strategy",
        "Shareholder remuneration planning",
        "Year-end adjustments",
        "CRA correspondence",
        "Phone & email support",
      ],
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For established businesses needing full support",
      features: [
        "Everything in Growth",
        "Multi-entity consolidation",
        "Transfer pricing",
        "SR&ED tax credits",
        "Board-ready reporting",
        "Dedicated account manager",
        "Priority support & advisory",
      ],
      cta: "Contact Us",
    },
  ],
  bookkeeping: [
    {
      name: "Essential",
      price: "$199",
      period: "/mo",
      description: "For small businesses with simple needs",
      features: [
        "Up to 100 transactions/month",
        "Bank reconciliation",
        "Monthly financial statements",
        "Accounts payable tracking",
        "Cloud accounting setup",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Professional",
      price: "$399",
      period: "/mo",
      popular: true,
      description: "For active businesses with moderate volume",
      features: [
        "Up to 300 transactions/month",
        "Everything in Essential",
        "Accounts receivable management",
        "Expense categorization & reporting",
        "Monthly review call",
        "Payroll integration",
        "Phone & email support",
      ],
      cta: "Most Popular",
    },
    {
      name: "Premium",
      price: "$699",
      period: "/mo",
      description: "For high-volume businesses needing full service",
      features: [
        "Unlimited transactions",
        "Everything in Professional",
        "Multi-currency support",
        "Custom reporting & KPIs",
        "Weekly review calls",
        "Controller-level oversight",
        "Priority support",
      ],
      cta: "Get Started",
    },
  ],
  payroll: [
    {
      name: "Small Team",
      price: "$99",
      period: "/mo",
      description: "For teams of up to 10 employees",
      features: [
        "Up to 10 employees",
        "Bi-weekly or monthly pay runs",
        "T4 & T4A preparation",
        "CRA remittance filing",
        "ROE generation",
        "Email support",
      ],
      cta: "Get Started",
    },
    {
      name: "Growing Team",
      price: "$199",
      period: "/mo",
      popular: true,
      description: "For teams of up to 50 employees",
      features: [
        "Up to 50 employees",
        "Everything in Small Team",
        "Direct deposit setup",
        "Benefits administration",
        "Custom pay schedules",
        "Workers compensation reporting",
        "Phone & email support",
      ],
      cta: "Most Popular",
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large teams with complex payroll needs",
      features: [
        "Unlimited employees",
        "Everything in Growing Team",
        "Multi-province payroll",
        "Union & shift differentials",
        "Custom integrations",
        "Dedicated payroll specialist",
        "Priority support",
      ],
      cta: "Contact Us",
    },
  ],
};

const faqs = [
  {
    question: "Are there any hidden fees?",
    answer:
      "No. Our pricing is fully transparent. The prices listed include everything described in each tier. If additional work is required beyond the scope, we'll discuss it with you upfront before proceeding.",
  },
  {
    question: "Can I switch plans or upgrade later?",
    answer:
      "Absolutely. You can upgrade or adjust your plan at any time. We'll prorate the difference and ensure a smooth transition with no disruption to your services.",
  },
  {
    question: "Do you offer discounts for bundled services?",
    answer:
      "Yes. Clients who bundle multiple services (e.g., bookkeeping + corporate tax + payroll) receive a 10-15% discount on the combined package. Contact us for a custom quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit cards, debit, e-transfer, and cheque. Monthly bookkeeping and payroll services are billed automatically. Tax preparation can be paid upon completion.",
  },
  {
    question: "Is there a contract or commitment?",
    answer:
      "Monthly services (bookkeeping and payroll) are billed month-to-month with no long-term contract. You can cancel with 30 days notice. Tax preparation is a one-time engagement per filing.",
  },
];

export default function PricingPage() {
  const [activeCategory, setActiveCategory] = useState("personal");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] flex items-center">
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

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
          >
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-3xl mx-auto"
          >
            Simple, <span className="text-[#2ed1cd]">Transparent</span> Pricing
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            No hidden fees, no surprises. Choose the plan that fits your needs
            and scale as you grow.
          </motion.p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <motion.button
                key={cat.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-2xl p-6 text-center border transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#003c47] border-[#2ed1cd]/30 shadow-xl"
                    : "bg-surface border-surface-border hover:shadow-lg hover:border-brand/20"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    activeCategory === cat.id
                      ? "bg-[#2ed1cd] text-white"
                      : "bg-[#2ed1cd]/10 text-[#2ed1cd]"
                  }`}
                >
                  {cat.icon}
                </div>
                <h3
                  className={`font-bold text-lg mb-1 transition-colors duration-300 ${
                    activeCategory === cat.id ? "text-white" : "text-[#003c47]"
                  }`}
                >
                  {cat.title}
                </h3>
                <p
                  className={`text-sm transition-colors duration-300 ${
                    activeCategory === cat.id ? "text-gray-300" : "text-gray-500"
                  }`}
                >
                  {cat.description}
                </p>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingData[activeCategory].map((tier, i) => (
              <motion.div
                key={`${activeCategory}-${tier.name}`}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  tier.popular
                    ? "bg-[#003c47] border-[#2ed1cd]/30 shadow-2xl scale-105"
                    : "bg-surface border-surface-border shadow-sm hover:shadow-xl"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#2ed1cd] text-[#003c47] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3
                    className={`text-xl font-bold mb-2 ${
                      tier.popular ? "text-white" : "text-[#003c47]"
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span
                      className={`text-5xl font-bold ${
                        tier.popular ? "text-[#2ed1cd]" : "text-[#003c47]"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span
                        className={`text-lg ${
                          tier.popular ? "text-gray-300" : "text-gray-500"
                        }`}
                      >
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-sm mt-2 ${
                      tier.popular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          tier.popular
                            ? "bg-[#2ed1cd]/20"
                            : "bg-[#2ed1cd]/10"
                        }`}
                      >
                        <svg
                          className="w-3 h-3 text-[#2ed1cd]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span
                        className={`text-sm ${
                          tier.popular ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="/contact"
                  className={`block text-center font-semibold py-3 rounded-full transition-colors duration-300 ${
                    tier.popular
                      ? "bg-[#2ed1cd] text-[#003c47] hover:bg-[#26b8b4]"
                      : "bg-[#003c47] text-white hover:bg-[#005566]"
                  }`}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-gray-400 text-sm mt-12"
          >
            All prices are in CAD. Tax preparation prices are per filing.
            Bookkeeping and payroll are billed monthly.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-bg-alt">
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
              Pricing Questions
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
                className="bg-surface rounded-2xl border border-surface-border overflow-hidden"
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
      <section className="py-24 bg-bg">
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
                Need a Custom Quote?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Let&apos;s Find the Right Plan
                <br />
                for Your Business
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Not sure which plan fits? Our team will assess your needs and
                recommend the most cost-effective solution. No obligation, no
                pressure.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg"
                >
                  Get a Custom Quote
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
