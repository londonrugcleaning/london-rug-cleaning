
import { useState, useEffect } from "react";
import { ChevronDown, ChevronRight, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { extractHeadings } from "@/lib/blog";

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(false);
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

  // Add smooth scrolling with offset
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.slice(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const headerOffset = 128; // 8rem = 128px
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

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
      
      <div className="mb-8 rounded-lg border bg-muted/50 p-4 shadow-sm">
        <Button
          variant="ghost"
          className="mb-2 w-full justify-between text-blue-600"
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
                  <AccordionTrigger className="text-sm hover:no-underline hover:text-blue-600 py-2">
                    <a href={`#${heading.id}`} className="hover:text-blue-600">
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
                          <li key={idx} className="text-sm text-muted-foreground hover:text-blue-600">
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
