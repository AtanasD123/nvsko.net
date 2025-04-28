
import { Link } from "react-router-dom";
import { Home, Book, FileText, Layout, Moon, Sun, Contact } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


const NavigationBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUJcmljayByb2xs" className="text-2xl font-migra">
          Press Here
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/nvsko.net/" className="flex items-center gap-2 hover:text-primary">
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link to="https://github.com/AtanasD123" className="flex items-center gap-2 hover:text-primary">
            <Layout size={20} />
            <span>Projects</span>
          </Link>
          <Link to="/library" className="flex items-center gap-2 hover:text-primary">
            <Book size={20} />
            <span>Library</span>
          </Link>
          <Link to="/blog" className="flex items-center gap-2 hover:text-primary">
            <FileText size={20} />
            <span>Blog</span>
          </Link>
          <Link to="/about" className="flex items-center gap-2 hover:text-primary">
            <Contact size={20} />
            <span>About Me</span>
          </Link>
          
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
