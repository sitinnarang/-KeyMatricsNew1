"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Nathan Chen", role: "Managing Partner, CPA", initials: "NC", bio: "18+ years in Canadian tax strategy and corporate restructuring." },
  { name: "Aisha Patel", role: "Senior Tax Manager", initials: "AP", bio: "Specialist in CRA audit defense with a 94% clean-close record." },
  { name: "Marcus Liu", role: "Bookkeeping Lead", initials: "ML", bio: "QuickBooks ProAdvisor and Xero Certified Partner." },
  { name: "Sarah Thompson", role: "Payroll Specialist", initials: "ST", bio: "Multi-province payroll expert with zero CRA penalties." },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-bg-alt scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#e6f9f8] text-[#1ab5b1] border border-[#2ed1cd]/30 mb-4">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#003c47] mb-4">
            Meet the <span className="text-[#2ed1cd]">Experts</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Dedicated CPAs and financial professionals who deliver measurable results for every client.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-surface rounded-2xl border border-surface-border p-8 text-center transition-shadow hover:shadow-xl hover:border-brand/40"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#003c47] to-[#0a7a8a] mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                {member.initials}
              </div>
              <h3 className="text-lg font-bold text-[#003c47] mb-1">{member.name}</h3>
              <p className="text-sm font-medium text-[#2ed1cd] mb-3">{member.role}</p>
              <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
