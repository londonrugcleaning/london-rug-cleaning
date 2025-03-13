
import { BlogPost } from "@/types/blog";

interface BlogSchemaProps {
  post: BlogPost;
}

export const BlogSchema = ({ post }: BlogSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "description": post.excerpt,
    "keywords": post.tags.join(", "),
    "timeRequired": post.readingTime,
    "publisher": {
      "@type": "Organization",
      "name": "London Rug Cleaning",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
