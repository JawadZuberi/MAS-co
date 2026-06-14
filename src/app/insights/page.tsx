"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Container, Section, Icon } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { articles, articleCategories } from "@/content/data";

export default function InsightsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory =
        activeCategory === "All" || article.category === activeCategory;
      const matchesQuery =
        q === "" ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <>
      <PageHero
        eyebrow="Knowledge Hub"
        title="Knowledge & Thought Leadership"
        subtitle="Expert analysis, industry insights, and practical guidance from our team of chartered accountants and advisors."
      />

      <Section variant="light">
        <Container>
          {/* Filters */}
          <Reveal>
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2">
                {articleCategories.map((category) => {
                  const isActive = category === activeCategory;
                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      aria-pressed={isActive}
                      className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-accent text-white shadow-sm"
                          : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-primary"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <div className="relative w-full lg:max-w-xs">
                <Icon
                  name="Search"
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search articles..."
                  aria-label="Search articles"
                  className="h-12 w-full rounded-lg border border-border bg-card pl-11 pr-4 text-sm text-primary outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
                />
              </div>
            </div>
          </Reveal>

          {/* Grid */}
          {filtered.length > 0 ? (
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((article, index) => (
                <Reveal key={article.slug} delay={(index % 3) * 0.05}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="card-hover group flex h-full cursor-pointer flex-col rounded-xl border border-border bg-card p-7"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                        {article.category}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span>{article.date}</span>
                      <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="mt-3 font-heading text-xl font-bold leading-snug text-primary transition-colors duration-300 group-hover:text-accent">
                      {article.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
                      Read article
                      <Icon
                        name="ArrowRight"
                        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-16 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 px-6 py-20 text-center">
                <Icon name="FileSearch" className="h-10 w-10 text-accent" />
                <p className="mt-4 text-base text-muted-foreground">
                  No articles found matching your criteria.
                </p>
              </div>
            </Reveal>
          )}
        </Container>
      </Section>
    </>
  );
}
