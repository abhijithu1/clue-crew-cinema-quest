import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MovieClueProps {
  clueImage: string;
  movieTitle: string;
  isRevealed: boolean;
}

export const MovieClue = ({ clueImage, movieTitle, isRevealed }: MovieClueProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-clue-bg border-2 border-primary/20">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          🎬 Visual Clue
        </Badge>
        
        <div className="relative">
          <img 
            src={clueImage} 
            alt={isRevealed ? `Scene from ${movieTitle}` : "Movie clue - guess the movie!"}
            className="w-full h-64 md:h-80 object-cover rounded-xl border-4 border-primary/20 shadow-lg"
          />
          {!isRevealed && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl" />
          )}
        </div>
        
        {isRevealed && (
          <div className="bg-success text-success-foreground p-4 rounded-xl">
            <h2 className="text-2xl font-bold">🎉 The Answer: {movieTitle}</h2>
          </div>
        )}
        
        <p className="text-lg text-muted-foreground">
          {isRevealed ? "Great job solving the puzzle!" : "Can you guess this movie from the visual clue?"}
        </p>
      </div>
    </Card>
  );
};