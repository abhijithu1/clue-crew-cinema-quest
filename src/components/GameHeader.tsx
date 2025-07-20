import { Trophy, Eye, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GameHeaderProps {
  guessesLeft: number;
  hintsUsed: number;
  onRevealAnswer: () => void;
  onNewGame: () => void;
  maxGuesses: number;
  maxHints: number;
}

export const GameHeader = ({ 
  guessesLeft, 
  hintsUsed, 
  onRevealAnswer, 
  onNewGame,
  maxGuesses,
  maxHints
}: GameHeaderProps) => {
  return (
    <div className="w-full bg-card p-6 rounded-2xl border-2 border-primary/20 shadow-lg mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Trophy className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold text-primary">Emotion Guesser</h1>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-secondary">{guessesLeft}</div>
            <div className="text-sm text-muted-foreground">Guesses Left</div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-accent">{hintsUsed}/{maxHints}</div>
            <div className="text-sm text-muted-foreground">Hints Used</div>
          </div>
          
          <div className="flex gap-2">
            <Button
              onClick={onRevealAnswer}
              variant="outline"
              size="lg"
              className="bg-warning text-warning-foreground hover:bg-warning/90"
            >
              <Eye className="h-4 w-4 mr-2" />
              Reveal Answer
            </Button>
            
            <Button
              onClick={onNewGame}
              variant="outline"
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              New Game
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};