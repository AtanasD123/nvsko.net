
import { ReactNode } from "react";

interface LibraryShelfProps {
  children: ReactNode;
}

export const LibraryShelf = ({ children }: LibraryShelfProps) => {
  return (
    <div className="relative">
      <div className="flex gap-6 p-8 bg-secondary/20 rounded-lg shadow-inner min-h-[180px]">
        {children}
      </div>
      {/* Enhanced shelf wooden effect with more depth */}
      <div className="h-6 bg-primary/20 rounded-b-lg relative">
        <div className="absolute inset-x-0 h-1.5 bg-primary/40 top-0" />
        <div className="absolute inset-x-0 h-0.5 bg-white/5 bottom-0" />
      </div>
    </div>
  );
};
