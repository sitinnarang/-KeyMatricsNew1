"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const hours = [
  { day: "Mon", time: "8 AM – 7 PM" },
  { day: "Tue", time: "8 AM – 7 PM" },
  { day: "Wed", time: "8 AM – 7 PM" },
  { day: "Thu", time: "8 AM – 7 PM" },
  { day: "Fri", time: "8 AM – 6 PM" },
  { day: "Sat", time: "By Appt." },
  { day: "Sun", time: "Closed", closed: true },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    revenue: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
    setFormData({ ...formData, [target.name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] pt-32 pb-20">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-6">
            <a href="/" className="hover:text-[#2ed1cd] transition-colors">Home</a>
            <span>›</span>
            <span className="text-gray-300">Contact</span>
          </motion.nav>
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#2ed1cd]/15 text-[#2ed1cd] border border-[#2ed1cd]/30 mb-4">
            Get in Touch
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-white mt-4 leading-tight">
            Let&apos;s <span className="text-[#2ed1cd]">Start Talking</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-gray-300 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
            Ready to stop overpaying and start winning? Book a free 30-minute strategy call with a senior Key Metrics Accounting advisor — zero obligation, maximum insight.
          </motion.p>
        </div>
      </section>

      {/* ── Contact Method Cards ── */}
      <section className="py-16 bg-bg-alt">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📞", title: "Call Us", detail: <a href="tel:+18005559999" className="text-[#2ed1cd] font-bold hover:underline">1-800-555-9999</a>, note: "Mon–Fri, 8 AM – 7 PM MST\nAverage wait: under 2 minutes" },
              { icon: "✉️", title: "Email Us", detail: <a href="mailto:hello@keymetricsaccounting.ca" className="text-[#2ed1cd] font-bold hover:underline">hello@keymetricsaccounting.ca</a>, note: "We respond to all inquiries\nwithin 4 business hours" },
              { icon: "📍", title: "Visit Our Office", detail: <span className="font-bold text-[#003c47]">4310 104 Ave NE</span>, note: "Calgary, AB T3J 1W5\nBy appointment only" },
            ].map((card, i) => (
              <motion.div key={card.title} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-surface rounded-2xl border border-surface-border p-8 text-center shadow-sm hover:shadow-xl hover:border-brand/30 hover:-translate-y-1 transition-all duration-300">
                <div className="text-3xl mb-4">{card.icon}</div>
                <h3 className="text-lg font-bold text-[#003c47] mb-3">{card.title}</h3>
                <p className="mb-2">{card.detail}</p>
                <p className="text-sm text-gray-400 whitespace-pre-line">{card.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-3">
              <div className="bg-surface rounded-2xl p-8 md:p-10 shadow-sm border border-surface-border">
                <h2 className="text-2xl font-bold text-[#003c47] mb-1">Send Us a <span className="text-[#2ed1cd]">Message</span></h2>
                <p className="text-gray-500 mb-8">Fill out the form and a senior advisor will reach you within 4 business hours.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold text-[#003c47] mb-2">First Name <span className="text-red-500">*</span></label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="James" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold text-[#003c47] mb-2">Last Name <span className="text-red-500">*</span></label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Anderson" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-[#003c47] mb-2">Email Address <span className="text-red-500">*</span></label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="james@company.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-[#003c47] mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="(403) 555-0000" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-[#003c47] mb-2">Company Name</label>
                    <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Business Inc." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#003c47] mb-2">Service of Interest <span className="text-red-500">*</span></label>
                      <select id="service" name="service" value={formData.service} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-surface-border text-fg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors bg-surface">
                        <option value="" disabled>Select a service…</option>
                        <option value="tax-strategy">Tax Strategy &amp; Planning</option>
                        <option value="corporate-tax">Corporate Tax Filing</option>
                        <option value="personal-tax">Personal Tax Return</option>
                        <option value="bookkeeping">Bookkeeping &amp; Payroll</option>
                        <option value="advisory">Business Advisory</option>
                        <option value="cra">CRA Audit &amp; Representation</option>
                        <option value="wealth">Wealth Management</option>
                        <option value="estate">Estate &amp; Succession Planning</option>
                        <option value="multiple">Multiple Services</option>
                        <option value="not-sure">Not Sure — Need Guidance</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="revenue" className="block text-sm font-semibold text-[#003c47] mb-2">Annual Revenue / Budget</label>
                      <select id="revenue" name="revenue" value={formData.revenue} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-surface-border text-fg focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-colors bg-surface">
                        <option value="" disabled>Select a range…</option>
                        <option value="under-100k">Under $100,000</option>
                        <option value="100k-500k">$100,000 – $500,000</option>
                        <option value="500k-2m">$500,000 – $2,000,000</option>
                        <option value="2m-10m">$2,000,000 – $10,000,000</option>
                        <option value="over-10m">Over $10,000,000</option>
                        <option value="individual">Individual / Personal</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#003c47] mb-2">Tell Us About Your Needs <span className="text-red-500">*</span></label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required placeholder="Describe your current financial situation, goals, and challenges. The more detail you share, the better prepared our advisor will be for your consultation." className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[#003c47] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]/50 focus:border-[#2ed1cd] transition-colors resize-none" />
                  </div>

                  <div className="flex items-start gap-3">
                    <input type="checkbox" id="consent" name="consent" checked={formData.consent as unknown as boolean} onChange={handleChange} required className="mt-1 w-4 h-4 rounded border-gray-300 text-[#2ed1cd] focus:ring-[#2ed1cd]" />
                    <label htmlFor="consent" className="text-sm text-gray-500">
                      I agree to Key Metrics Accounting&apos;s <a href="#" className="text-[#2ed1cd] hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry. My information will never be shared with third parties.
                    </label>
                  </div>

                  <button type="submit" className={`w-full inline-flex items-center justify-center gap-2 font-semibold px-8 py-4 rounded-full transition-all shadow-lg text-lg ${submitted ? "bg-green-500 text-white shadow-green-500/20" : "bg-[#2ed1cd] text-[#003c47] hover:bg-[#26b8b4] shadow-[#2ed1cd]/20"}`}>
                    {submitted ? "✅ Message Sent!" : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-gray-400">🔒 AES-256 encrypted · 100% confidential · Never shared</p>
                </form>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="lg:col-span-2 flex flex-col gap-5">
              {[
                { icon: "📞", title: "Main Office Line", lines: [<a key="p" href="tel:+18005559999" className="text-[#2ed1cd] font-semibold hover:underline">1-800-555-9999</a>, "Press 1 for Tax, 2 for Bookkeeping, 3 for Advisory"] },
                { icon: "✉️", title: "Email Addresses", lines: [<a key="e1" href="mailto:hello@keymetricsaccounting.ca" className="text-[#2ed1cd] hover:underline">hello@keymetricsaccounting.ca</a>, <a key="e2" href="mailto:tax@keymetricsaccounting.ca" className="text-gray-500 hover:underline">tax@keymetricsaccounting.ca</a>, <a key="e3" href="mailto:advisory@keymetricsaccounting.ca" className="text-gray-500 hover:underline">advisory@keymetricsaccounting.ca</a>] },
                { icon: "📍", title: "Calgary (HQ)", lines: ["4310 104 Ave NE", "Calgary, AB T3J 1W5"] },
                { icon: "🏢", title: "Vancouver Office", lines: ["1090 West Georgia St, Suite 680", "Vancouver, BC V6E 3V7"] },
              ].map((card, i) => (
                <motion.div key={card.title} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group bg-surface rounded-2xl p-6 border border-surface-border shadow-sm hover:shadow-lg hover:border-brand/20 transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#2ed1cd]/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-[#2ed1cd] group-hover:scale-110 transition-all duration-300">
                      {card.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#003c47] mb-1">{card.title}</h4>
                      {card.lines.map((line, j) => (
                        <p key={j} className="text-sm text-gray-500">{line}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Map */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.0!2d-113.9943!3d51.0889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371634d7b9b1c9f%3A0x1!2s4310+104+Ave+NE+Calgary+AB!5e0!3m2!1sen!2sca!4v1699000000000"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Key Metrics Accounting Calgary Office"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Office Hours ── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#e6f9f8] text-[#1ab5b1] border border-[#2ed1cd]/30 mb-4">When We&apos;re Open</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#003c47]">Office <span className="text-[#2ed1cd]">Hours</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto mt-4">Our team is available during the following hours. Premium clients have direct access to a dedicated advisor line.</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {hours.map((h, i) => (
              <motion.div key={h.day} custom={i} variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`rounded-2xl border p-5 text-center transition-all duration-300 hover:-translate-y-1 ${h.closed ? "bg-bg-alt border-surface-border" : "bg-surface border-surface-border hover:shadow-lg hover:border-brand/30"}`}>
                <div className={`text-sm font-bold mb-2 ${h.closed ? "text-gray-400" : "text-[#003c47]"}`}>{h.day}</div>
                <div className={`text-xs font-semibold ${h.closed ? "text-red-400" : "text-[#2ed1cd]"}`}>{h.time}</div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-10">
            <p className="text-sm text-gray-500 max-w-lg mx-auto mb-5">
              <strong className="text-[#003c47]">Tax Season (Jan 15 – Apr 30):</strong> Extended hours Mon–Sat 8 AM – 9 PM. We scale our team so every client gets the attention they deserve.
            </p>
            <a href="tel:+18005559999" className="inline-flex items-center gap-2 bg-[#003c47] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#005566] transition-colors">
              📞 Call to Schedule: 1-800-555-9999
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="py-20 bg-bg">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#003c47] to-[#0a7a8a] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Ahead with <span className="text-[#2ed1cd]">Financial Insights</span></h2>
              <p className="text-gray-300 text-sm leading-relaxed">Monthly tax updates, strategy guides, and CRA alerts from Canada&apos;s top CPAs — delivered to your inbox.</p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" className="px-5 py-3 rounded-full border-none text-sm w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-[#2ed1cd]" />
                <button type="submit" className="bg-[#2ed1cd] text-[#003c47] font-bold px-6 py-3 rounded-full hover:bg-[#26b8b4] transition-colors text-sm whitespace-nowrap">Subscribe</button>
              </form>
              <p className="text-gray-400 text-xs mt-3 text-center md:text-left">No spam, ever. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-bg-alt">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#003c47] via-[#005566] to-[#003c47] px-8 py-16 md:px-16 md:py-20 text-center">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#2ed1cd]/15 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#2ed1cd]/10 rounded-full blur-3xl" />
            <div className="relative">
              <span className="text-[#2ed1cd] text-sm font-semibold tracking-widest uppercase">No Commitment Required</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">Your Free Consultation <span className="text-[#2ed1cd]">Awaits</span></h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-5 leading-relaxed">
                In 30 minutes, a senior Key Metrics Accounting advisor will review your situation, surface hidden savings, and map a clear financial path forward — completely free.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <a href="tel:+18005559999" className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20 text-lg">
                  📞 Call 1-800-555-9999
                </a>
                <a href="mailto:hello@keymetricsaccounting.ca" className="inline-flex items-center gap-2 border-2 border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg">
                  ✉ Email Us Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
