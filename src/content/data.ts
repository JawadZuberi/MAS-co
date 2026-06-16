/* Verbatim content sourced from the MAS & Co reference site. */

export type Service = {
  slug: string;
  title: string;
  icon: string; // lucide icon name
  short: string;
  long: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "audit-assurance",
    title: "Audit & Assurance",
    icon: "ShieldCheck",
    short: "Statutory, internal, and operational audit services with comprehensive risk management.",
    long: "Comprehensive audit and assurance services that build confidence, ensure compliance, and drive organizational transparency. MAS & Co delivers a full spectrum of audit and assurance services designed to provide stakeholders with confidence in financial reporting, internal controls, and organizational governance. Our team of experienced auditors brings deep industry knowledge and meticulous attention to detail.",
    features: ["Statutory Audit", "Internal Audit", "Operational Audit", "Risk Management", "Process Reviews", "Technical Accounting Advisory", "Compliance Assurance", "Forensic Audit Support"],
  },
  {
    slug: "direct-tax",
    title: "Direct Tax Services",
    icon: "Landmark",
    short: "Corporate tax planning, international tax, appeals, and expatriate taxation.",
    long: "Expert direct taxation services covering corporate tax, international tax, and strategic tax planning. Our direct tax team provides comprehensive taxation services that go beyond compliance. We help clients navigate complex tax landscapes, optimize their tax positions, and manage tax risks effectively.",
    features: ["Tax Planning & Strategy", "Corporate Tax Advisory", "International Tax Compliance", "Appeals & Litigation Support", "Tax Returns & Filing", "Expatriate Taxation", "Tax Efficient Structuring", "Withholding Tax Advisory"],
  },
  {
    slug: "indirect-tax",
    title: "Indirect Tax Services",
    icon: "ReceiptText",
    short: "GST registration, filing, compliance advisory, and tax optimization strategies.",
    long: "Comprehensive indirect tax services including GST registration, filing, compliance, and optimization. MAS & Co helps businesses manage their indirect tax obligations efficiently and identify opportunities for optimization. Our specialists stay current with evolving GST regulations and compliance requirements.",
    features: ["GST Filing & Compliance", "Tax Optimization Strategies", "Sales Tax on Services", "Customs Duty Advisory", "Provincial Tax Compliance", "Indirect Tax Reviews"],
  },
  {
    slug: "business-advisory",
    title: "Business Advisory",
    icon: "TrendingUp",
    short: "Strategic planning, risk management, succession planning, and financial forecasting.",
    long: "Strategic business advisory services that drive growth, manage risk, and create lasting value. Our business advisory practice combines financial expertise with strategic insight to help organizations make better decisions, manage change, and achieve sustainable growth.",
    features: ["Strategic Decision Making", "Growth Planning", "Succession Planning", "Joint Ventures & M&A", "Financial Forecasting", "Business Restructuring", "Corporate Governance", "Feasibility Studies"],
  },
  {
    slug: "outsourcing",
    title: "Outsourcing Accountants",
    icon: "Calculator",
    short: "Payroll processing, financial reporting, ERP support, and budgeting services.",
    long: "Professional outsourcing services for payroll, financial reporting, ERP support, and cash flow management. Our outsourcing solutions enable businesses to focus on core operations while we handle critical financial functions with precision, efficiency, and confidentiality.",
    features: ["Payroll Processing", "Financial Reporting", "ERP Support & Maintenance", "Cash Flow Planning", "Budgeting & Forecasting", "Accounts Payable/Receivable", "Management Accounting", "Financial Analysis"],
  },
  {
    slug: "international-taxation",
    title: "International Taxation",
    icon: "Globe2",
    short: "Transfer pricing documentation, arm's length pricing, and compliance monitoring.",
    long: "Expert international tax advisory including transfer pricing documentation and cross-border compliance. In an increasingly globalized economy, MAS & Co helps multinational businesses and cross-border investors navigate complex international tax regulations and optimize their global tax positions.",
    features: ["Tax Jurisdiction Advisory", "Arm's Length Pricing", "Transfer Pricing Documentation", "Compliance Monitoring", "Double Taxation Relief", "Cross-Border Structuring", "International Tax Planning"],
  },
  {
    slug: "recruitment",
    title: "Recruitment Consultants",
    icon: "Users",
    short: "Executive search, HR consultancy, candidate screening, and international recruitment.",
    long: "Professional recruitment and HR consultancy services connecting top talent with leading organizations. Our recruitment practice specializes in identifying and placing high-caliber professionals across finance, accounting, and business management roles both locally and internationally.",
    features: ["Executive Search", "Candidate Screening & Assessment", "International Recruitment", "Talent Acquisition Strategy", "Compensation Benchmarking", "Employer Branding", "Contract Staffing"],
  },
  {
    slug: "erp-digital",
    title: "ERP & Digital Transformation",
    icon: "Cpu",
    short: "Enterprise solutions, digital modernization, and technology-driven efficiency.",
    long: "Enterprise solutions and digital transformation consultancy to modernize operations and drive efficiency. MAS & Co helps organizations leverage technology to transform their financial and operational processes, implementing ERP solutions that drive efficiency and provide real-time business intelligence.",
    features: ["ERP Implementation Advisory", "Digital Process Automation", "Cloud Migration Strategy", "Data Analytics & BI", "System Integration", "Digital Risk Management", "Technology Roadmapping"],
  },
];

