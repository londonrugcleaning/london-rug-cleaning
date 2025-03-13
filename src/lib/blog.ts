
import { BlogPost } from "@/types/blog";

// This is a utility function to parse markdown frontmatter
export function parseMarkdownFrontmatter(markdown: string): {
  frontmatter: Record<string, any>;
  content: string;
} {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n/;
  const match = markdown.match(frontmatterRegex);

  if (!match) {
    return { frontmatter: {}, content: markdown };
  }

  const frontmatterString = match[1];
  const content = markdown.replace(frontmatterRegex, "");
  const frontmatter: Record<string, any> = {};

  // Parse frontmatter
  frontmatterString.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length) {
      let value = valueParts.join(":").trim();
      
      // Handle arrays (tags)
      if (value.startsWith("[") && value.endsWith("]")) {
        value = value
          .substring(1, value.length - 1)
          .split(",")
          .map((item) => item.trim().replace(/"/g, "").replace(/'/g, ""));
      }
      
      // Remove quotes if present
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.substring(1, value.length - 1);
      }
      
      frontmatter[key.trim()] = value;
    }
  });

  return { frontmatter, content };
}

// Calculate reading time
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return `${readingTime} min read`;
}

// Extract headings from markdown content
export function extractHeadings(content: string) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((heading) => ({
      level: heading.match(/^#+/)?.[0].length || 1,
      text: heading.replace(/^#+\s/, ""),
      id: heading.replace(/^#+\s/, "").toLowerCase().replace(/\s+/g, "-"),
    }));
}

// This function will be modified to import all markdown files
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // In a real application, this would dynamically import all markdown files
  // For now, we'll hard-code our existing blog post
  const posts: BlogPost[] = [
    {
      slug: "how-to-clean-carpet-rug",
      title: "How to Clean a Carpet Rug: A Complete Guide",
      date: "2024-03-14",
      author: "London Rug Cleaning Team",
      excerpt: "Learn the professional techniques for cleaning your carpet rug effectively and safely at home.",
      content: `
# How to Clean a Carpet Rug: A Complete Guide

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
      readingTime: "5 min read"
    }
  ];
  
  return posts;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const posts = await getAllBlogPosts();
  return posts.find(post => post.slug === slug) || null;
}
