import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

const blogPosts = [
  {
    title: "First Blog Post",
    excerpt: "Something about Nothing",
    date: "April 20, 2025",
    readTime: "5 min read",
    slug: "post-1",
    content: "This is the full content of the first blog post..."
  },
  {
    title: "Second Blog Post",
    excerpt: "Nothing about Something",
    date: "April 15, 2025",
    readTime: "3 min read",
    slug: "post-2",
    content: "This is the full content of the second blog post..."
  },
  {
    title: "The Art of Programming",
    excerpt: "Exploring the creative side of coding",
    date: "April 10, 2025",
    readTime: "7 min read",
    slug: "post-3",
    content: "This is the full content of the third blog post..."
  },
  {
    title: "Web Development Trends 2025",
    excerpt: "What's new in the world of web development",
    date: "April 5, 2025",
    readTime: "4 min read",
    slug: "post-4",
    content: "This is the full content of the fourth blog post..."
  }
];

const Blog = () => {
  return (
    <div className="container py-20 animate-fadeIn">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-migra">Blog Posts</h1>
      </div>
      
      <div className="flex gap-6">
        <ScrollArea className="h-[calc(100vh-12rem)] flex-1">
          <div className="grid gap-6 pb-8">
            {blogPosts.map((post, index) => (
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-primary/20"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-playfair font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="text-primary hover:underline inline-flex items-center gap-2"
                  >
                    Read more
                    <FileText size={16} />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </ScrollArea>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default Blog;
