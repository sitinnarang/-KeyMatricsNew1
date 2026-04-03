"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Strategy Call",
    description:
      "Book a complimentary 30-minute consultation. We analyze your financial picture and identify immediate opportunities.",
  },
  {
    num: "02",
    title: "Deep-Dive Analysis",
    description:
      "Our CPAs review your full financial history, tax returns, and business structure to uncover every optimization.",
  },
  {
    num: "03",
    title: "Custom Roadmap",
    description:
      "Receive a personalized financial roadmap with specific actions, projections, and guaranteed savings.",
  },
  {
    num: "04",
    title: "Execute & Grow",
    description:
      "We implement everything, handle all filings and CRA communication, and provide proactive year-round support.",
  },
];

const stepVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Process() {
  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-16"
        >
          <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
            Your Path to{" "}
            <span className="text-[#2ed1cd]">Financial Clarity</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Four simple steps from first conversation to transformed finances.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting gradient line (desktop) */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#2ed1cd]/20 via-[#2ed1cd] to-[#2ed1cd]/20" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={stepVariant}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number circle */}
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#003c47] to-[#005566] flex items-center justify-center mb-6 shadow-lg shadow-[#003c47]/20">
                  <span className="text-[#2ed1cd] text-2xl font-bold">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#003c47] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
