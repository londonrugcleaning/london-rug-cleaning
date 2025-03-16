import React from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  date: string;
  author: string;
  content: string;
  tableOfContents: {
    items: Array<{
      title: string;
      url: string;
      items?: Array<{
        title: string;
        url: string;
      }>;
    }>;
  };
}

export const BlogLayout: React.FC<BlogLayoutProps> = ({
  children,
  title,
  date,
  author,
  tableOfContents
}) => {
  return (
    <article className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <header className="mb-8">
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="mt-4 flex items-center text-muted-foreground">
            <span>{author}</span>
            <span className="mx-2">•</span>
            <time>{date}</time>
          </div>
        </header>

        <div className="prose prose-slate max-w-none">
          <div className="mb-8 rounded-lg border bg-card p-4">
            <h2 className="font-semibold">Table of Contents</h2>
            <nav className="mt-2">
              <ul className="space-y-1">
                {tableOfContents.items.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} className="text-muted-foreground hover:text-foreground">
                      {item.title}
                    </a>
                    {item.items && (
                      <ul className="ml-4 space-y-1">
                        {item.items.map((subItem) => (
                          <li key={subItem.url}>
                            <a
                              href={subItem.url}
                              className="text-muted-foreground hover:text-foreground"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {children}

          <div className="mt-12 rounded-lg border bg-card p-6 text-center">
            <h3 className="text-xl font-semibold">Need Professional Rug Cleaning?</h3>
            <p className="mt-2 text-muted-foreground">
              Get a free quote for our expert rug cleaning services in London
            </p>
            <Button size="lg" className="mt-4 gap-2">
              <Phone className="h-4 w-4" />
              Get Your Free Quote
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};