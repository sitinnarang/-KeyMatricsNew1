"use client";

import { motion } from "framer-motion";

const partners = [
  "CPA Canada",
  "QuickBooks ProAdvisor",
  "Xero Certified",
  "Sage Partner",
  "FreshBooks",
  "CRA Authorized",
  "NetSuite",
  "Wave Finance",
  "CPABC",
  "Bloomberg Tax",
];

export default function TrustBand() {
  return (
    <section className="py-6 bg-bg-alt overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
      >
        <p className="text-center text-xs text-gray-400 font-semibold tracking-widest uppercase mb-4">
          Trusted by leading businesses &amp; professional networks
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none" />

          <div className="flex whitespace-nowrap animate-marquee">
            {[...partners, ...partners].map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="inline-flex items-center gap-2 mx-8 text-gray-500 font-semibold text-sm tracking-wide select-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#2ed1cd] opacity-60" />
                {name}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
