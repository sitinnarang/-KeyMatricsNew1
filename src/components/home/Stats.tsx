"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedCounter({
  target,
  suffix,
  prefix = "",
  decimals = 0,
  duration = 2,
}: {
  target: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(latest) {
        if (decimals > 0) {
          setDisplay(latest.toFixed(decimals));
        } else {
          setDisplay(Math.round(latest).toLocaleString());
        }
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    target: 500,
    suffix: "+",
    prefix: "",
    decimals: 0,
    label: "Businesses Served",
    description: "Across Calgary and Alberta",
  },
  {
    target: 2.4,
    suffix: "M+",
    prefix: "$",
    decimals: 1,
    label: "Tax Savings Delivered",
    description: "For our clients last year",
  },
  {
    target: 100,
    suffix: "%",
    prefix: "",
    decimals: 0,
    label: "On-Time Filing",
    description: "Never missed a deadline",
  },
  {
    target: 18,
    suffix: "+",
    prefix: "",
    decimals: 0,
    label: "Years Experience",
    description: "Trusted since 2008",
  },
];

export default function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47]" />

      {/* Decorative elements */}
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
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="text-[#2ed1cd] font-semibold text-lg">
                {stat.label}
              </p>
              <p className="text-gray-400 text-sm mt-1">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
