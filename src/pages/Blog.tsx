import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/types/blog";

// This would normally come from your MD files
const blogPosts: BlogPost[] = [
  {
    slug: "how-to-clean-carpet-rug",
    title: "How to Clean a Carpet Rug: A Complete Guide",
    date: "2024-03-14",
    excerpt: "Learn the professional techniques for cleaning your carpet rug effectively and safely at home.",
    content: "...",
    author: "London Rug Cleaning Team",
    tags: ["rug cleaning", "carpet care", "DIY", "maintenance"],
    readingTime: "8 min read"
  },
  // Add more blog posts here
];

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(
    new Set(blogPosts.flatMap((post) => post.tags))
  );

  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center font-serif text-4xl font-semibold">Rug Care Blog</h1>
      
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedTag === null ? "secondary" : "ghost"}
          onClick={() => setSelectedTag(null)}
        >
          All
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={selectedTag === tag ? "secondary" : "ghost"}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="rounded-lg border bg-card p-6">
            <h2 className="mb-2 font-serif text-xl font-semibold">
              <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                {post.title}
              </Link>
            </h2>
            <div className="mb-4 text-sm text-muted-foreground">
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <span>{post.readingTime}</span>
            </div>
            <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;