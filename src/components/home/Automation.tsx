"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    icon: "\uD83D\uDD17",
    title: "Connect Your Accounts",
    description:
      "Securely link your bank accounts, credit cards, and business tools — QuickBooks, Xero, Shopify, Stripe, Square — in minutes. Bank-level 256-bit encryption protects every connection.",
    tags: ["QuickBooks", "Xero", "Stripe", "Shopify", "Square"],
  },
  {
    num: 2,
    icon: "\u26A1",
    title: "We Handle Everything Automatically",
    description:
      "Every transaction is automatically imported, categorized, and reconciled by our team daily. No manual data entry, no chasing receipts. Just clean, accurate books — updated in real time.",
    tags: ["Auto-categorization", "Daily reconciliation", "Receipt matching"],
  },
  {
    num: 3,
    icon: "\uD83D\uDCCA",
    title: "Get Real-Time Financial Clarity",
    description:
      "Access live P&L statements, balance sheets, and cash flow reports any time — from any device. Monthly delivery of insights with plain-language commentary from your dedicated CPA team.",
    tags: ["Live dashboards", "Monthly reports", "CPA insights"],
  },
];

const valueMetrics = [
  { icon: "\u23F1\uFE0F", bold: "10 hrs/month", text: "saved on average vs. self-managing books" },
  { icon: "\uD83C\uDFAF", bold: "99.8% accuracy", text: "transaction categorization rate" },
  { icon: "\uD83D\uDCC5", bold: "48-hr turnaround", text: "on monthly financial package delivery" },
  { icon: "\uD83D\uDEE1\uFE0F", bold: "Always audit-ready", text: "CRA-compliant records maintained year-round" },
];

const transactions = [
  { icon: "\u2601\uFE0F", name: "AWS Services", cat: "Software", amount: "\u2212$340", positive: false },
  { icon: "\uD83D\uDCBC", name: "Client Payment \u2014 Acme Corp", cat: "Revenue", amount: "+$12,500", positive: true },
  { icon: "\uD83C\uDFE2", name: "Office Rent \u2014 December", cat: "Rent", amount: "\u2212$3,200", positive: false },
  { icon: "\u2708\uFE0F", name: "Business Travel \u2014 YYZ", cat: "Travel", amount: "\u2212$892", positive: false },
];

const barData = [
  { label: "Jul", h: 52 },
  { label: "Aug", h: 65 },
  { label: "Sep", h: 58 },
  { label: "Oct", h: 74 },
  { label: "Nov", h: 68 },
  { label: "Dec", h: 100 },
];

const sectionFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stepVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

const dashVariant = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export default function Automation() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="text-center mb-16"
        >
          <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
            Smart Bookkeeping
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
            Bookkeeping on <span className="text-[#2ed1cd]">Autopilot</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            We connect directly to your accounts, auto-categorize every
            transaction, and deliver real-time financial clarity — so you can
            focus on growing your business, not managing it.
          </p>
        </motion.div>

        {/* Main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Steps timeline */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariant}
                className="flex gap-5"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#2ed1cd] text-[#003c47] flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#2ed1cd] to-[#2ed1cd]/20 my-2" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <div className="text-2xl mb-2">{step.icon}</div>
                  <h3 className="text-xl font-bold text-[#003c47] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium text-[#2ed1cd] border border-[#2ed1cd]/30 rounded-full px-3 py-1 bg-[#2ed1cd]/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Dashboard visual */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={dashVariant}
            className="bg-[#0a1628] rounded-2xl p-6 shadow-2xl border border-white/5"
          >
            {/* Dashboard header */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-white font-semibold text-sm">
                  Live Financial Dashboard
                </span>
              </div>
              <span className="text-gray-500 text-xs">Updated just now</span>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              <div className="bg-[#0f2137] rounded-xl p-3">
                <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                  Monthly Revenue
                </p>
                <p className="text-white text-lg font-bold mt-1">$84,320</p>
                <p className="text-green-400 text-xs mt-0.5">
                  &#9650; 12.4%
                </p>
              </div>
              <div className="bg-[#0f2137] rounded-xl p-3">
                <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                  Expenses
                </p>
                <p className="text-white text-lg font-bold mt-1">$31,180</p>
                <p className="text-red-400 text-xs mt-0.5">
                  &#9660; 3.1%
                </p>
              </div>
              <div className="bg-[#0f2137] rounded-xl p-3">
                <p className="text-gray-400 text-[10px] uppercase tracking-wide">
                  Net Profit
                </p>
                <p className="text-[#2ed1cd] text-lg font-bold mt-1">$53,140</p>
                <p className="text-green-400 text-xs mt-0.5">
                  &#9650; 18.7%
                </p>
              </div>
            </div>

            {/* Bar chart */}
            <div className="bg-[#0f2137] rounded-xl p-4 mb-5">
              <div className="flex items-end justify-between h-28 gap-2">
                {barData.map((bar) => (
                  <div key={bar.label} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-sm transition-all"
                      style={{
                        height: `${bar.h}%`,
                        background:
                          bar.h === 100
                            ? "linear-gradient(to top, #2ed1cd, #34e8e3)"
                            : "rgba(46, 209, 205, 0.25)",
                      }}
                    />
                    <span className="text-gray-500 text-[9px]">{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Transactions */}
            <div className="mb-4">
              <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Recent Transactions
              </p>
              <div className="space-y-2">
                {transactions.map((txn) => (
                  <div
                    key={txn.name}
                    className="flex items-center gap-3 bg-[#0f2137] rounded-lg px-3 py-2"
                  >
                    <span className="text-sm">{txn.icon}</span>
                    <span className="text-white text-xs font-medium flex-1 truncate">
                      {txn.name}
                    </span>
                    <span className="text-gray-500 text-[10px] hidden sm:block">
                      {txn.cat}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        txn.positive ? "text-green-400" : "text-gray-300"
                      }`}
                    >
                      {txn.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer badges */}
            <div className="flex flex-wrap gap-2">
              <span className="text-[10px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                \uD83D\uDD12 AES-256 Encrypted
              </span>
              <span className="text-[10px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                \u2713 CRA Compliant
              </span>
              <span className="text-[10px] text-gray-400 bg-white/5 border border-white/10 rounded-full px-3 py-1">
                \u26A1 Real-Time Sync
              </span>
            </div>
          </motion.div>
        </div>

        {/* Value metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionFade}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 bg-bg-alt rounded-2xl p-8"
        >
          {valueMetrics.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2"
            >
              <span className="text-2xl">{item.icon}</span>
              <strong className="text-[#003c47] text-sm">{item.bold}</strong>
              <span className="text-gray-500 text-xs leading-relaxed">
                {item.text}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionFade}
          className="text-center mt-12"
        >
          <Link
            href="/automation"
            className="inline-flex items-center gap-2 bg-[#003c47] text-white font-semibold px-8 py-4 rounded-full hover:bg-[#005566] transition-colors shadow-lg"
          >
            Explore How Automation Works
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
      </div>
    </section>
  );
}
