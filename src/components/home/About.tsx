"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-bg scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#003c47] to-[#005566] overflow-hidden relative">
                {/* Decorative pattern inside placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-full bg-[#2ed1cd]/20 mx-auto flex items-center justify-center mb-4">
                      <svg
                        className="w-10 h-10 text-[#2ed1cd]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-[#2ed1cd]/60 text-sm font-medium">
                      Our Team
                    </p>
                  </div>
                </div>

                {/* Decorative dots */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #2ed1cd 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-surface rounded-2xl shadow-xl p-5 border border-surface-border">
                <p className="text-3xl font-bold text-[#003c47]">18+</p>
                <p className="text-gray-500 text-sm">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] leading-tight">
              Trusted Financial Partners for Over 18 Years
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Key Metrics Accounting has been a cornerstone of the Calgary
              business community since 2008. Founded on the principle that every
              business deserves access to world-class financial guidance, we have
              grown from a one-person practice into a full-service firm serving
              over 500 businesses and individuals.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team of certified accountants and financial strategists brings
              deep expertise across industries — from energy and construction to
              tech startups and professional services. We go beyond compliance to
              deliver proactive, results-driven advice that protects your wealth
              and accelerates your goals.
            </p>

            {/* Feature list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                "CPA-Certified Team",
                "Industry-Specific Expertise",
                "Proactive Tax Planning",
                "Year-Round Availability",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2ed1cd]/10 flex items-center justify-center flex-shrink-0">
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
                  <span className="text-[#003c47] font-medium text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#2ed1cd] font-semibold mt-2 group"
            >
              Learn More About Our Team
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
