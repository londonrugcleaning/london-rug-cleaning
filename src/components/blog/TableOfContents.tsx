
import { useState } from "react";
import { ChevronDown, ChevronRight, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { extractHeadings } from "@/lib/blog";

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const headings = extractHeadings(content);

  // Group headings by their top-level sections
  const groupedHeadings: Record<string, typeof headings> = {};
  
  headings.forEach(heading => {
    if (heading.level === 2) {
      groupedHeadings[heading.text] = headings.filter(
        h => h.level > 2 && h.text !== heading.text
      );
    }
  });

  // Schema for the table of contents
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tocSchema) }}
      />
      
      <div className="mb-8 rounded-lg border bg-muted/50 p-4">
        <Button
          variant="ghost"
          className="mb-2 w-full justify-between"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2 font-semibold">
            <List className="h-4 w-4" />
            Table of Contents
          </span>
          {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
        
        {isOpen && (
          <Accordion type="single" collapsible className="w-full">
            {headings
              .filter(heading => heading.level === 2)
              .map((heading, index) => (
                <AccordionItem key={index} value={`section-${index}`}>
                  <AccordionTrigger className="text-sm hover:no-underline py-2">
                    <a href={`#${heading.id}`} className="hover:text-primary">
                      {heading.text}
                    </a>
                  </AccordionTrigger>
                  
                  <AccordionContent>
                    <ul className="space-y-2 pl-4">
                      {headings
                        .filter(h => h.level === 3 && 
                          headings.indexOf(h) > headings.indexOf(heading) && 
                          (index === headings.filter(h2 => h2.level === 2).length - 1 || 
                            headings.indexOf(h) < headings.indexOf(headings.filter(h2 => h2.level === 2)[index + 1]))
                        )
                        .map((subheading, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground hover:text-foreground">
                            <a href={`#${subheading.id}`}>{subheading.text}</a>
                          </li>
                        ))
                      }
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        )}
      </div>
    </>
  );
};
