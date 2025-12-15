import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, List } from "lucide-react";
import { extractHeadings } from "@/lib/blog";

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const headings = extractHeadings(content).filter(h => h.level === 2);

  // Smooth scroll handler
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);

    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Schema for SEO
  const tocSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": headings.map((heading, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": heading.text,
      "url": `#${heading.id}`
    }))
  };

  if (headings.length === 0) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tocSchema) }}
      />

      <div className="my-8 rounded-xl border border-border/60 bg-gradient-to-br from-slate-50 to-slate-100/50 dark:from-slate-900/50 dark:to-slate-800/30 overflow-hidden shadow-sm">
        {/* Toggle Header */}
        <button
          className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-100/50 dark:hover:bg-slate-800/30 transition-colors duration-200"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="toc-content"
        >
          <span className="flex items-center gap-3 font-semibold text-slate-800 dark:text-slate-200">
            <List className="h-5 w-5 text-blue-600" />
            Table of Contents
          </span>
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-200/70 dark:bg-slate-700/50">
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-slate-600 dark:text-slate-400" />
            )}
          </span>
        </button>

        {/* Expandable Content */}
        <div
          id="toc-content"
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <nav className="px-5 pb-5">
            <ul className="space-y-1">
              {headings.map((heading, index) => (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    onClick={(e) => handleLinkClick(e, heading.id)}
                    className="group flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-slate-600 dark:text-slate-400 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-blue-50/70 dark:hover:bg-blue-900/20 transition-all duration-200"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-md bg-slate-200/80 dark:bg-slate-700/60 text-xs font-medium text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {index + 1}
                    </span>
                    <span className="font-medium">{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
