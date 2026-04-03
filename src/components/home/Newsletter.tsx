"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-24 bg-bg-alt">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47] px-8 py-16 md:px-16 md:py-20"
        >
          {/* Decorative blurs */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2ed1cd]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2ed1cd]/10 rounded-full blur-3xl" />

          <div className="relative max-w-2xl mx-auto text-center">
            <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 leading-tight">
              Stay Ahead with Financial Insights
            </h2>
            <p className="text-gray-300 text-lg mt-4 leading-relaxed">
              Get expert tax tips, CRA updates, and business growth strategies
              delivered to your inbox every month.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#2ed1cd] transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>

            <p className="text-gray-500 text-xs mt-4">
              No spam, ever. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
