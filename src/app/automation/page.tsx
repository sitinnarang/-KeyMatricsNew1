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

const integrations = [
  {
    name: "QuickBooks",
    description: "Cloud accounting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Xero",
    description: "Cloud accounting",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: "Stripe",
    description: "Payment processing",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    description: "E-commerce",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    name: "Amazon",
    description: "Marketplace",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    name: "PayPal",
    description: "Online payments",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "Automated Bank Feeds",
    description:
      "Transactions flow directly from your bank into your books — categorized, matched, and reconciled automatically.",
  },
  {
    title: "Smart Invoice Processing",
    description:
      "Receipts and invoices are scanned, extracted, and posted with AI-powered data capture. No more manual entry.",
  },
  {
    title: "Real-Time Reporting",
    description:
      "Access profit & loss, balance sheets, and cash flow dashboards updated in real time — not weeks later.",
  },
  {
    title: "Automated Tax Reminders",
    description:
      "Never miss a GST filing or CRA deadline. Our system tracks every obligation and alerts you ahead of time.",
  },
  {
    title: "Payroll on Autopilot",
    description:
      "Employee pay runs, T4 generation, and CRA remittances handled automatically on your chosen schedule.",
  },
  {
    title: "Multi-Platform Sync",
    description:
      "Whether you sell on Shopify, Amazon, or in-store — all revenue channels consolidate into a single source of truth.",
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "Connect",
    description:
      "Link your bank accounts, payment processors, and e-commerce platforms in minutes. We handle the integrations so you don't have to.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
        />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Skip the Hassle",
    description:
      "Our automation engine categorizes transactions, reconciles accounts, and flags anomalies — all without lifting a finger.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Gain Clarity",
    description:
      "Access real-time dashboards, automated reports, and actionable insights that help you make smarter financial decisions.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Hours Saved Weekly", description: "Per client on average" },
  { value: "99.8%", label: "Accuracy Rate", description: "Automated reconciliation" },
  { value: "48hrs", label: "Turnaround Time", description: "For monthly close" },
  { value: "100%", label: "CRA Compliant", description: "Every filing, every time" },
];

const testimonials = [
  {
    quote:
      "Switching to Key Metrics' automated bookkeeping saved us over 15 hours a week. Our books are always up to date and we finally have real-time visibility into our cash flow.",
    name: "Sarah Chen",
    role: "Owner, Pacific Coast Retail",
  },
  {
    quote:
      "The integration with our Shopify store was seamless. Every sale, refund, and fee is automatically tracked. Tax season went from a nightmare to a non-event.",
    name: "Marcus Williams",
    role: "Founder, Alpine E-Commerce",
  },
];

const faqs = [
  {
    question: "How long does it take to set up the automation?",
    answer:
      "Most clients are fully onboarded within 48 hours. We handle all integrations, data migration, and initial categorization rules so you can start seeing results immediately.",
  },
  {
    question: "Will automation work with my existing accounting software?",
    answer:
      "Yes. We integrate with QuickBooks, Xero, and other major platforms. If you're using something else, we'll work with you to find the best migration path.",
  },
  {
    question: "Is my financial data secure?",
    answer:
      "Absolutely. We use bank-level 256-bit encryption, two-factor authentication, and SOC 2-compliant infrastructure. Your data never leaves Canadian servers.",
  },
  {
    question: "Do I still need a human accountant?",
    answer:
      "Yes — and that's the point. Automation handles the repetitive data entry so our CPAs can focus on strategy, tax planning, and advisory work that actually grows your business.",
  },
  {
    question: "What if something goes wrong with an automated transaction?",
    answer:
      "Our system flags anomalies in real time and our team reviews every flagged item. You'll always have a dedicated accountant overseeing your file.",
  },
  {
    question: "How accurate is the automated categorization?",
    answer:
      "Our smart categorization engine achieves 99.8% accuracy, built on 10+ years of accounting data across thousands of Canadian businesses. Every transaction is also reviewed by our CPA team during the monthly close process to ensure nothing slips through.",
  },
];

