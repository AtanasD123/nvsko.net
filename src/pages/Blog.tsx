import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";
import BlogSidebar from "@/components/BlogSidebar";

const blogPosts = [
  {
    title: "First Blog Post",
    excerpt: "Something about Nothing",
    date: "April 28, 2025",
    readTime: "5 min read",
    slug: "post-1",
    content: "This is the full content of the first blog post..."
  },
  {
    title: "Second Blog Post",
    excerpt: "Nothing about Something",
    date: "April 28, 2025",
    readTime: "3 min read",
    slug: "post-2",
    content: "This is the full content of the second blog post..."
  },
  {
    title: "Third Blog Post",
    excerpt: "Excerpt goes here",
    date: "April 28, 2025",
    readTime: "7 min read",
    slug: "post-3",
    content: "Content goes here"
  },
  {
    title: "Fourth Blog Post",
    excerpt: "Excerpt goes here",
    date: "April 28, 2025",
    readTime: "4 min read",
    slug: "post-4",
    content: "Content goes here"
  }
];

const Blog = () => {
  return (
    <div className="container py-20">
      <div className=" items-center pb-5">
        <h1 className="text-4xl font-migra text-center mr-[330px] mt-[10px] animate-slideInUp">Blog Posts</h1>
      </div>
      
      <div className="flex gap-6 gap-5">
        <ScrollArea className="h-[calc(100vh-12rem)] flex-1">
          <div className="grid gap-6 pb-8 scale-95">
            {blogPosts.map((post, index) => (
            <div className="animate-slideInUp" style={{animationDelay: `${index * 100 + 100}ms`}}>
              <Card 
                key={index} 
                className="p-6 hover:shadow-xl transition-all transform  duration-300 hover:-translate-y-0.5 border border-primary/50"
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
              </div>
            ))}
          </div>
        </ScrollArea>
        <BlogSidebar />
      </div>
    </div>
  );
};

export default Blog;
