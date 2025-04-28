
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "First Blog Post",
    excerpt: "Something about Nothing",
    date: "April 20, 2025",
    readTime: "5 min read",
    index: "/blog/post-1"
  },
  {
    title: "Second Blog Post",
    excerpt: "Nothing about Something",
    date: "April 15, 2025",
    readTime: "3 min read",
    index: "/blog/post-2"
  }
];

const RecentPosts = () => {
  return (
    <section className="container py-20">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl font-sans font-bold">Recent Posts</h2>
        <Link to="/blog" className="flex items-center gap-2 text-primary hover:underline">
          View all posts
          <ArrowRight size={20} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all animate-fadeInSlow">
        {posts.map((post, index) => (
          <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-0.5">
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-xl font-playfair font-bold mb-2">{post.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
              <Link to={post.index} className="text-primary hover:underline inline-flex items-center gap-2">
                Read more
                <ArrowRight size={16} />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
