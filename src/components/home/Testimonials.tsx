"use client";

import { motion } from "framer-motion";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  stars: number;
}

const row1: Testimonial[] = [
  {
    quote:
      "Key Metrics completely transformed how our company handles taxes. Their proactive strategies saved us $240,000 in year one alone. Nathan's team doesn't just file returns — they think 5 years ahead.",
    name: "Marcus Webb",
    role: "CEO, Apex Constructions Inc.",
    stars: 5,
  },
  {
    quote:
      "Derek's retirement and investment planning genuinely changed my life. I'm now retiring 6 years earlier than I ever thought possible. The tax efficiency of my portfolio has been nothing short of remarkable.",
    name: "Gary Olson",
    role: "Retired Entrepreneur",
    stars: 5,
  },
  {
    quote:
      "Switching to Key Metrics for our bookkeeping and payroll was the best business decision we made. We no longer lose sleep over CRA compliance — everything is handled proactively.",
    name: "Sophie Chen",
    role: "Founder, Luminary Studios",
    stars: 5,
  },
  {
    quote:
      "Our corporate restructuring through Key Metrics saved us over $180,000 annually. The holding company strategy they implemented was exactly what we needed as we scaled.",
    name: "James Patel",
    role: "MD, HealthFirst Clinics",
    stars: 5,
  },
  {
    quote:
      "I was terrified when CRA came with an audit notice. Aisha handled every communication with total confidence. The review closed with zero adjustments. I cannot recommend Key Metrics enough.",
    name: "Rachel Nguyen",
    role: "Owner, Bright Minds Childcare",
    stars: 5,
  },
];

const row2: Testimonial[] = [
  {
    quote:
      "As a real estate investor with 12 properties, my taxes were a nightmare. Key Metrics built a system that saves me $60K+ every year and keeps everything organized automatically.",
    name: "David Tremblay",
    role: "Real Estate Investor",
    stars: 5,
  },
  {
    quote:
      "We scaled from $2M to $8M revenue in 3 years with Key Metrics as our financial partner. Their fractional CFO service gave us the board-level insight we needed at a fraction of the cost.",
    name: "Priya Sharma",
    role: "CEO, TechFlow SaaS",
    stars: 5,
  },
  {
    quote:
      "Their SR&ED (R&D) tax credit work recovered $280,000 we didn't even know we were entitled to. That money funded our next product line. Absolute game-changer.",
    name: "Leon Fischer",
    role: "CTO, Innovex Labs",
    stars: 5,
  },
  {
    quote:
      "Simple, transparent, and always responsive. My personal tax has never been optimized to this level. I got a refund 40% larger than the previous year after switching to Key Metrics.",
    name: "Chloe Martin",
    role: "Freelance Designer",
    stars: 5,
  },
  {
    quote:
      "Our restaurant group employs 85 people across 4 locations. Key Metrics handles all payroll, remittances, and quarterly HST filings perfectly. Not a single late filing in 3 years.",
    name: "Omar Hassan",
    role: "Owner, Spice Route Group",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="inline-flex flex-shrink-0 w-[400px] mx-3">
      <div className="bg-surface rounded-2xl border border-surface-border p-6 shadow-sm w-full">
        <div className="text-[#2ed1cd] text-sm mb-3 tracking-wide">
          {"★".repeat(t.stars)}
        </div>
        <blockquote className="text-gray-600 text-sm leading-relaxed mb-4">
          &ldquo;{t.quote}&rdquo;
        </blockquote>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#003c47] to-[#0a7a8a] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            {t.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
          <div>
            <p className="text-[#003c47] text-sm font-bold">{t.name}</p>
            <p className="text-gray-400 text-xs">{t.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled1 = [...row1, ...row1];
  const doubled2 = [...row2, ...row2];

  return (
    <section className="py-24 bg-bg-alt overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="text-center mb-14"
        >
          <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
            Client Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
            What Our Clients <span className="text-[#2ed1cd]">Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            We measure our success by the breakthroughs our clients achieve.
          </p>
        </motion.div>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative mb-6">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap animate-ticker-left">
          {doubled1.map((t, i) => (
            <TestimonialCard key={`r1-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex whitespace-nowrap animate-ticker-right">
          {doubled2.map((t, i) => (
            <TestimonialCard key={`r2-${i}`} t={t} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes ticker-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes ticker-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-ticker-left {
          animation: ticker-left 40s linear infinite;
        }
        .animate-ticker-right {
          animation: ticker-right 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
