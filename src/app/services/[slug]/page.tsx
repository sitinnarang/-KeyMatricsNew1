import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageClient, { type ServiceData } from "./ServicePageClient";

/* ── Service Data ────────────────────────────────────── */
const serviceData: Record<string, ServiceData> = {
  "tax-strategy": {
    slug: "tax-strategy",
    title: "Tax Strategy & Planning",
    headline: "Proactive Tax Solutions",
    description:
      "Minimize your tax burden with proactive, CRA-compliant strategies tailored to your unique financial situation. Our team identifies opportunities before they pass, ensuring you keep more of what you earn.",
    heroStat: "$2.4M+",
    heroStatLabel: "Client tax savings delivered last year",
    overviewTitle: "Strategic Tax Planning That Delivers Real Results",
    overviewText:
      "Tax strategy is not about finding loopholes — it is about leveraging the full breadth of Canadian tax law to legally minimize your obligations. We work year-round with individuals and businesses in Calgary and across Canada to develop forward-looking plans that align with your goals, whether that means maximizing RRSP contributions, restructuring your business, or timing income recognition for optimal results.",
    overviewPoints: [
      "Comprehensive annual tax planning review",
      "Income splitting and family trust structures",
      "RRSP, TFSA, and RESP optimization",
      "Capital gains deferral strategies",
      "Corporate restructuring for tax efficiency",
      "Cross-border tax planning for U.S.-Canada situations",
    ],
    features: [
      {
        title: "Year-Round Planning",
        description:
          "Tax strategy is not a once-a-year event. We monitor legislative changes and adjust your plan throughout the year to capture every opportunity.",
      },
      {
        title: "Multi-Entity Optimization",
        description:
          "For business owners with holding companies, operating companies, and personal accounts, we optimize the flow of income across all entities.",
      },
      {
        title: "Retirement Tax Mapping",
        description:
          "Plan your retirement drawdown strategy years in advance to minimize lifetime taxes on RRSP, RRIF, and pension income.",
      },
      {
        title: "Capital Gains Planning",
        description:
          "Strategic timing of asset dispositions and use of the lifetime capital gains exemption to minimize taxes on investment gains.",
      },
      {
        title: "Income Splitting",
        description:
          "Legal income splitting strategies using spousal loans, family trusts, and salary/dividend mixes to reduce your household tax rate.",
      },
      {
        title: "Legislative Monitoring",
        description:
          "We track federal and provincial budget changes in real time, alerting you to new opportunities or risks that affect your plan.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Discovery",
        description:
          "We review your complete financial picture including income sources, assets, liabilities, and future goals.",
      },
      {
        step: "02",
        title: "Analysis",
        description:
          "Our team models multiple scenarios to identify the strategies that produce the greatest tax savings.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We execute the chosen strategies, coordinating with your legal and investment advisors as needed.",
      },
      {
        step: "04",
        title: "Monitoring",
        description:
          "Quarterly reviews ensure your plan stays on track and adapts to changes in tax law or your circumstances.",
      },
    ],
    whyUs: [
      { value: "$2.4M+", label: "Tax savings delivered to clients last year" },
      { value: "18+", label: "Years of tax planning expertise" },
      { value: "500+", label: "Active tax strategy clients" },
    ],
    faqs: [
      {
        question: "When should I start tax planning?",
        answer:
          "The best time to start is at the beginning of the tax year — or right now. The earlier we engage, the more strategies we can implement before year-end. That said, it is never too late to start planning for next year.",
      },
      {
        question: "Is tax planning only for high-income earners?",
        answer:
          "Not at all. Individuals at every income level can benefit from strategic planning. Optimizing RRSP contributions, maximizing credits, and timing deductions can save thousands regardless of your bracket.",
      },
      {
        question: "How is tax planning different from tax preparation?",
        answer:
          "Tax preparation is filing your return after the year ends. Tax planning is a proactive, year-round process of structuring your finances to minimize future tax obligations before they arise.",
      },
      {
        question: "Can you help with U.S.-Canada cross-border taxes?",
        answer:
          "Yes. We have deep expertise in cross-border tax issues including foreign tax credits, treaty benefits, FBAR reporting, and dual-status returns for individuals and businesses.",
      },
      {
        question: "How much can I realistically save?",
        answer:
          "Savings vary widely based on your situation. Our average client sees $4,800 in annual savings, but business owners with multi-entity structures often save significantly more through corporate restructuring.",
      },
    ],
    relatedServices: [
      {
        slug: "corporate-tax",
        title: "Corporate Tax (T2)",
        description:
          "Expert corporate tax filing that complements your strategic plan with accurate, on-time compliance.",
      },
      {
        slug: "personal-tax",
        title: "Personal Tax (T1)",
        description:
          "Accurate personal tax returns that implement the strategies developed in your tax plan.",
      },
      {
        slug: "wealth-management",
        title: "Wealth Management",
        description:
          "Align your investment strategy with your tax plan for maximum after-tax wealth accumulation.",
      },
    ],
  },

  "corporate-tax": {
    slug: "corporate-tax",
    title: "Corporate Tax (T2)",
    headline: "Expert Corporate Filing",
    description:
      "Accurate, compliant T2 filings with a proactive approach to identifying every deduction and credit your business is entitled to. We eliminate penalties and maximize your bottom line.",
    heroStat: "$0",
    heroStatLabel: "Penalties for our corporate clients",
    overviewTitle: "Corporate Tax Filing Done Right, Every Time",
    overviewText:
      "Filing a T2 corporate tax return is more than entering numbers — it requires deep understanding of the Income Tax Act, industry-specific deductions, and strategic timing. Our team handles everything from basic annual filings to complex multi-entity structures, ensuring your business stays compliant while paying the minimum tax legally required.",
    overviewPoints: [
      "T2 corporate income tax return preparation and filing",
      "Small business deduction and SBD limit optimization",
      "SR&ED tax credit identification and claims",
      "Capital cost allowance schedule optimization",
      "Associated corporation analysis and planning",
      "CRA correspondence and notice handling",
    ],
    features: [
      {
        title: "Zero-Penalty Guarantee",
        description:
          "Our rigorous review process and deadline tracking ensure your returns are filed accurately and on time, every time.",
      },
      {
        title: "Deduction Maximization",
        description:
          "We go beyond the obvious to find industry-specific deductions, investment tax credits, and CCA classes that reduce your taxable income.",
      },
      {
        title: "Multi-Entity Filing",
        description:
          "For businesses with holding companies, subsidiaries, or associated corporations, we coordinate filings for optimal tax outcomes.",
      },
      {
        title: "SR&ED Claims",
        description:
          "We identify qualifying Scientific Research and Experimental Development activities and prepare claims that withstand CRA review.",
      },
      {
        title: "Year-End Planning",
        description:
          "Strategic year-end timing of expenses, bonuses, and dividends to minimize your current-year corporate tax bill.",
      },
      {
        title: "GST/HST Coordination",
        description:
          "We ensure your GST/HST filings are aligned with your T2 return, catching input tax credits you may have missed.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Document Collection",
        description:
          "We gather your financial statements, trial balance, and supporting schedules through our secure portal.",
      },
      {
        step: "02",
        title: "Review & Optimize",
        description:
          "Our team reviews every line item, identifying deductions, credits, and optimization opportunities.",
      },
      {
        step: "03",
        title: "Prepare & File",
        description:
          "We prepare your T2 return, GIFI schedules, and all supporting forms, then file electronically with CRA.",
      },
      {
        step: "04",
        title: "Post-Filing Support",
        description:
          "We monitor your Notice of Assessment and handle any CRA correspondence or adjustments required.",
      },
    ],
    whyUs: [
      { value: "$0", label: "Penalties across all corporate filings" },
      { value: "99.8%", label: "First-filing acceptance rate" },
      { value: "350+", label: "Corporate returns filed annually" },
    ],
    faqs: [
      {
        question: "When is the T2 filing deadline?",
        answer:
          "T2 returns are due six months after your corporation's fiscal year-end. However, any taxes owing are due within two months (or three months for qualifying CCPCs) of your year-end.",
      },
      {
        question: "What records do I need to provide?",
        answer:
          "We need your financial statements or trial balance, bank statements, receipts for major expenses, loan documents, and any CRA correspondence. Our secure portal makes document sharing easy.",
      },
      {
        question: "Can you handle my corporate and personal returns together?",
        answer:
          "Absolutely. In fact, we recommend it. Coordinating your T2 and T1 filings allows us to optimize salary/dividend mix and other tax-saving strategies across both returns.",
      },
      {
        question: "What if I receive a CRA reassessment or audit?",
        answer:
          "We handle all CRA correspondence on your behalf. If a reassessment is issued, we review it, advise you on your options, and file objections where appropriate.",
      },
      {
        question: "Do you support businesses that operate in multiple provinces?",
        answer:
          "Yes. We prepare all required provincial allocation schedules and file in every jurisdiction where your business has a permanent establishment.",
      },
    ],
    relatedServices: [
      {
        slug: "tax-strategy",
        title: "Tax Strategy & Planning",
        description:
          "Complement your T2 filing with proactive planning to reduce next year's corporate tax bill.",
      },
      {
        slug: "bookkeeping",
        title: "Bookkeeping & Reporting",
        description:
          "Clean, accurate books make T2 preparation faster and more cost-effective.",
      },
      {
        slug: "cra-audit",
        title: "CRA Audit & Representation",
        description:
          "If CRA questions your return, our audit defence team has you covered.",
      },
    ],
  },

  "personal-tax": {
    slug: "personal-tax",
    title: "Personal Tax (T1)",
    headline: "Maximize Your Refund",
    description:
      "Accurate personal tax returns with a sharp eye for credits and deductions you may have overlooked. We deliver peace of mind and bigger refunds, every filing season.",
    heroStat: "$4,200",
    heroStatLabel: "Average client refund",
    overviewTitle: "Personal Tax Returns That Work Harder for You",
    overviewText:
      "Whether you are an employee, self-employed professional, or retiree, your personal tax situation deserves expert attention. Our team identifies every credit, deduction, and optimization available under the Income Tax Act — from medical expenses and childcare to home office deductions and capital gains reporting.",
    overviewPoints: [
      "T1 personal income tax return preparation",
      "Self-employment and rental income reporting",
      "Investment income and capital gains optimization",
      "Medical expense and disability tax credit claims",
      "Moving expense and home office deductions",
      "Foreign income reporting and treaty benefits",
    ],
    features: [
      {
        title: "Credit Maximization",
        description:
          "We systematically review over 400 potential credits and deductions to ensure nothing is missed on your return.",
      },
      {
        title: "Self-Employment Expertise",
        description:
          "Gig workers, freelancers, and sole proprietors get expert handling of business expenses, GST/HST, and home office deductions.",
      },
      {
        title: "Investment Reporting",
        description:
          "Accurate reporting of capital gains, T3/T5 income, foreign dividends, and cryptocurrency transactions.",
      },
      {
        title: "Prior-Year Adjustments",
        description:
          "If you missed deductions in previous years, we file T1 adjustments to recover the taxes you overpaid.",
      },
      {
        title: "Family Filing",
        description:
          "We coordinate returns for families to optimize pension splitting, spousal credits, and transfer of unused amounts.",
      },
      {
        title: "E-File & Fast Refunds",
        description:
          "Electronic filing with CRA means faster processing and direct deposit refunds, typically within two weeks.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Gather Slips",
        description:
          "Upload your T4s, T5s, T3s, receipts, and other documents through our secure client portal.",
      },
      {
        step: "02",
        title: "Expert Review",
        description:
          "A CPA reviews your documents, identifies optimization opportunities, and prepares your return.",
      },
      {
        step: "03",
        title: "Approval & File",
        description:
          "You review and approve the return, then we e-file directly with CRA for the fastest processing.",
      },
      {
        step: "04",
        title: "Refund Tracking",
        description:
          "We track your Notice of Assessment and follow up on any CRA queries until your refund is deposited.",
      },
    ],
    whyUs: [
      { value: "$4,200", label: "Average refund for our clients" },
      { value: "100%", label: "E-file rate for fastest processing" },
      { value: "2,000+", label: "Personal returns filed annually" },
    ],
    faqs: [
      {
        question: "What is the deadline for personal tax returns?",
        answer:
          "The standard T1 deadline is April 30. Self-employed individuals have until June 15 to file, but any balance owing is still due April 30.",
      },
      {
        question: "What documents do I need?",
        answer:
          "At minimum, you need your T4 slips, any T3/T5 investment slips, RRSP contribution receipts, and receipts for deductions like medical expenses or charitable donations.",
      },
      {
        question: "Can you file returns for previous years?",
        answer:
          "Yes. We can file late returns and amendments for up to 10 previous tax years. We often find missed deductions that result in additional refunds.",
      },
      {
        question: "I have rental income — can you help?",
        answer:
          "Absolutely. We handle all aspects of rental income reporting including CCA, expense allocation, and the proper treatment of capital vs. current expenses.",
      },
      {
        question: "Do you handle cryptocurrency?",
        answer:
          "Yes. We have experience with crypto tax reporting including capital gains/losses, staking rewards, DeFi transactions, and NFT dispositions under CRA guidelines.",
      },
    ],
    relatedServices: [
      {
        slug: "tax-strategy",
        title: "Tax Strategy & Planning",
        description:
          "Pair your return with a proactive plan to reduce next year's tax bill before it arrives.",
      },
      {
        slug: "wealth-management",
        title: "Wealth Management",
        description:
          "Optimize your investments and retirement savings alongside your personal tax strategy.",
      },
      {
        slug: "estate-succession",
        title: "Estate & Succession",
        description:
          "Plan your estate to minimize taxes for your heirs and protect your legacy.",
      },
    ],
  },

  bookkeeping: {
    slug: "bookkeeping",
    title: "Bookkeeping & Reporting",
    headline: "Accurate Financial Records",
    description:
      "Always know where your business stands with accurate, up-to-date bookkeeping, monthly reconciliation, and custom financial reporting delivered on a 48-hour turnaround.",
    heroStat: "48hr",
    heroStatLabel: "Report turnaround time",
    keyBenefits: [
      {
        icon: "\u23F1",
        title: "Save 10+ Hours/Month",
        description:
          "Like most business owners we help — stop doing your own books.",
      },
      {
        icon: "\uD83D\uDCC8",
        title: "See Where You're Spending",
        description:
          "Make smarter financial decisions with real-time visibility.",
      },
      {
        icon: "\uD83D\uDC65",
        title: "Talk to Real Experts",
        description:
          "Ask questions and get answers from human bookkeepers and CPAs.",
      },
      {
        icon: "\uD83D\uDEE1",
        title: "Always CRA-Compliant",
        description:
          "Get accurate, audit-ready financial records year-round.",
      },
    ],
    overviewTitle: "Clean Books, Clear Decisions",
    overviewText:
      "Good bookkeeping is the foundation of every successful business. Without accurate records, you cannot make informed decisions, secure financing, or file compliant tax returns. Our team provides full-cycle bookkeeping that keeps your financial records current, reconciled, and ready for reporting at any time.",
    overviewPoints: [
      "Full-cycle accounts payable and receivable",
      "Monthly bank and credit card reconciliation",
      "Custom financial statement preparation",
      "GST/HST tracking and filing",
      "Payroll integration and coordination",
      "Cloud accounting setup (QuickBooks, Xero, Sage)",
    ],
    features: [
      {
        title: "48-Hour Turnaround",
        description:
          "Need month-end financials fast? Our standard turnaround is 48 hours from receiving your complete records.",
      },
      {
        title: "Cloud-First Approach",
        description:
          "We work with QuickBooks Online, Xero, and Sage — giving you real-time access to your financial data from anywhere.",
      },
      {
        title: "Custom Reporting",
        description:
          "Beyond standard financial statements, we build custom dashboards and KPI reports tailored to your industry and goals.",
      },
      {
        title: "Catch-Up Bookkeeping",
        description:
          "Behind on your books? We offer catch-up services to bring months or even years of records into order quickly.",
      },
      {
        title: "Receipt Management",
        description:
          "Integrated receipt capture and categorization so you never lose a deductible expense again.",
      },
      {
        title: "Controller-Level Oversight",
        description:
          "Our senior accountants review all work, providing the accuracy and insight you would expect from an in-house controller.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Onboarding",
        description:
          "We assess your current books, set up or optimize your cloud accounting system, and establish workflows.",
      },
      {
        step: "02",
        title: "Monthly Processing",
        description:
          "Transactions are categorized, reconciled, and reviewed on a regular schedule you choose.",
      },
      {
        step: "03",
        title: "Reporting",
        description:
          "Monthly financial statements and custom KPI reports are delivered within 48 hours of period close.",
      },
      {
        step: "04",
        title: "Review Meeting",
        description:
          "Optional monthly calls with your bookkeeper to review results, flag issues, and discuss upcoming needs.",
      },
    ],
    whyUs: [
      { value: "48hr", label: "Standard report turnaround time" },
      { value: "99.9%", label: "Reconciliation accuracy rate" },
      { value: "200+", label: "Businesses on monthly retainer" },
    ],
    testimonials: [
      {
        quote:
          "It's amazing that transactions get automatically categorized, and there's always someone reaching out if something doesn't look right. I used to spend entire weekends on my books — now I don't even think about it.",
        name: "Raj Patel",
        role: "Founder, Northern Eats Inc.",
        initials: "RP",
      },
      {
        quote:
          "I just don't worry about bookkeeping anymore. The monthly reports are clear, my CPA has everything they need for tax season, and if I make a mistake the team catches it immediately. Best decision I've made for my business.",
        name: "Maria Lopez",
        role: "CEO, Bright Path Consulting",
        initials: "ML",
      },
    ],
    addOns: [
      {
        title: "Catch-Up Bookkeeping",
        description:
          "Falling behind happens — but we are here to help you get back on track. Whether you are a few months or a few years behind, our team of experts will get your books up to date and ready for filing.",
        href: "/contact",
        linkText: "Get Caught Up",
      },
      {
        title: "Tax Filing & Advisory",
        description:
          "Year-round tax advice and expert filing with no hidden fees. When your books are done by Key Metrics, your tax return practically prepares itself. We handle T1, T2, HST/GST, and strategic tax planning.",
        href: "/services/tax-strategy",
        linkText: "Explore Tax Services",
      },
    ],
    faqs: [
      {
        question: "Which accounting software do you support?",
        answer:
          "We work with QuickBooks Online, Xero, Sage 50, and Wave. If you are not yet on cloud software, we can help you migrate and get set up.",
      },
      {
        question: "How often will my books be updated?",
        answer:
          "Most clients choose weekly or bi-weekly processing. Monthly processing is also available for lower-volume businesses. We customize the schedule to your needs.",
      },
      {
        question: "Can you clean up messy books from previous years?",
        answer:
          "Absolutely. Our catch-up bookkeeping service can bring years of disorganized records into order, often within a few weeks.",
      },
      {
        question: "Will I have access to my books in real time?",
        answer:
          "Yes. With cloud accounting, you have 24/7 access to your financial data. We also provide login credentials for your accountant or advisor if needed.",
      },
      {
        question: "How is bookkeeping priced?",
        answer:
          "We offer fixed monthly pricing based on transaction volume, so you always know what to expect. No surprise bills or hourly creep.",
      },
    ],
    relatedServices: [
      {
        slug: "corporate-tax",
        title: "Corporate Tax (T2)",
        description:
          "Accurate books make tax season seamless — and cheaper. Pair bookkeeping with T2 filing for best results.",
      },
      {
        slug: "payroll",
        title: "Payroll Services",
        description:
          "Integrate payroll with your bookkeeping for a single source of truth and seamless reporting.",
      },
      {
        slug: "business-advisory",
        title: "Business Advisory",
        description:
          "Turn your clean financial data into actionable insights with strategic advisory services.",
      },
    ],
  },

  payroll: {
    slug: "payroll",
    title: "Payroll Services",
    headline: "Reliable Payroll Processing",
    description:
      "Dependable payroll processing, T4 preparation, ROE filing, and CRA remittances — handled on time, every time. Zero penalties, zero stress.",
    heroStat: "0",
    heroStatLabel: "CRA payroll penalties",
    keyBenefits: [
      {
        icon: "\u2705",
        title: "Guaranteed Accuracy",
        description: "Every payroll run is verified before processing.",
      },
      {
        icon: "\u26A1",
        title: "Lightning Fast",
        description:
          "Payroll processed and confirmed within 24 hours of approval.",
      },
      {
        icon: "\uD83D\uDEE1",
        title: "CRA Compliance",
        description:
          "We handle all government remittances and filings for you.",
      },
      {
        icon: "\uD83C\uDF0D",
        title: "Multi-Province Ready",
        description:
          "Full compliance across all Canadian provinces and territories.",
      },
    ],
    overviewTitle: "Payroll Processing You Can Count On",
    overviewText:
      "Payroll errors are costly — not just in penalties, but in employee trust. Our payroll team ensures every paycheque is accurate, every remittance is on time, and every slip is filed correctly. From basic payroll runs to complex multi-province setups, we handle it all so you can focus on your team.",
    overviewPoints: [
      "Bi-weekly, semi-monthly, or monthly payroll runs",
      "Federal and provincial tax withholding calculations",
      "CRA source deduction remittances",
      "T4 and T4A slip preparation and filing",
      "Record of Employment (ROE) filing",
      "Workers compensation and benefits coordination",
    ],
    features: [
      {
        title: "Zero-Penalty Track Record",
        description:
          "Our automated systems and manual checks ensure every remittance is calculated correctly and submitted before the deadline.",
      },
      {
        title: "Multi-Province Support",
        description:
          "Employees in different provinces? We handle the varying tax rates, WCB requirements, and provincial regulations seamlessly.",
      },
      {
        title: "Direct Deposit",
        description:
          "Employees receive their pay via direct deposit on schedule, with online pay stubs accessible anytime.",
      },
      {
        title: "Year-End Filing",
        description:
          "T4s, T4As, and the T4 Summary are prepared and filed electronically, with copies distributed to your employees.",
      },
      {
        title: "ROE Management",
        description:
          "When employees leave, we prepare and file Records of Employment within the required timeframe.",
      },
      {
        title: "Compliance Updates",
        description:
          "We track CPP, EI, and provincial changes automatically, so your payroll is always compliant with current legislation.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Setup",
        description:
          "We configure your payroll system, enter employee details, and set up CRA accounts and direct deposit.",
      },
      {
        step: "02",
        title: "Processing",
        description:
          "Each pay period, you submit hours and we calculate pay, deductions, and net amounts for approval.",
      },
      {
        step: "03",
        title: "Remittance",
        description:
          "We remit source deductions to CRA and handle any provincial remittances on your behalf.",
      },
      {
        step: "04",
        title: "Reporting",
        description:
          "Monthly payroll registers, quarterly summaries, and year-end T4 filing — all handled.",
      },
    ],
    whyUs: [
      { value: "0", label: "CRA payroll penalties ever assessed" },
      { value: "100%", label: "On-time remittance rate" },
      { value: "5,000+", label: "Employee paycheques processed monthly" },
    ],
    testimonials: [
      {
        quote:
          "Switching to Key Metrics was the best decision we made for payroll. Our team gets paid on time every cycle, CRA remittances are always handled, and I never have to worry about compliance again.",
        name: "David Chen",
        role: "COO, Pacific Coast Logistics",
        initials: "DC",
      },
      {
        quote:
          "We have employees in three provinces and payroll used to be a nightmare. Key Metrics handles all the provincial differences automatically. Our T4s were perfect this year — first time ever.",
        name: "Sarah Thompson",
        role: "HR Director, Maple Ridge Holdings",
        initials: "ST",
      },
    ],
    addOns: [
      {
        title: "Bookkeeping & Reporting",
        description:
          "Integrate your payroll seamlessly with monthly books for a complete financial picture. Payroll journal entries flow automatically into your accounting records.",
        href: "/services/bookkeeping",
        linkText: "Explore Bookkeeping",
      },
      {
        title: "Corporate Tax Filing",
        description:
          "T4s flow directly into your corporate return. Pair payroll with our T2 filing service for end-to-end compliance and maximum deductions.",
        href: "/services/corporate-tax",
        linkText: "Explore Corporate Tax",
      },
    ],
    faqs: [
      {
        question: "How often can payroll be run?",
        answer:
          "We support weekly, bi-weekly, semi-monthly, and monthly pay frequencies. You can also run off-cycle payments for bonuses or terminations.",
      },
      {
        question: "Can you handle contractor payments too?",
        answer:
          "Yes. We process contractor payments and prepare T4A slips at year-end, ensuring compliance with CRA requirements for independent contractors.",
      },
      {
        question: "What payroll software do you use?",
        answer:
          "We work with industry-leading platforms including Wagepoint, ADP, and Ceridian. We can also integrate with your existing accounting software.",
      },
      {
        question: "How do employees access their pay stubs?",
        answer:
          "Employees get secure online access to their pay stubs, T4 slips, and tax documents through our employee self-service portal.",
      },
      {
        question: "What happens if CRA changes payroll regulations?",
        answer:
          "We monitor all federal and provincial changes and update your payroll configuration proactively. You are always compliant without lifting a finger.",
      },
    ],
    relatedServices: [
      {
        slug: "bookkeeping",
        title: "Bookkeeping & Reporting",
        description:
          "Payroll and bookkeeping work best together — one source of truth for your entire financial picture.",
      },
      {
        slug: "corporate-tax",
        title: "Corporate Tax (T2)",
        description:
          "Accurate payroll records feed directly into your corporate tax return for seamless filing.",
      },
      {
        slug: "business-advisory",
        title: "Business Advisory",
        description:
          "Understand your true labour costs and optimize your team structure with advisory support.",
      },
    ],
  },

  "business-advisory": {
    slug: "business-advisory",
    title: "Business Advisory",
    headline: "Strategic Growth Partner",
    description:
      "Strategic guidance to scale, restructure, or optimize your operations. We become your fractional CFO, delivering the financial intelligence you need to make confident decisions.",
    heroStat: "3.2x",
    heroStatLabel: "Average client revenue growth",
    overviewTitle: "Your Fractional CFO for Smarter Growth",
    overviewText:
      "Every business hits inflection points — rapid growth, cash flow challenges, expansion decisions, or succession planning. Our advisory team brings senior-level financial expertise to your business without the cost of a full-time CFO. We help you see around corners and make decisions backed by data, not guesswork.",
    overviewPoints: [
      "Cash flow forecasting and management",
      "Business valuation and growth modeling",
      "Budget creation and variance analysis",
      "KPI development and tracking dashboards",
      "Financing and loan application support",
      "Strategic planning and scenario analysis",
    ],
    features: [
      {
        title: "Fractional CFO Services",
        description:
          "Get C-suite financial leadership at a fraction of the cost, with flexible engagement models from monthly retainers to project-based work.",
      },
      {
        title: "Cash Flow Mastery",
        description:
          "We build 13-week and 12-month cash flow forecasts that give you visibility into your financial future and prevent surprises.",
      },
      {
        title: "Growth Strategy",
        description:
          "Data-driven growth planning including market analysis, unit economics, and financial modeling for new products or markets.",
      },
      {
        title: "Financing Support",
        description:
          "We prepare financial packages, business plans, and projections that lenders and investors need to say yes.",
      },
      {
        title: "KPI Dashboards",
        description:
          "Custom dashboards that track the metrics that matter most to your industry, updated in real time from your accounting data.",
      },
      {
        title: "Board & Investor Reporting",
        description:
          "Professional financial reports and presentations for your board, investors, or partners — clear, accurate, and on time.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Assessment",
        description:
          "We conduct a deep dive into your financials, operations, and competitive landscape to identify opportunities.",
      },
      {
        step: "02",
        title: "Strategy",
        description:
          "Together, we develop a financial roadmap with clear milestones, KPIs, and accountability measures.",
      },
      {
        step: "03",
        title: "Execution",
        description:
          "We work alongside your team to implement changes, build systems, and track progress against targets.",
      },
      {
        step: "04",
        title: "Optimization",
        description:
          "Regular review cycles ensure we refine the strategy based on actual results and evolving market conditions.",
      },
    ],
    whyUs: [
      { value: "3.2x", label: "Average revenue growth for advisory clients" },
      { value: "85%", label: "Client retention rate over 5 years" },
      { value: "$12M", label: "Financing secured for clients last year" },
    ],
    faqs: [
      {
        question: "What is a fractional CFO?",
        answer:
          "A fractional CFO provides the strategic financial leadership of a full-time Chief Financial Officer on a part-time or project basis, making senior expertise accessible and affordable for growing businesses.",
      },
      {
        question: "How is advisory different from accounting?",
        answer:
          "Accounting looks backward — recording what happened. Advisory looks forward — analyzing what should happen next. We use your financial data to drive strategy, not just compliance.",
      },
      {
        question: "What size of business benefits from advisory?",
        answer:
          "Businesses from $500K to $50M in revenue benefit most. At this stage, the decisions are complex enough to need expert guidance but the business may not justify a full-time CFO.",
      },
      {
        question: "How often will we meet?",
        answer:
          "Most advisory clients meet with their advisor bi-weekly or monthly. During critical periods like financing rounds or restructuring, we increase frequency as needed.",
      },
      {
        question: "Can you help with buying or selling a business?",
        answer:
          "Yes. We provide transaction advisory including business valuation, due diligence support, deal structuring, and integration planning for both buyers and sellers.",
      },
    ],
    relatedServices: [
      {
        slug: "bookkeeping",
        title: "Bookkeeping & Reporting",
        description:
          "Advisory is only as good as the data behind it. Our bookkeeping ensures your financials are always accurate.",
      },
      {
        slug: "tax-strategy",
        title: "Tax Strategy & Planning",
        description:
          "Align your growth strategy with tax planning to keep more of every dollar you earn.",
      },
      {
        slug: "wealth-management",
        title: "Wealth Management",
        description:
          "As your business grows, so should your personal wealth. Connect business and personal financial strategy.",
      },
    ],
  },

  "cra-audit": {
    slug: "cra-audit",
    title: "CRA Audit & Representation",
    headline: "Expert Audit Defence",
    description:
      "Experienced audit representation and defence for individuals and businesses. We handle CRA correspondence, protect your interests, and resolve disputes efficiently.",
    heroStat: "94%",
    heroStatLabel: "Clean audit outcomes achieved",
    overviewTitle: "CRA Audit? We Have Your Back",
    overviewText:
      "Receiving a CRA audit letter can be stressful, but it does not have to be overwhelming. Our team has represented hundreds of individuals and businesses through CRA audits, reviews, and disputes — achieving clean outcomes in 94% of cases. We know how CRA auditors think and what they look for, giving you the best possible defence.",
    overviewPoints: [
      "Full CRA audit representation and correspondence",
      "Pre-audit preparation and risk assessment",
      "Document organization and submission management",
      "Notice of Objection preparation and filing",
      "Tax Court of Canada representation support",
      "Voluntary disclosure program applications",
    ],
    features: [
      {
        title: "94% Clean Outcomes",
        description:
          "Our deep CRA knowledge and meticulous preparation result in favourable outcomes for the vast majority of our clients.",
      },
      {
        title: "Pre-Audit Preparation",
        description:
          "Before CRA arrives, we review your records, identify potential issues, and prepare responses to likely questions.",
      },
      {
        title: "Direct CRA Communication",
        description:
          "We become your authorized representative and handle all correspondence, phone calls, and meetings with CRA on your behalf.",
      },
      {
        title: "Objections & Appeals",
        description:
          "When CRA reassesses unfairly, we prepare and file Notices of Objection and support you through the appeals process.",
      },
      {
        title: "Voluntary Disclosure",
        description:
          "If you have unreported income or errors in past filings, our VDP team helps you come into compliance while minimizing penalties.",
      },
      {
        title: "Post-Audit Protection",
        description:
          "After resolution, we implement systems and processes to reduce the likelihood of future audits.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Initial Review",
        description:
          "We review the audit letter, assess the scope, and develop a defence strategy based on the specific issues raised.",
      },
      {
        step: "02",
        title: "Document Preparation",
        description:
          "We organize your records, gather supporting documentation, and prepare clear, professional responses.",
      },
      {
        step: "03",
        title: "CRA Engagement",
        description:
          "As your representative, we communicate directly with the auditor, attend meetings, and negotiate on your behalf.",
      },
      {
        step: "04",
        title: "Resolution",
        description:
          "We review the auditor's proposal, negotiate adjustments, and file objections if the outcome is unfavourable.",
      },
    ],
    whyUs: [
      { value: "94%", label: "Clean audit outcomes" },
      { value: "500+", label: "Audits handled to date" },
      { value: "48hr", label: "Response time on new audit files" },
    ],
    faqs: [
      {
        question: "What triggers a CRA audit?",
        answer:
          "Common triggers include inconsistencies between returns, large deductions relative to income, industry-specific risk flags, random selection, and tips. Not all audits indicate wrongdoing.",
      },
      {
        question: "Can you represent me if I prepared my own return?",
        answer:
          "Absolutely. Many of our audit clients originally prepared their own returns or used a different accountant. We take over full representation regardless of who filed.",
      },
      {
        question: "How long does a CRA audit take?",
        answer:
          "Simple desk audits can be resolved in a few weeks. Full field audits typically take three to six months. Complex cases involving objections can take longer, but we work to resolve them as quickly as possible.",
      },
      {
        question: "Will I have to pay penalties?",
        answer:
          "Not necessarily. If the audit reveals adjustments, penalties depend on the nature of the issue. Our goal is to minimize or eliminate penalties through proper representation and, where applicable, taxpayer relief requests.",
      },
      {
        question: "What is the Voluntary Disclosure Program?",
        answer:
          "The VDP allows taxpayers to proactively correct errors or omissions in past filings. Accepted applications typically result in reduced or eliminated penalties and partial interest relief.",
      },
    ],
    relatedServices: [
      {
        slug: "corporate-tax",
        title: "Corporate Tax (T2)",
        description:
          "Properly filed corporate returns are your best defence against future audits.",
      },
      {
        slug: "personal-tax",
        title: "Personal Tax (T1)",
        description:
          "Accurate personal filings reduce audit risk and provide strong documentation if selected.",
      },
      {
        slug: "bookkeeping",
        title: "Bookkeeping & Reporting",
        description:
          "Clean, organized records are the foundation of a successful audit defence.",
      },
    ],
  },

  "wealth-management": {
    slug: "wealth-management",
    title: "Wealth Management",
    headline: "Build Lasting Wealth",
    description:
      "Long-term wealth building strategies including investment guidance, retirement planning, portfolio optimization, and tax-efficient withdrawal strategies.",
    heroStat: "$180M+",
    heroStatLabel: "Client assets under advisory",
    overviewTitle: "Grow, Protect, and Transfer Your Wealth",
    overviewText:
      "Building wealth is about more than picking investments — it requires a coordinated strategy that integrates tax planning, risk management, and estate considerations. Our wealth management team works alongside your tax advisor to create a holistic plan that grows your net worth while protecting it from unnecessary taxes and risks.",
    overviewPoints: [
      "Personalized investment strategy development",
      "Retirement income planning and RRIF optimization",
      "Tax-efficient portfolio structuring",
      "Insurance needs analysis and recommendations",
      "Education savings (RESP) planning",
      "Pension analysis and optimization",
    ],
    features: [
      {
        title: "Holistic Planning",
        description:
          "We consider your entire financial picture — taxes, estate, insurance, and goals — not just your investment portfolio.",
      },
      {
        title: "Tax-Efficient Investing",
        description:
          "Asset location strategies that place the right investments in the right accounts (RRSP, TFSA, non-registered) to minimize taxes.",
      },
      {
        title: "Retirement Mapping",
        description:
          "Detailed projections that show exactly when you can retire and how to draw down your assets in the most tax-efficient order.",
      },
      {
        title: "Risk Management",
        description:
          "Portfolio construction aligned with your risk tolerance, time horizon, and income needs — not one-size-fits-all models.",
      },
      {
        title: "RESP Maximization",
        description:
          "Optimize your education savings to capture the full Canada Education Savings Grant and grow your children's education fund.",
      },
      {
        title: "Regular Rebalancing",
        description:
          "Systematic portfolio reviews and rebalancing to maintain your target allocation and capture tax-loss harvesting opportunities.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Financial Assessment",
        description:
          "We map your complete financial picture including assets, debts, income sources, and future goals.",
      },
      {
        step: "02",
        title: "Plan Design",
        description:
          "We build a customized wealth plan with investment recommendations, tax strategies, and milestone targets.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "We execute the plan, opening accounts, making investments, and coordinating with your other advisors.",
      },
      {
        step: "04",
        title: "Ongoing Reviews",
        description:
          "Quarterly reviews and annual comprehensive updates ensure your plan evolves with your life and goals.",
      },
    ],
    whyUs: [
      { value: "$180M+", label: "Client assets under advisory" },
      { value: "15+", label: "Years average advisor experience" },
      { value: "8.2%", label: "Average annualized client return (5yr)" },
    ],
    faqs: [
      {
        question: "What is the minimum investment to work with you?",
        answer:
          "We work with clients at all stages. While some wealth management services have a $100K minimum, our financial planning services are available regardless of portfolio size.",
      },
      {
        question: "Are you fee-only or commission-based?",
        answer:
          "We offer fee-based advisory where our compensation is transparent and aligned with your interests. We do not earn commissions on product sales.",
      },
      {
        question: "How does wealth management integrate with my tax planning?",
        answer:
          "Deeply. Your wealth advisor and tax advisor collaborate on investment selection, withdrawal timing, and account structure to minimize your lifetime tax burden.",
      },
      {
        question: "Can you help with my company pension?",
        answer:
          "Yes. We analyze pension options including commuted value transfers, bridging strategies, and coordination with CPP and OAS to maximize your retirement income.",
      },
      {
        question: "How often will my portfolio be reviewed?",
        answer:
          "We conduct formal quarterly reviews and a comprehensive annual planning session. Between reviews, we monitor markets and make tactical adjustments as needed.",
      },
    ],
    relatedServices: [
      {
        slug: "tax-strategy",
        title: "Tax Strategy & Planning",
        description:
          "Wealth grows faster when taxes are minimized. Integrate your investment and tax strategies.",
      },
      {
        slug: "estate-succession",
        title: "Estate & Succession",
        description:
          "Protect the wealth you build with comprehensive estate and succession planning.",
      },
      {
        slug: "personal-tax",
        title: "Personal Tax (T1)",
        description:
          "Ensure your investment income is reported optimally on your personal tax return.",
      },
    ],
  },

  "estate-succession": {
    slug: "estate-succession",
    title: "Estate & Succession Planning",
    headline: "Protect Your Legacy",
    description:
      "Comprehensive estate planning, trust structures, and succession strategies for families and business owners. Protect your legacy and minimize taxes for your heirs.",
    heroStat: "$1M+",
    heroStatLabel: "LCGE utilized per qualifying client",
    overviewTitle: "Secure Your Legacy for Generations",
    overviewText:
      "Without proper planning, taxes and probate can erode a significant portion of your estate. Our team designs strategies that preserve wealth across generations, leveraging tools like the Lifetime Capital Gains Exemption, family trusts, estate freezes, and insurance structures to ensure your wishes are fulfilled and your heirs are protected.",
    overviewPoints: [
      "Estate freeze and refreeze strategies",
      "Family trust creation and administration",
      "Lifetime Capital Gains Exemption planning",
      "Will and power of attorney coordination",
      "Business succession and buy-sell agreements",
      "Probate minimization and estate administration",
    ],
    features: [
      {
        title: "Estate Freeze Planning",
        description:
          "Lock in the current value of your business for tax purposes and allow future growth to accrue to the next generation tax-efficiently.",
      },
      {
        title: "LCGE Optimization",
        description:
          "Maximize the Lifetime Capital Gains Exemption (currently over $1M) for qualifying small business shares, farm property, or fishing property.",
      },
      {
        title: "Family Trust Structures",
        description:
          "Create and manage family trusts that enable income splitting, creditor protection, and flexible estate distribution.",
      },
      {
        title: "Business Succession",
        description:
          "Detailed succession plans that address ownership transfer, management transition, and tax optimization for departing and incoming owners.",
      },
      {
        title: "Insurance Integration",
        description:
          "Strategic use of life insurance to fund tax liabilities, equalize estates, and create tax-free wealth transfer vehicles.",
      },
      {
        title: "Cross-Border Estate Planning",
        description:
          "For families with assets or beneficiaries in the U.S. or other jurisdictions, we navigate complex international estate tax rules.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Estate Assessment",
        description:
          "We inventory your assets, review existing wills and structures, and understand your goals for wealth transfer.",
      },
      {
        step: "02",
        title: "Strategy Design",
        description:
          "We model multiple scenarios and recommend the combination of tools that best achieves your objectives.",
      },
      {
        step: "03",
        title: "Implementation",
        description:
          "Working with your lawyer and financial advisor, we execute the plan including trust setup, freeze transactions, and insurance placement.",
      },
      {
        step: "04",
        title: "Annual Review",
        description:
          "Estate plans must evolve with changing laws and life events. Annual reviews keep your plan current and effective.",
      },
    ],
    whyUs: [
      { value: "$1M+", label: "Average LCGE utilized per client" },
      { value: "150+", label: "Estate plans created and maintained" },
      { value: "$45M", label: "Estate taxes saved for client families" },
    ],
    faqs: [
      {
        question: "When should I start estate planning?",
        answer:
          "Now. Whether you are 30 or 70, having a plan in place protects your family. The earlier you start, the more tools are available and the greater the tax savings over time.",
      },
      {
        question: "What is an estate freeze?",
        answer:
          "An estate freeze locks the value of your shares at today's price for tax purposes. Future growth accrues to new shares held by your children or a family trust, deferring and reducing the tax on that growth.",
      },
      {
        question: "Do I need a family trust?",
        answer:
          "Not everyone does, but trusts offer significant benefits including income splitting, creditor protection, and flexible distribution. We assess whether a trust makes sense for your specific situation.",
      },
      {
        question: "How does the LCGE work?",
        answer:
          "The Lifetime Capital Gains Exemption allows you to shelter over $1 million in capital gains on qualifying small business corporation shares from tax. Proper planning ensures you meet all conditions to claim the full exemption.",
      },
      {
        question: "Can you help with an estate that has already been frozen?",
        answer:
          "Yes. We regularly review existing estate freezes, recommend refreezes when values have changed, and ensure ongoing compliance with trust reporting requirements.",
      },
    ],
    relatedServices: [
      {
        slug: "wealth-management",
        title: "Wealth Management",
        description:
          "Build the wealth that your estate plan will protect and transfer efficiently.",
      },
      {
        slug: "tax-strategy",
        title: "Tax Strategy & Planning",
        description:
          "Estate planning and tax strategy are deeply connected — optimize both together.",
      },
      {
        slug: "business-advisory",
        title: "Business Advisory",
        description:
          "If your estate includes a business, advisory services ensure the transition plan is operationally sound.",
      },
    ],
  },
};


/* ── Static generation ───────────────────────────────── */
export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = serviceData[slug];
  if (!data) {
    return { title: "Service Not Found | Key Metrics Accounting" };
  }
  return {
    title: `${data.title} | Key Metrics Accounting Calgary`,
    description: data.description,
  };
}

/* ── Page ────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = serviceData[slug];

  if (!data) {
    notFound();
  }

  return <ServicePageClient data={data} />;
}
