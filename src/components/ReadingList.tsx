
import { Card } from "@/components/ui/card";
import { Book } from "lucide-react";

const books = [
  {
    title: "Time Shelter",
    author: "Georgi Gospodinov",
    status: "Currently Reading",
    progress: 90
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    status: "Up Next",
    progress: 0
  },
  {
    title: "The Stranger",
    author: "Albert Camus",
    status: "Up Next",
    progress: 0
  }
];

const ReadingList = () => {
  return (
    <section className="container py-20 bg-secondary/30 rounded-3xl">
      <h2 className="text-3xl font-sans font-bold mb-12">Reading List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book, index) => (
          <a 
          target="_blank" 
          rel="noopener noreferrer"
          className="animate-slideInUp transition-all"
          style={{ animationDelay: `${(index) * 250 + 375}ms` }}
        >
          <Card key={index} className="p-6 hover:shadow-xl hover:-translate-y-0.5 transition-all  border border-primary/50" style={{animationDelay: `${index * 100}ms`}}>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Book className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-playfair font-bold mb-1">{book.title}</h3>
                <p className="text-sm text-muted-foreground">{book.author}</p>
                <div className="mt-4">
                  <div className="text-sm font-medium">{book.status}</div>
                  <div className="mt-2 h-2 bg-secondary rounded-full">
                    <div 
                      className="h-full bg-primary rounded-full transition-all" 
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Card>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ReadingList;