export type Industry = { name: string; icon: string; challenges: string; solutions: string };

export const industries: Industry[] = [
  { name: "Banks & Insurance", icon: "Landmark", challenges: "Complex regulatory compliance, risk management, and evolving financial regulations.", solutions: "Comprehensive audit, regulatory compliance advisory, tax optimization, and financial restructuring services." },
  { name: "Engineering & Allied Machines", icon: "Cog", challenges: "Capital-intensive operations, volatile markets, and stringent environmental regulations.", solutions: "Revenue audit, operational risk management, tax planning, and strategic financial advisory." },
  { name: "Real Estate & Infrastructure", icon: "Building2", challenges: "Project financing complexity, regulatory approvals, and tax-efficient structuring.", solutions: "Tax advisory, project feasibility analysis, compliance management, and financial due diligence." },
  { name: "Manufacturing", icon: "Factory", challenges: "Cost optimization, supply chain management, and GST compliance.", solutions: "Indirect tax advisory, cost accounting, ERP solutions, and operational audit services." },
  { name: "Hospitality & Healthcare", icon: "HeartPulse", challenges: "Revenue management, compliance, and sector-specific regulatory requirements.", solutions: "Internal audit, tax compliance, HR advisory, and business process optimization." },
  { name: "Commodity Brokers", icon: "Truck", challenges: "Fleet management costs, regulatory compliance, and tax optimization.", solutions: "Operational audit, tax planning, financial reporting, and cost management advisory." },
  { name: "Stock Exchange Brokers", icon: "CandlestickChart", challenges: "Market volatility, regulatory changes, and transaction complexity.", solutions: "Revenue audit, compliance monitoring, risk assessment, and tax advisory services." },
  { name: "Marketing & Advertisement", icon: "Megaphone", challenges: "Revenue recognition, intellectual property taxation, and international payments.", solutions: "Tax advisory, transfer pricing, financial reporting, and GST compliance services." },
];

export type Member = { name: string; role: string; specialty: string; bio: string };

