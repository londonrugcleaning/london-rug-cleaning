import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, User, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllBlogPosts } from "@/lib/blog";
import { BlogPost } from "@/types/blog";
import { LazyLoadImage } from "@/components/ui/lazyload-image";
import { HeadMeta } from "@/components/HeadMeta";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getAllBlogPosts();
      setPosts(allPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "London Rug Cleaning Blog",
    "description": "Expert advice and insights on rug care and maintenance",
    "publisher": {
      "@type": "Organization",
      "name": "London Rug Cleaning",
      "logo": {
        "@type": "ImageObject",
        "url": "/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author
      },
      "description": post.excerpt,
      "keywords": post.tags.join(", "),
      "url": `https://londonrugcleaning.co.uk/blog/${post.slug}`
    }))
  };

  return (
    <>
      <HeadMeta
        title="Rug Cleaning Blog - Expert Advice and Tips"
        description="Read our expert articles on rug care, cleaning methods, and maintenance tips to keep your rugs looking beautiful for years to come."
        canonicalUrl="https://londonrugcleaning.co.uk/blog"
        schema={schema}
      />
      <div className="min-h-screen">
        <section className="hero-pattern py-24">
          <div className="container mx-auto px-4">
            <h1 className="animate-fade-up text-4xl font-semibold sm:text-5xl">
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
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
              </div>
            ) : (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <div 
                    key={post.slug} 
                    className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readingTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="mt-2 text-xl font-semibold group-hover:text-blue-900">
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
                        className="mt-4 p-0 text-blue-800 hover:text-blue-900"
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
    </>
  );
};

export default Blog;
