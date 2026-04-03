"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/* ── Blog post data ─────────────────────────────────── */
const blogPosts = [
  {
    slug: "payroll-services-calgary",
    title: "Why Are More Businesses Switching to Professional Payroll Services?",
    tags: ["Tax", "Business"],
    date: "Mar 28, 2026",
    excerpt:
      "Discover why Calgary businesses are increasingly outsourcing payroll to professional firms and how it saves time, reduces errors, and keeps you CRA-compliant.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
  },
  {
    slug: "best-accountant-calgary",
    title: "Why Hiring the Best Accountant Matters for Financial Growth",
    tags: ["Accounting"],
    date: "Mar 21, 2026",
    excerpt:
      "The right accountant does more than file taxes. Learn how a strategic accounting partnership accelerates business growth and protects your bottom line.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  },
  {
    slug: "bookkeeping-services-essential",
    title: "Why Bookkeeping Services Are Essential for Growth",
    tags: ["Accounting"],
    date: "Mar 14, 2026",
    excerpt:
      "Clean books are the foundation of every successful business. Explore why professional bookkeeping is a non-negotiable for scaling companies.",
    image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=600&h=400&fit=crop",
  },
  {
    slug: "small-business-accountants",
    title: "Why Hiring Small Business Accountants Is the Smartest Move",
    tags: ["Business"],
    date: "Mar 7, 2026",
    excerpt:
      "Small business accountants understand the unique challenges you face. Find out how specialized expertise translates into real savings and smarter decisions.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
  },
  {
    slug: "accounting-services-growth",
    title: "How Accounting Services Contribute to Business Growth",
    tags: ["Accounting", "Tax"],
    date: "Feb 28, 2026",
    excerpt:
      "From cash flow management to strategic tax planning, professional accounting services are the engine behind sustainable business growth in Calgary.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
  },
  {
    slug: "financial-consultant",
    title: "Why Financial Consultant Services Matter for Planning",
    tags: ["Planning"],
    date: "Feb 21, 2026",
    excerpt:
      "A financial consultant provides the roadmap for your future. Learn how expert guidance transforms retirement planning, investments, and wealth preservation.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&h=400&fit=crop",
  },
  {
    slug: "successful-companies",
    title: "Why Successful Companies Choose the Best Accountants",
    tags: ["Business"],
    date: "Feb 14, 2026",
    excerpt:
      "Behind every thriving company is a great accountant. Discover the traits top-performing businesses look for in their accounting partners.",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?w=600&h=400&fit=crop",
  },
  {
    slug: "professional-payroll",
    title: "How Professional Payroll Services Help Manage Finances",
    tags: ["Payroll"],
    date: "Feb 7, 2026",
    excerpt:
      "Professional payroll goes beyond issuing cheques. Learn how integrated payroll services improve cash flow visibility and reduce compliance risk.",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
  },
  {
    slug: "calgary-small-business",
    title: "Best Calgary Small Business Accountants for Growing Companies",
    tags: ["Tax", "Accounting"],
    date: "Jan 31, 2026",
    excerpt:
      "Finding the right accountant in Calgary can make or break your small business. Here is what to look for and why Key Metrics stands apart.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
  },
];

const categories = ["All", "Accounting", "Tax", "Payroll", "Business", "Planning"];

const popularArticles = blogPosts.slice(0, 4);

const categoryCountMap: Record<string, number> = {};
blogPosts.forEach((post) => {
  post.tags.forEach((tag) => {
    categoryCountMap[tag] = (categoryCountMap[tag] || 0) + 1;
  });
});

/* ── Animations ─────────────────────────────────────── */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const heroFade = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

/* ── Component ──────────────────────────────────────── */
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.tags.includes(activeFilter));

  return (
    <>
      {/* ── Hero ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] pt-32 pb-20">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={heroFade}
          className="relative max-w-7xl mx-auto px-6 text-center"
        >
          <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Insights &amp; Resources
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4 text-lg leading-relaxed">
            Stay informed with expert articles on tax strategy, bookkeeping best practices, payroll
            management, and business growth from the Key Metrics Accounting team.
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeFilter === cat
                    ? "bg-[#2ed1cd] text-[#003c47] shadow-lg shadow-[#2ed1cd]/20"
                    : "border border-white/20 text-white hover:border-[#2ed1cd] hover:text-[#2ed1cd]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ── Main content ──────────────────────────── */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Blog grid — 2/3 */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredPosts.map((post, i) => (
                    <motion.article
                      key={post.slug}
                      custom={i}
                      initial="hidden"
                      animate="visible"
                      variants={fadeInUp}
                      className="group bg-surface border border-surface-border rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute top-3 left-3 flex gap-2">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#2ed1cd] text-[#003c47] text-xs font-semibold px-3 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-fg-muted text-xs mb-2">{post.date}</p>
                        <h3 className="text-lg font-bold text-fg mb-2 leading-snug group-hover:text-[#2ed1cd] transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-fg-muted text-sm leading-relaxed mb-4">
                          {post.excerpt}
                        </p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1 text-[#2ed1cd] font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                        >
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </motion.article>
                  ))}
                </motion.div>
              </AnimatePresence>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <p className="text-fg-muted text-lg">No articles found in this category.</p>
                </div>
              )}
            </div>

            {/* Sidebar — 1/3 */}
            <aside className="space-y-8">
              {/* Popular Articles */}
              <div className="bg-surface border border-surface-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-fg mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {popularArticles.map((post, i) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="flex gap-3 group"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#2ed1cd]/10 text-[#2ed1cd] flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium text-fg group-hover:text-[#2ed1cd] transition-colors leading-snug">
                          {post.title}
                        </p>
                        <p className="text-xs text-fg-muted mt-1">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-surface border border-surface-border rounded-2xl p-6">
                <h3 className="text-lg font-bold text-fg mb-4">Categories</h3>
                <ul className="space-y-2">
                  {Object.entries(categoryCountMap).map(([cat, count]) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveFilter(cat)}
                        className="flex items-center justify-between w-full text-sm text-fg-muted hover:text-[#2ed1cd] transition-colors py-1"
                      >
                        <span>{cat}</span>
                        <span className="bg-[#2ed1cd]/10 text-[#2ed1cd] text-xs font-semibold px-2 py-0.5 rounded-full">
                          {count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-[#003c47] to-[#00505e] rounded-2xl p-6 text-white">
                <h3 className="text-lg font-bold mb-2">Newsletter</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  Get the latest accounting insights and tax tips delivered straight to your inbox.
                </p>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#2ed1cd] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#2ed1cd] text-[#003c47] font-semibold py-3 rounded-xl hover:bg-[#26b8b4] transition-colors text-sm"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
