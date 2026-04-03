"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us when you:

• Fill out a contact form or request a consultation
• Subscribe to our newsletter
• Engage our accounting, bookkeeping, payroll, or tax services
• Communicate with us via email, phone, or our AI chat assistant

**Personal Information** may include: your name, email address, phone number, mailing address, business name, financial information relevant to the services we provide, and any other information you choose to share.

**Automatically Collected Information** includes: browser type, IP address, pages visited, time spent on pages, and referring website. We use this data to improve our website experience.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Provide, maintain, and improve our accounting and advisory services
• Process and complete financial transactions
• Send you technical notices, updates, and administrative messages
• Respond to your comments, questions, and requests
• Communicate with you about services, offers, and events
• Monitor and analyze trends, usage, and activities on our website
• Comply with legal obligations, including CRA reporting requirements

We will **never** sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "3. Data Security",
    content: `We take the security of your personal and financial information seriously. We implement industry-standard security measures including:

• **AES-256 encryption** for all data in transit and at rest
• **SOC-2 compliant** infrastructure and processes
• **Secure client portal** for document sharing and communication
• **Two-factor authentication** for all staff accounts
• **Regular security audits** and vulnerability assessments
• **Limited access controls** — only authorized team members access client data

While no method of transmission over the Internet is 100% secure, we strive to use commercially acceptable means to protect your personal information.`,
  },
  {
    title: "4. Data Retention",
    content: `We retain your personal information for as long as necessary to:

• Fulfill the purposes outlined in this Privacy Policy
• Comply with CRA record-keeping requirements (typically 6-7 years for tax records)
• Resolve disputes and enforce our agreements
• Meet legal and regulatory obligations

When data is no longer required, we securely destroy or anonymize it in accordance with our data retention schedule.`,
  },
  {
    title: "5. Your Rights",
    content: `Under Canadian privacy law (PIPEDA), you have the right to:

• **Access** your personal information held by us
• **Correct** any inaccurate or incomplete information
• **Withdraw consent** for the collection or use of your information (subject to legal obligations)
• **Request deletion** of your personal information (subject to retention requirements)
• **File a complaint** with the Office of the Privacy Commissioner of Canada

To exercise any of these rights, please contact us at hello@keymetricsaccounting.ca or call 1-800-555-9999.`,
  },
  {
    title: "6. Cookies & Analytics",
    content: `Our website uses cookies and similar technologies to:

• Remember your theme preferences (light/dark/blue mode)
• Analyze website traffic and usage patterns
• Improve website performance and user experience

You can control cookie settings through your browser preferences. Disabling cookies may affect certain website features such as the theme switcher and language selector.

We use Google Analytics to understand how visitors interact with our website. Google Analytics collects information anonymously and reports website trends without identifying individual visitors.`,
  },
  {
    title: "7. Third-Party Services",
    content: `We may use the following third-party services in the course of providing our services:

• **QuickBooks Online / Xero** — cloud accounting platforms
• **Google Workspace** — email and document management
• **Plaid** — secure bank account connections (for automated bookkeeping)
• **Google Translate** — website translation services
• **Google Maps** — office location display

Each of these services has its own privacy policy governing their use of data. We encourage you to review their policies.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete such information promptly.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically for any changes.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Key Metrics Accounting Corp.**
4310 104 Ave NE
Calgary, AB T3J 1W5

**Phone:** 1-800-555-9999
**Email:** hello@keymetricsaccounting.ca

**Office Hours:** Monday – Friday, 8:00 AM – 7:00 PM MST`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#003c47] via-[#00505e] to-[#003c47] pt-32 pb-16">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#2ed1cd]/15 text-[#2ed1cd] border border-[#2ed1cd]/30 mb-4">
            Legal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold text-white mt-3">
            Privacy <span className="text-[#2ed1cd]">Policy</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-gray-400 mt-4 text-sm">
            Last Updated: April 1, 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-500 text-lg leading-relaxed mb-12">
            Key Metrics Accounting Corp. (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our accounting and financial advisory services.
          </motion.p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.03, ease: "easeOut" as const }}
              >
                <h2 className="text-xl font-bold text-[#003c47] mb-4">{section.title}</h2>
                <div className="text-gray-500 leading-relaxed space-y-3 text-[0.93rem]">
                  {section.content.split("\n\n").map((paragraph, j) => (
                    <p key={j} className="whitespace-pre-line" dangerouslySetInnerHTML={{
                      __html: paragraph
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#003c47]">$1</strong>')
                    }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-[#003c47] mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-500 mb-8">We&apos;re happy to answer any questions about how we handle your data. Reach out anytime.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@keymetricsaccounting.ca" className="inline-flex items-center gap-2 bg-[#2ed1cd] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#26b8b4] transition-colors shadow-lg shadow-[#2ed1cd]/20">
                Email Us
              </a>
              <a href="tel:+18005559999" className="inline-flex items-center gap-2 border-2 border-[#003c47] text-[#003c47] font-semibold px-8 py-4 rounded-full hover:bg-[#003c47] hover:text-white transition-colors">
                Call 1-800-555-9999
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
