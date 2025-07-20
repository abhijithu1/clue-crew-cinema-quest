import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Lightbulb } from "lucide-react";

interface GuessInputProps {
  onGuess: (guess: string) => void;
  onRequestHint: () => void;
  canRequestHint: boolean;
  isGameOver: boolean;
  guessesLeft: number;
}

export const GuessInput = ({ 
  onGuess, 
  onRequestHint, 
  canRequestHint, 
  isGameOver,
  guessesLeft 
}: GuessInputProps) => {
  const [guess, setGuess] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim() && !isGameOver) {
      onGuess(guess.trim());
      setGuess("");
    }
  };

  const handleHintRequest = () => {
    if (canRequestHint) {
      onRequestHint();
    }
  };

  if (isGameOver) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-card border-2 border-primary/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-2">
            What movie is this? 🤔
          </h3>
          <p className="text-muted-foreground">
            You have {guessesLeft} guess{guessesLeft !== 1 ? 'es' : ''} left
          </p>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Type your guess here..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="text-lg h-12 border-2 border-primary/20 focus:border-primary"
            maxLength={50}
            autoComplete="off"
          />
          <Button 
            type="submit" 
            size="lg"
            disabled={!guess.trim()}
            className="px-6"
          >
            <Send className="h-4 w-4 mr-2" />
            Guess
          </Button>
        </div>
        
        <div className="flex justify-center">
          <Button
            type="button"
            onClick={handleHintRequest}
            disabled={!canRequestHint}
            variant="outline"
            size="lg"
            className="bg-hint-bg border-2 border-accent/30 hover:bg-accent/10"
          >
            <Lightbulb className="h-4 w-4 mr-2" />
            {canRequestHint ? "Get a Hint 💡" : "No More Hints"}
          </Button>
        </div>
      </form>
    </Card>
  );
};