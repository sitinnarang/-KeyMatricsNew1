"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const articles = [
  {
    slug: "payroll-services-calgary",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    tag: "Tax",
    title:
      "Why Are More Businesses Switching to Professional Payroll Services?",
    excerpt:
      "Discover why Calgary businesses are increasingly outsourcing payroll to professional firms and how it saves time, reduces errors, and keeps you CRA-compliant.",
    date: "Mar 28, 2026",
  },
  {
    slug: "best-accountant-calgary",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tag: "Accounting",
    title: "Why Hiring the Best Accountant Matters for Financial Growth",
    excerpt:
      "The right accountant does more than file taxes. Learn how a strategic accounting partnership accelerates business growth and protects your bottom line.",
    date: "Mar 21, 2026",
  },
  {
    slug: "bookkeeping-services-essential",
    image:
      "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop",
    tag: "Accounting",
    title: "Why Bookkeeping Services Are Essential for Growth",
    excerpt:
      "Clean books are the foundation of every successful business. Explore why professional bookkeeping is a non-negotiable for scaling companies.",
    date: "Mar 14, 2026",
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function BlogPreview() {
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
            Financial Intelligence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#003c47] mt-3">
            Expert <span className="text-[#2ed1cd]">Insights &amp; Guides</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 text-lg">
            Stay ahead with the latest in Canadian tax law, financial
            strategies, and business growth advice from our certified experts.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article
              key={article.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariant}
              className="group bg-surface rounded-2xl border border-surface-border overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 bg-[#2ed1cd] text-[#003c47] text-xs font-semibold px-3 py-1 rounded-full">
                  {article.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-gray-400 text-xs mb-2">{article.date}</p>
                <h3 className="text-lg font-bold text-[#003c47] mb-2 leading-snug group-hover:text-[#2ed1cd] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                >
                  Read More
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
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" as const }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#003c47] font-semibold border-2 border-[#003c47] px-8 py-3 rounded-full hover:bg-[#003c47] hover:text-white transition-all duration-300"
          >
            View All Articles
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
