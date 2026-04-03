import BlogPostClient from "./BlogPostClient";

/* ── Post metadata (server-side) ────────────────────── */
const allSlugs = [
  "payroll-services-calgary",
  "best-accountant-calgary",
  "bookkeeping-services-essential",
  "small-business-accountants",
  "accounting-services-growth",
  "financial-consultant",
  "successful-companies",
  "professional-payroll",
  "calgary-small-business",
];

/* ── Static params ──────────────────────────────────── */
export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

/* ── Page component (server) ────────────────────────── */
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
