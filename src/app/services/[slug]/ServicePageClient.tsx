"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

/* ── Types ───────────────────────────────────────────── */
interface ServiceFeature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface WhyUsStat {
  value: string;
  label: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface KeyBenefit {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

interface AddOnService {
  title: string;
  description: string;
  href: string;
  linkText: string;
}

interface RelatedService {
  slug: string;
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  headline: string;
  description: string;
  heroStat: string;
  heroStatLabel: string;
  keyBenefits?: KeyBenefit[];
  overviewTitle: string;
  overviewText: string;
  overviewPoints: string[];
  features: ServiceFeature[];
  process: ProcessStep[];
  whyUs: WhyUsStat[];
  testimonials?: Testimonial[];
  addOns?: AddOnService[];
  faqs: FAQ[];
  relatedServices: RelatedService[];
}

/* ── Animation variants ─────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const staggerCard = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

/* ── Component ───────────────────────────────────────── */
export default function ServicePageClient({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] pt-32 pb-20">
        {/* Background pattern */}
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

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-[#2ed1cd] transition-colors">
              Home
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/services" className="hover:text-[#2ed1cd] transition-colors">
              Services
            </Link>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#2ed1cd]">{data.title}</span>
          </motion.nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                {data.headline}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
                {data.title}
              </h1>
              <p className="text-gray-300 text-lg mt-6 leading-relaxed max-w-2xl">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href="tel:18005559999"
                  className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  Call Us
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
            >
              <p className="text-[#2ed1cd] text-5xl md:text-6xl font-bold">
                {data.heroStat}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {data.heroStatLabel}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Key Benefits Band ────────────────────────── */}
      {data.keyBenefits && data.keyBenefits.length > 0 && (
        <section className="py-14 bg-bg border-b border-surface-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.keyBenefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerCard}
                  className="flex items-start gap-4"
                >
                  <div className="w-13 h-13 min-w-[3.25rem] rounded-2xl bg-[#2ed1cd]/10 border border-[#2ed1cd]/20 flex items-center justify-center text-2xl">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#003c47] text-sm leading-snug">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mt-1">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Overview ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3 leading-tight">
                {data.overviewTitle}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mt-6">
                {data.overviewText}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 40 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6, ease: "easeOut" as const },
                },
              }}
            >
              <div className="bg-bg-alt rounded-2xl p-8 border border-surface-border">
                <h3 className="text-lg font-bold text-[#003c47] mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {data.overviewPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 text-[#2ed1cd]"
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
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features Grid ────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerCard}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#2ed1cd]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#003c47] mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Steps ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.process.map((step, i) => (
              <motion.div
                key={step.step}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerCard}
                className="relative"
              >
                {/* Connector line */}
                {i < data.process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-[#2ed1cd]/20" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center mx-auto mb-5 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#003c47] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us Stats ─────────────────────────────── */}
      <section className="py-24 bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              Results That Speak for Themselves
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.whyUs.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerCard}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-[#2ed1cd]">
                  {stat.value}
                </p>
                <p className="text-gray-300 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Trusted by Business Owners
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
                What Our Clients Say
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.testimonials.map((testimonial, i) => (
                <motion.div
                  key={testimonial.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerCard}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Stars */}
                  <div className="flex gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, s) => (
                      <svg
                        key={s}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-600 leading-relaxed italic mb-6">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center text-sm font-bold text-[#00858a]">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-[#003c47] text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Add-On Services ──────────────────────────── */}
      {data.addOns && data.addOns.length > 0 && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Add-On Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
                Need More? We&apos;ve Got You Covered
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.addOns.map((addon, i) => (
                <motion.div
                  key={addon.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={staggerCard}
                >
                  <Link
                    href={addon.href}
                    className="group block relative overflow-hidden bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-[#2ed1cd]/20 hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#2ed1cd] to-[#00858a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <h3 className="text-lg font-bold text-[#003c47] mb-3 group-hover:text-[#00858a] transition-colors">
                      {addon.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm mb-5">
                      {addon.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                      {addon.linkText}
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
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── FAQ Accordion ────────────────────────────── */}
      <section className="py-24 bg-white">
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
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {data.faqs.map((faq, i) => (
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
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
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

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47] px-8 py-16 md:px-16 md:py-20 text-center"
          >
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2ed1cd]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2ed1cd]/10 rounded-full blur-3xl" />

            <div className="relative">
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
                Get Started
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
                Ready to Get Started?
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
                Let our team of experts handle your {data.title.toLowerCase()}{" "}
                needs so you can focus on what matters most — growing your
                business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* ── Related Services ─────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Explore More
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
              Related Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.relatedServices.map((service, i) => (
              <motion.div
                key={service.slug}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerCard}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:border-[#2ed1cd]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-[#003c47] mb-2 group-hover:text-[#2ed1cd] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm mb-4">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
