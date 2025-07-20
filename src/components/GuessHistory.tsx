import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Check } from "lucide-react";

interface GuessHistoryProps {
  guesses: Array<{ guess: string; isCorrect: boolean }>;
}

export const GuessHistory = ({ guesses }: GuessHistoryProps) => {
  if (guesses.length === 0) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-card border-2 border-primary/20">
      <div className="space-y-4">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2">
            📝 Your Guesses
          </Badge>
        </div>
        
        <div className="space-y-2 max-h-40 overflow-y-auto">
          {guesses.map((guess, index) => (
            <div 
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg border ${
                guess.isCorrect 
                  ? 'bg-success/10 border-success/30' 
                  : 'bg-destructive/10 border-destructive/30'
              }`}
            >
              {guess.isCorrect ? (
                <Check className="h-5 w-5 text-success" />
              ) : (
                <X className="h-5 w-5 text-destructive" />
              )}
              <span className="text-lg font-medium">{guess.guess}</span>
              <Badge 
                variant={guess.isCorrect ? "default" : "destructive"}
                className="ml-auto"
              >
                {guess.isCorrect ? "Correct!" : "Try again"}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};