
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock blog data - in a real app, this would come from an API
const blogPosts = {
  "how-to-clean-carpet-rug": {
    title: "How to Clean a Carpet Rug: A Complete Guide",
    date: "2024-03-14",
    author: "London Rug Cleaning Team",
    content: `
# How to Clean a Carpet Rug: A Complete Guide

## Table of Contents
- Introduction
- Pre-Cleaning Assessment
- Required Materials
- Step-by-Step Cleaning Process
- Deep Cleaning Techniques
- Drying and Maintenance
- When to Call Professionals

## Introduction
Carpet rugs require regular cleaning to maintain their appearance and extend their lifespan. This guide will walk you through professional techniques for effective rug cleaning at home.

## Pre-Cleaning Assessment
Before starting, examine your rug for:
- Type of material
- Color fastness
- Existing damage
- Stains and spots

## Required Materials
- Vacuum cleaner
- Mild rug shampoo
- Soft-bristled brush
- Clean white cloths
- Bucket of warm water
- Fan for drying

## Step-by-Step Cleaning Process
1. Vacuum thoroughly on both sides
2. Test cleaning solution in an inconspicuous area
3. Apply cleaning solution with a soft brush
4. Work in small sections
5. Rinse thoroughly
6. Remove excess water

## Deep Cleaning Techniques
For stubborn stains and deep cleaning:
- Use appropriate cleaning solutions
- Work from the outside in
- Avoid oversaturation
- Consider steam cleaning

## Drying and Maintenance
- Ensure proper ventilation
- Use fans to speed up drying
- Avoid direct sunlight
- Regular maintenance tips

## When to Call Professionals
Some situations require professional attention:
- Valuable or antique rugs
- Severe staining
- Water damage
- Regular deep cleaning

Remember, proper rug care extends the life of your investment. For professional cleaning services in London, contact us for a free quote.
    `,
    tags: ["rug cleaning", "carpet care", "DIY", "maintenance"],
    excerpt: "Learn the professional techniques for cleaning your carpet rug effectively and safely at home."
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (slug && blogPosts[slug as keyof typeof blogPosts]) {
      setPost(blogPosts[slug as keyof typeof blogPosts]);
    }
    setIsLoading(false);
  }, [slug]);

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

  return (
    <div className="container mx-auto min-h-screen px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <h1 className="font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
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
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <div key={tag} className="flex items-center gap-1 rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-800">
              <Tag className="h-3 w-3" />
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div className="prose prose-blue mt-8 max-w-none">
          {post.content.split('\n').map((line: string, index: number) => {
            if (line.startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold">{line.substring(2)}</h1>;
            } else if (line.startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-semibold mt-6">{line.substring(3)}</h2>;
            } else if (line.startsWith('- ')) {
              return <li key={index} className="ml-6">{line.substring(2)}</li>;
            } else if (/^\d+\./.test(line)) {
              return <li key={index} className="ml-6">{line.substring(line.indexOf('.') + 1)}</li>;
            } else if (line.trim() === '') {
              return <br key={index} />;
            } else {
              return <p key={index} className="my-2">{line}</p>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