export default function AutomationPage() {
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

        <div className="relative max-w-7xl mx-auto px-6 py-24 w-full text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
          >
            Accounting Automation
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight max-w-4xl mx-auto"
          >
            Automate Your Accounting,{" "}
            <span className="text-[#2ed1cd]">Amplify</span> Your Efficiency
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Stop wasting hours on manual data entry. Our smart automation
            platform connects your tools, processes your transactions, and
            delivers real-time insights — so you can focus on growing your
            business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20"
            >
              Get Started
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
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* Integrations Grid */}
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
              Integrations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Connects to the Tools You{" "}
              <span className="text-[#2ed1cd]">Already Use</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg"
            >
              We integrate with the leading financial platforms and business tools
              — so your data flows seamlessly with zero manual work.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="group bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                  {integration.icon}
                </div>
                <h4 className="font-bold text-[#003c47] text-sm">
                  {integration.name}
                </h4>
                <p className="text-gray-400 text-xs mt-1">
                  {integration.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Embrace the Power — Features + Dashboard */}
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
              Features
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Embrace the Power of Automation
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg"
            >
              Our platform handles the busywork so your team — and ours — can
              focus on what really matters.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Feature list */}
            <div className="flex flex-col gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeInUp}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-[#2ed1cd]"
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
                  <div>
                    <h3 className="text-lg font-bold text-[#003c47]">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 mt-1 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Live Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="bg-[#003c47] rounded-2xl p-8 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wide">
                    Live Dashboard
                  </p>
                  <p className="text-white text-2xl font-bold mt-1">
                    $127,450.00
                  </p>
                </div>
                <span className="text-[#2ed1cd] text-sm font-semibold bg-[#2ed1cd]/10 px-3 py-1 rounded-full">
                  +12.4%
                </span>
              </div>

              {/* Mini bar chart */}
              <div className="flex items-end justify-between h-32 gap-2 mb-6">
                {[45, 65, 40, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm transition-all"
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

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "Revenue", value: "$48.2K", change: "+8.2%" },
                  { label: "Expenses", value: "$21.7K", change: "-3.1%" },
                  { label: "Net Profit", value: "$26.5K", change: "+14.6%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/5 rounded-xl p-3 text-center"
                  >
                    <p className="text-gray-400 text-[10px] uppercase">
                      {stat.label}
                    </p>
                    <p className="text-white font-bold mt-1">{stat.value}</p>
                    <p className="text-[#2ed1cd] text-xs mt-0.5">
                      {stat.change}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Step Workflow */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase"
            >
              How It Works
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              Three Steps to Effortless Accounting
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="relative group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                  {step.icon}
                </div>
                <span className="text-[#2ed1cd] text-sm font-bold">
                  Step {step.step}
                </span>
                <h3 className="text-xl font-bold text-[#003c47] mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
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
                <p className="text-gray-400 text-sm mt-1">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              Testimonials
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              What Our Clients Say
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <svg
                  className="w-10 h-10 text-[#2ed1cd]/30 mb-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-[#003c47]">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
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
                className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden"
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

      {/* Explore More */}
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
              Explore More
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3"
            >
              More Features to{" "}
              <span className="text-[#2ed1cd]">Power Your Business</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
                title: "One-on-One Expert Support",
                description:
                  "Every client gets a dedicated CPA team — real accountants who know your business and are always just a call or message away.",
                href: "/services/business-advisory",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Powerful Financial Reporting",
                description:
                  "Monthly P&L, balance sheets, cash flow statements — delivered with plain-language commentary so you always know where you stand.",
                href: "/services/bookkeeping",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Tax-Ready Year Round",
                description:
                  "Automated books mean your records are always CRA-compliant and audit-ready. When tax season hits, you're already prepared.",
                href: "/services/tax-strategy",
              },
            ].map((card, i) => (
              <motion.a
                key={card.title}
                href={card.href}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mb-5 group-hover:bg-[#2ed1cd] group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003c47] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {card.description}
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
              </motion.a>
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
                Ready to Automate?
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Let Automation Work
                <br />
                While You Focus on Growth
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Join hundreds of Calgary businesses who have already eliminated
                manual bookkeeping. Your free automation assessment is one click
                away.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg"
                >
                  Book Free Assessment
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
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
    </main>
  );
}
