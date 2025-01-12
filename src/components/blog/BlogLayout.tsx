import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import type { BlogPost } from "@/types/blog";

interface BlogLayoutProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export const BlogLayout = ({ post, relatedPosts }: BlogLayoutProps) => {
  return (
    <article className="prose prose-slate mx-auto max-w-3xl px-4 py-8 lg:prose-lg">
      <header className="mb-8">
        <h1 className="mb-2">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readingTime}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </header>

      <div className="mb-8">
        <TableOfContents content={post.content} />
      </div>

      <div className="mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />

      <div className="my-12 rounded-lg bg-muted p-6 text-center">
        <h3 className="mb-4 text-xl font-semibold">Ready to Get Your Rugs Professionally Cleaned?</h3>
        <Button size="lg" className="gap-2">
          <Phone className="h-4 w-4" />
          Get Your Free Quote
        </Button>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-semibold">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.slug} className="rounded-lg border p-4">
                <h3 className="mb-2 text-lg font-medium">
                  <a href={`/blog/${relatedPost.slug}`} className="hover:text-primary">
                    {relatedPost.title}
                  </a>
                </h3>
                <p className="text-sm text-muted-foreground">{relatedPost.excerpt}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};