export const team: Member[] = [
  { name: "Muhammad Adnan Siddiqui", role: "Managing Partner", specialty: "Audit, Taxation & Corporate Advisory", bio: "A seasoned chartered accountant with extensive experience in audit, taxation, and corporate advisory services. Leads the firm's strategic vision and client relationships." },
  { name: "Shoaib Bashir Siddiqui", role: "Partner", specialty: "Business Advisory & Financial Consulting", bio: "Brings deep expertise in business advisory and financial consulting, driving strategic growth initiatives for corporate clients." },
  { name: "Syed Junaid Rafique", role: "Partner", specialty: "International Taxation & Transfer Pricing", bio: "Specialist in international taxation and transfer pricing with extensive experience in cross-border advisory and compliance." },
  { name: "Hamza Khan", role: "Senior Audit Manager", specialty: "Audit & Assurance", bio: "Expert in statutory and internal audit with a focus on risk management and process optimization across multiple industries." },
  { name: "Bilal Ahmed", role: "Manager", specialty: "Direct Tax & Compliance", bio: "Specialist in corporate tax planning, compliance, and appeals with deep knowledge of Pakistan's tax landscape." },
  { name: "Mohtasim Sattar", role: "Consultant", specialty: "Business Advisory & ERP", bio: "Combines financial expertise with technology to drive digital transformation and ERP implementation for clients." },
  { name: "Ather Zaheer Rizvi", role: "Manager", specialty: "Outsourcing & Financial Reporting", bio: "Leads outsourcing operations with expertise in financial reporting, payroll processing, and cash flow management." },
  { name: "Syeda Maliha Hassan", role: "Senior Consultant", specialty: "Indirect Tax & GST", bio: "Expert in indirect taxation including GST registration, filing, and optimization strategies for diverse business sectors." },
  { name: "Ayesha Siddiqui", role: "HR & Recruitment Specialist", specialty: "Recruitment & HR Advisory", bio: "Specialist in executive search and HR consultancy, connecting top talent with leading organizations." },
  { name: "Muhammad Salman Siddiqui", role: "Business Advisory Associate", specialty: "Audit & Financial Analysis", bio: "Rising professional in audit and financial analysis with strong analytical skills and attention to detail." },
  { name: "Zainab Fatima", role: "Accounting Intern", specialty: "Accounting & Finance", bio: "Supporting engagement teams across bookkeeping, reconciliations, and financial analysis while building a strong professional foundation." },
];

export type Testimonial = { quote: string; role: string };

export const testimonials: Testimonial[] = [
  { quote: "MAS & Co has been instrumental in streamlining our taxation processes. Their strategic guidance has saved us significant costs while ensuring full compliance.", role: "Senior Director" },
  { quote: "The level of professionalism and attention to detail at MAS & Co is truly exceptional. They have become an indispensable partner in our financial strategy.", role: "Chief Financial Officer" },
  { quote: "Their international taxation expertise helped us navigate complex cross-border regulations with confidence. Highly recommended for multinational operations.", role: "Managing Partner" },
];

export const clients = [
  "KPMG Professional Services",
  "International Brands Limited",
  "Daraz.pk Entities",
  "Global Trade Corp",
  "Meridian Holdings",
];

export type InternationalClient = { name: string; region: string };

export const internationalClients: InternationalClient[] = [
  { name: "KPMG Professional Services", region: "KSA" },
  { name: "Axiom World", region: "Ireland / KSA" },
];

export const domesticClients: string[] = [
  "5G Healthcare Private Limited",
  "A.A Quality Builders",
  "AG Petroleum",
  "Ahmed Foods Private Limited",
  "Cart PK Private Limited",
  "Clover Lubricant Private Limited",
  "Digit n Bytes Private Limited",
  "DIN Capital Limited",
  "Dynamic Supply Chain Private Limited",
  "Ease Tec Private Limited",
  "EatOye Private Limited",
  "Fajr Construction Company Private Limited",
  "G.I Enterprises Private Limited",
  "GIGI Industries Private Limited",
  "Global Outsourcing Service Private Limited",
  "Good Luck Private Limited",
  "International Brands Limited",
  "Jade E Services Pakistan Private Limited – Daraz.pk",
  "Mastermind Fide Chess Academy Private Limited",
  "Maxco Private Limited",
  "Mehran Enterprise Private Limited",
  "MG Media Private Limited",
  "MK Friends Private Limited",
  "My Foods Brands Private Limited",
  "Nash Advertising Private Limited",
  "Paramount Commodities Private Limited",
  "Pakistan Bank's Association Employees' Gratuity Fund",
  "Pakistan Bank's Association Employees' Provident Fund",
  "Pakistan Economic Association",
  "S2 Consulting Private Limited",
  "Tameer Ghar Private Limited",
  "Trust Securities & Brokerage Limited",
];

