"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" as const },
  }),
};

const floatAnimation = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

const serviceTags = [
  "Tax Strategy",
  "Bookkeeping",
  "Business Advisory",
  "Payroll",
  "Wealth Management",
];

function PhoneMockup() {
  return (
    <div className="relative w-[260px] h-[520px] mx-auto">
      {/* Phone frame */}
      <div className="absolute inset-0 rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl p-[3px]">
        <div className="w-full h-full rounded-[38px] bg-[#0a1628] overflow-hidden flex flex-col">
          {/* Notch */}
          <div className="flex justify-center pt-2 pb-3">
            <div className="w-24 h-6 bg-gray-900 rounded-full" />
          </div>

          {/* Screen content */}
          <div className="flex-1 px-4 pb-4 flex flex-col gap-3">
            {/* Header */}
            <div className="text-center">
              <p className="text-gray-400 text-[10px] tracking-wide uppercase">
                Total Balance
              </p>
              <p className="text-white text-2xl font-bold mt-0.5">
                $48,259.00
              </p>
            </div>

            {/* Mini chart */}
            <div className="bg-[#0f2137] rounded-xl p-3 flex-shrink-0">
              <div className="flex items-end justify-between h-16 gap-1">
                {[40, 55, 35, 70, 50, 80, 65, 90, 75, 85, 60, 95].map(
                  (h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{
                        height: `${h}%`,
                        background:
                          i >= 9
                            ? "linear-gradient(to top, #2ed1cd, #34e8e3)"
                            : "rgba(46, 209, 205, 0.25)",
                      }}
                    />
                  )
                )}
              </div>
              <div className="flex justify-between mt-2 text-[8px] text-gray-500">
                <span>Jan</span>
                <span>Apr</span>
                <span>Jul</span>
                <span>Oct</span>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 bg-[#0f2137] rounded-lg p-1">
              <div className="flex-1 text-center py-1.5 rounded-md bg-[#2ed1cd] text-[#003c47] text-[10px] font-semibold">
                Income
              </div>
              <div className="flex-1 text-center py-1.5 rounded-md text-gray-400 text-[10px]">
                Expenses
              </div>
              <div className="flex-1 text-center py-1.5 rounded-md text-gray-400 text-[10px]">
                Savings
              </div>
            </div>

            {/* Income rows */}
            <div className="flex flex-col gap-2 flex-1">
              {[
                {
                  label: "Revenue",
                  amount: "$12,400",
                  change: "+8.2%",
                  color: "bg-teal-500",
                },
                {
                  label: "Investments",
                  amount: "$4,850",
                  change: "+3.1%",
                  color: "bg-blue-500",
                },
                {
                  label: "Tax Refund",
                  amount: "$2,100",
                  change: "+100%",
                  color: "bg-purple-500",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-2 bg-[#0f2137] rounded-lg p-2.5"
                >
                  <div
                    className={`w-7 h-7 rounded-full ${row.color} flex items-center justify-center`}
                  >
                    <span className="text-white text-[10px] font-bold">$</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-[11px] font-medium">
                      {row.label}
                    </p>
                    <p className="text-gray-500 text-[9px]">This month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-[11px] font-semibold">
                      {row.amount}
                    </p>
                    <p className="text-[#2ed1cd] text-[9px]">{row.change}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] min-h-[90vh] flex items-center">
      {/* Subtle background pattern */}
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

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left column */}
          <motion.div
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Key Metrics Accounting
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Streamline Your Finances,{" "}
              <span className="text-[#2ed1cd]">Empower</span> Your Growth
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Calgary&apos;s trusted accounting firm helping businesses and
              individuals make smarter financial decisions since 2008.
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20"
              >
                Book A Call
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
            </div>
          </motion.div>

          {/* Center column — Phone */}
          <motion.div
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex justify-center"
          >
            <motion.div animate={floatAnimation}>
              <PhoneMockup />
            </motion.div>
          </motion.div>

          {/* Right column */}
          <motion.div
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="flex flex-col gap-6"
          >
            <p className="text-gray-300 leading-relaxed">
              From tax strategy to wealth management, we provide end-to-end
              financial solutions tailored for Calgary businesses and families.
            </p>

            <div className="flex flex-wrap gap-2">
              {serviceTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-[#2ed1cd] border border-[#2ed1cd]/30 rounded-full px-3 py-1.5 bg-[#2ed1cd]/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <p className="text-[#2ed1cd] text-4xl font-bold">$2.4M+</p>
              <p className="text-gray-400 text-sm mt-1">
                In tax savings delivered to our clients last year
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
