
import { Card } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Link } from "react-router-dom";

const recentPosts = [
  {
    title: "Reddit",
    date: "May 1, 2025",
    link: "https://www.reddit.com/"
  },
  {
    title: "Efficient Prime Generator",
    date: "April 30, 2025",
    link: "https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes"
  },
  {
    title: "1976 Immitation Virus",
    date: "April 29, 2025",
    link: "https://en.wikipedia.org/wiki/Meme"
  }
];

const BlogSidebar = () => {
  return (
    <div className="w-80 pl-6">
      <Card className="p-6 border border-primary/20">
        <h2 className="text-xl font-migra mb-4 flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary mb-1" />
          Ok-reads
        </h2>
        <div className="space-y-4">
          {recentPosts.map((post, index) => (
            <div key={index} className="border-b border-primary/10 last:border-0 pb-3 last:pb-0">
              <a
                href={post.link}
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors block" 
              >
                <h3 className="font-medium mb-1">{post.title}</h3>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </a>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default BlogSidebar;
