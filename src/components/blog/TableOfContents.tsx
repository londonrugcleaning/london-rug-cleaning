import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TableOfContentsProps {
  content: string;
}

export const TableOfContents = ({ content }: TableOfContentsProps) => {
  const [isOpen, setIsOpen] = useState(true);

  // Extract headings from markdown content
  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((heading) => ({
      level: heading.match(/^#+/)?.[0].length || 1,
      text: heading.replace(/^#+\s/, ""),
    }));

  return (
    <div className="mb-8 rounded-lg border bg-muted/50 p-4">
      <Button
        variant="ghost"
        className="mb-2 w-full justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">Table of Contents</span>
        {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
      </Button>
      {isOpen && (
        <ul className="space-y-2 pl-4">
          {headings.map((heading, index) => (
            <li
              key={index}
              style={{ marginLeft: `${(heading.level - 1) * 1}rem` }}
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              <a href={`#${heading.text.toLowerCase().replace(/\s+/g, "-")}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};