
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Star, StarHalf } from "lucide-react";

interface BookProps {
  book: {
    title: string;
    author: string;
    genre: string;
    rating: number;
    coverColor: string;
    review: string;
  };
}

const RatingStars = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex items-center gap-1">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
      {hasHalfStar && <StarHalf className="h-4 w-4 text-primary" />}
    </div>
  );
};

export const BookCard = ({ book }: BookProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div 
          className={`group relative w-24 h-[120px] ${book.coverColor} rounded shadow-lg cursor-pointer
            transition-all duration-300 hover:-translate-y-3 hover:translate-x-1 hover:rotate-2
            hover:shadow-[4px_4px_10px_rgba(0,0,0,0.3)]
            flex items-center justify-center text-white font-bold text-sm px-2 text-center
            border-r-4 border-r-primary/40 before:absolute before:inset-0 
            before:bg-black/0 hover:before:bg-black/10 before:transition-colors
            after:absolute after:bottom-0 after:left-0 after:right-0 after:h-6 
            after:bg-gradient-to-t after:from-black/20 after:to-transparent`}
        >
          <span className="[writing-mode:vertical-lr] rotate-180 transition-transform group-hover:scale-95">
            {book.title}
          </span>
        </div>
      </HoverCardTrigger>
      
      <HoverCardContent 
        className="w-80 p-4 animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out"
        sideOffset={8}
      >
        <div className="space-y-2">
          <h3 className="text-lg font-bold">{book.title}</h3>
          <p className="text-sm text-muted-foreground">by {book.author}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
              {book.genre}
            </span>
            <RatingStars rating={book.rating} />
          </div>
          <p className="text-sm mt-2 leading-relaxed">{book.review}</p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
