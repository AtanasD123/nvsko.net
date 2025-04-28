
import { BookCard } from "@/components/BookCard";
import { LibraryShelf } from "@/components/LibraryShelf";

const books = [
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    genre: "Fiction",
    rating: 4.5,
    coverColor: "bg-primary/80",
    review: "A beautiful exploration of life's infinite possibilities"
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    genre: "Science Fiction",
    rating: 5,
    coverColor: "bg-primary/60",
    review: "Fascinating scientific problem-solving adventure"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Development",
    rating: 4,
    coverColor: "bg-primary/70",
    review: "Life-changing approach to building good habits"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    rating: 5,
    coverColor: "bg-primary/90",
    review: "A masterpiece of world-building and politics"
  }
];

const Library = () => {
  return (
    <div className="container py-20 animate-fadeIn">
      <h1 className="text-4xl font-migra mb-12 flex items-center gap-3">
        <span className="text-primary">My Library</span>
      </h1>
      
      <LibraryShelf>
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </LibraryShelf>
    </div>
  );
};

export default Library;