export const stats = [
  { value: "220+", label: "Corporate Clients" },
  { value: "20+", label: "Industries Served" },
  { value: "15+", label: "Expert Consultants" },
  { value: "8+", label: "Years of Excellence" },
];

export type WhyCard = { title: string; desc: string; icon: string };

export const whyChooseUs: WhyCard[] = [
  { title: "International Expertise", desc: "Global advisory networks and cross-border financial solutions.", icon: "Globe2" },
  { title: "Ethical & Professional Standards", desc: "Unwavering commitment to the highest professional ethics.", icon: "Scale" },
  { title: "Personalized Consultancy", desc: "Tailored solutions designed around your unique business needs.", icon: "UserCheck" },
  { title: "Business Growth Focus", desc: "Strategic insights that drive sustainable growth and profitability.", icon: "TrendingUp" },
  { title: "Experienced Leadership", desc: "Seasoned professionals with decades of collective expertise.", icon: "Award" },
  { title: "Multi-Industry Knowledge", desc: "Deep domain expertise across 20+ sectors and industries.", icon: "Layers" },
  { title: "Corporate Compliance", desc: "Ensuring regulatory compliance and mitigating business risks.", icon: "ShieldCheck" },
];

export type Value = { title: string; desc: string; icon: string };

export const values: Value[] = [
  { title: "Integrity", desc: "Unwavering ethical standards in every engagement.", icon: "Scale" },
  { title: "Excellence", desc: "Delivering the highest quality of professional services.", icon: "Award" },
  { title: "Client Commitment", desc: "Partnering with clients for mutual success.", icon: "Handshake" },
  { title: "Innovation", desc: "Embracing technology and forward-thinking solutions.", icon: "Lightbulb" },
];

export type Milestone = { year: string; title: string; desc: string };

export const timeline: Milestone[] = [
  { year: "2017", title: "Founded", desc: "MAS & Co established in Karachi with a vision to deliver world-class chartered accountancy services." },
  { year: "2018", title: "First Corporate Clients", desc: "Secured partnerships with leading corporations and SMEs across Pakistan." },
  { year: "2019", title: "Expanded Services", desc: "Introduced business advisory and international taxation services." },
  { year: "2020", title: "Digital Transformation", desc: "Embraced technology-driven solutions and ERP advisory services." },
  { year: "2022", title: "International Expansion", desc: "Established global partnerships for international advisory and outsourcing." },
  { year: "2024", title: "Industry Leadership", desc: "Recognized as a leading multi-service advisory firm serving 20+ industries." },
  { year: "2025", title: "Continued Growth", desc: "Expanding team, capabilities, and global reach to serve clients worldwide." },
];

export type Partnership = { title: string; desc: string; icon: string };

export const partnerships: Partnership[] = [
  { title: "International Collaborations", desc: "Strategic partnerships with international firms enabling cross-border advisory, audit, and taxation services for global clients.", icon: "Handshake" },
  { title: "Global Advisory Services", desc: "Our international network allows us to provide seamless advisory services across multiple jurisdictions and regulatory environments.", icon: "Globe2" },
  { title: "International Outsourcing", desc: "Providing skilled accounting and finance professionals to international firms through our export of professional human resources.", icon: "Users" },
  { title: "Overseas Client Solutions", desc: "Comprehensive support for overseas businesses looking to establish or expand operations in Pakistan and the region.", icon: "Building2" },
];

