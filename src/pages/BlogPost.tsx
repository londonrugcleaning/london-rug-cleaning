import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { getBlogPostBySlug } from '@/lib/blog';
import { HeadMeta } from '@/components/HeadMeta';
import { ArticleSchema } from "@/components/seo/ArticleSchema";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const blogPost = await getBlogPostBySlug(slug);
        if (blogPost) {
          setPost(blogPost);
        }
      }
      setIsLoading(false);
    };
    
    fetchPost();
  }, [slug]);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      h1[id], h2[id], h3[id], h4[id], h5[id], h6[id] {
        scroll-margin-top: 8rem;
      }
      
      .blog-content a {
        color: #3D9FFF;
        text-decoration: none;
        transition: color 0.2s;
      }
      .blog-content a:hover {
        color: #1a81ff;
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto min-h-screen px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-2xl font-bold">Blog Post Not Found</h1>
          <p className="mt-4 text-muted-foreground">
            The blog post you are looking for does not exist.
          </p>
          <Button asChild className="mt-6">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

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

  const renderMarkdown = (content: string) => {
    return content.split('\n').map((line: string, index: number) => {
      if (line.startsWith('# ')) {
        const headingText = line.substring(2);
        const headingId = headingText.toLowerCase().replace(/\s+/g, "-");
        return <h1 id={headingId} key={index} className="text-3xl font-bold">{headingText}</h1>;
      } else if (line.startsWith('## ')) {
        const headingText = line.substring(3);
        const headingId = headingText.toLowerCase().replace(/\s+/g, "-");
        return <h2 id={headingId} key={index} className="text-2xl font-semibold mt-6">{headingText}</h2>;
      } else if (line.startsWith('### ')) {
        const headingText = line.substring(4);
        const headingId = headingText.toLowerCase().replace(/\s+/g, "-");
        return <h3 id={headingId} key={index} className="text-xl font-semibold mt-5">{headingText}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="ml-6">{line.substring(2)}</li>;
      } else if (/^\d+\./.test(line)) {
        return <li key={index} className="ml-6">{line.substring(line.indexOf('.') + 1)}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="my-2">{line}</p>;
      }
    });
  };

  return (
    <>
      {post && (
        <>
          <HeadMeta
            title={post.title}
            description={post.description || `${post.title} - London Rug Cleaning Blog`}
            canonicalUrl={`https://londonrugcleaning.co.uk/blog/${post.slug}`}
            ogImage={post.coverImage || "https://londonrugcleaning.co.uk/og-image.png"}
            ogType="article"
            publishedTime={post.date}
            modifiedTime={post.lastModified || post.date}
            author={post.author || "London Rug Cleaning"}
            keywords={post.tags || []}
          />
          
          <ArticleSchema
            title={post.title}
            description={post.description || `${post.title} - London Rug Cleaning Blog`}
            url={`https://londonrugcleaning.co.uk/blog/${post.slug}`}
            imageUrl={post.coverImage || "https://londonrugcleaning.co.uk/og-image.png"}
            datePublished={post.date}
            dateModified={post.lastModified || post.date}
            authorName={post.author || "London Rug Cleaning"}
            keywords={post.tags || []}
          />

          <div className="container mx-auto min-h-screen px-4 py-12">
            <div className="mx-auto max-w-3xl">
              <Button variant="ghost" asChild className="mb-6 text-blue-700 hover:text-blue-700">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
                {post.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{post.readingTime}</span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <div key={tag} className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
                    <Tag className="h-3 w-3" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <TableOfContents content={post.content} />

              <div className="prose prose-blue mt-8 max-w-none blog-content">
                {renderMarkdown(post.content)}
              </div>

              <div className="mt-12 rounded-lg border bg-blue-50 p-6 text-center">
                <h3 className="text-xl font-semibold">Need Professional Rug Cleaning?</h3>
                <p className="mt-2 text-muted-foreground">
                  Get a free quote for our expert rug cleaning services in London
                </p>
                <Button size="lg" className="mt-4 gap-2">
                  <Link to="/contact">Get Your Free Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BlogPost;
