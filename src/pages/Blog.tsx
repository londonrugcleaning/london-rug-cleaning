
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, User } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This is a mock fetch that would normally get blog posts from an API
    // For now we'll just use our one blog post we have
    const mockPosts = [
      {
        slug: "how-to-clean-carpet-rug",
        title: "How to Clean a Carpet Rug: A Complete Guide",
        date: "2024-03-14",
        author: "London Rug Cleaning Team",
        excerpt: "Learn the professional techniques for cleaning your carpet rug effectively and safely at home.",
        tags: ["rug cleaning", "carpet care", "DIY", "maintenance"],
      }
    ];
    
    setPosts(mockPosts);
    setIsLoading(false);
  }, []);

  return (
    <div className="min-h-screen">
      <section className="hero-pattern py-24">
        <div className="container mx-auto px-4">
          <h1 className="animate-fade-up font-serif text-4xl font-semibold sm:text-5xl">
            Our Blog
          </h1>
          <p className="mt-6 animate-fade-up text-lg text-muted-foreground">
            Expert advice and insights on rug care and maintenance
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div 
                  key={post.slug} 
                  className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
                >
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                    </div>
                    
                    <h3 className="mt-2 text-xl font-semibold group-hover:text-primary">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="mt-2 line-clamp-3 text-muted-foreground">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <div key={tag} className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                          <Tag className="h-3 w-3" />
                          <span>{tag}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button
                      variant="link"
                      className="mt-4 p-0 text-primary"
                      asChild
                    >
                      <Link to={`/blog/${post.slug}`}>
                        Read more
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
