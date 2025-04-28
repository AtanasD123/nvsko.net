
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const recentPosts = [
  {
    title: "First Blog Post",
    date: "April 20, 2025",
    slug: "post-1"
  },
  {
    title: "Second Blog Post",
    date: "April 15, 2025",
    slug: "post-2"
  }
];

const BlogSidebar = () => {
  return (
    <div className="w-80 pl-6">
      <Card className="p-6 border border-primary/20">
        <h2 className="text-xl font-migra mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Recent Posts
        </h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="border-b border-primary/10 last:border-0 pb-3 last:pb-0">
              <Link 
                to={`/blog/${post.slug}`}
                className="hover:text-primary transition-colors"
              >
                <h3 className="font-medium mb-1">{post.title}</h3>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </Link>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BlogSidebar;