export const regions = [
  "Middle East & GCC",
  "United Kingdom & Europe",
  "North America",
  "Far East & Asia Pacific",
  "Africa",
  "Australia",
];

export type Benefit = { title: string; desc: string; icon: string };

export const benefits: Benefit[] = [
  { title: "Career Growth", desc: "Clear progression paths and mentoring by industry leaders.", icon: "TrendingUp" },
  { title: "Learning & Development", desc: "Continuous professional development and training opportunities.", icon: "GraduationCap" },
  { title: "Collaborative Culture", desc: "Work alongside experienced chartered accountants and advisors.", icon: "Users" },
  { title: "Diverse Exposure", desc: "Gain experience across multiple industries and service lines.", icon: "Layers" },
];

export type Opening = { title: string; department: string; type: string; location: string };

export const openings: Opening[] = [
  { title: "Senior Audit Manager", department: "Audit & Assurance", type: "Full-time", location: "Karachi" },
  { title: "Business Advisory Associate", department: "Advisory", type: "Full-time", location: "Karachi" },
  { title: "Accounting Intern", department: "Outsourcing", type: "Internship", location: "Karachi" },
  { title: "HR & Recruitment Specialist", department: "Human Resources", type: "Full-time", location: "Karachi" },
];

export type Article = { slug: string; category: string; title: string; excerpt: string; date: string; readTime: string };

export const articles: Article[] = [
  { slug: "pakistan-tax-amendments-2025", category: "Tax Updates", title: "Understanding Pakistan's New Tax Amendments for 2025", excerpt: "An in-depth analysis of the latest tax amendments and their implications for businesses operating in Pakistan.", date: "Mar 2025", readTime: "6 min read" },
  { slug: "ifrs-compliance-guide", category: "Financial Compliance", title: "Navigating IFRS Compliance: A Practical Guide", excerpt: "Key considerations and best practices for ensuring IFRS compliance in your financial reporting.", date: "Feb 2025", readTime: "7 min read" },
  { slug: "internal-audit-manufacturing", category: "Audit Insights", title: "Internal Audit Best Practices for Manufacturing Firms", excerpt: "Strategies for effective internal audit programs that drive operational efficiency in manufacturing.", date: "Feb 2025", readTime: "5 min read" },
  { slug: "secp-regulatory-updates", category: "Financial Compliance", title: "SECP Regulatory Updates: What Companies Need to Know", excerpt: "Recent SECP regulatory changes and their impact on corporate governance requirements.", date: "Jan 2025", readTime: "6 min read" },
  { slug: "transfer-pricing-middle-east", category: "International Business", title: "Transfer Pricing in the Middle East: Opportunities & Risks", excerpt: "Exploring transfer pricing regulations and compliance requirements across Middle Eastern jurisdictions.", date: "Jan 2025", readTime: "8 min read" },
  { slug: "growth-strategies-pakistani-smes", category: "Business Growth", title: "Growth Strategies for Pakistani SMEs in 2025", excerpt: "Actionable growth strategies and financial planning approaches for small and medium enterprises.", date: "Dec 2024", readTime: "5 min read" },
  { slug: "gst-optimization-ecommerce", category: "Tax Updates", title: "GST Optimization Strategies for E-Commerce Businesses", excerpt: "How e-commerce businesses can optimize their GST compliance and reduce tax burdens effectively.", date: "Dec 2024", readTime: "6 min read" },
  { slug: "future-digital-auditing-pakistan", category: "Audit Insights", title: "The Future of Digital Auditing in Pakistan", excerpt: "How technology is transforming the audit profession and what it means for Pakistani firms.", date: "Nov 2024", readTime: "7 min read" },
];

export const articleCategories = ["All", "Tax Updates", "Financial Compliance", "Audit Insights", "International Business", "Business Growth"];
