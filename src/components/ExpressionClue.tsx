// Facial expression clue component for the guessing game
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ExpressionClueProps {
  clueImage: string;
  emotion: string;
  isRevealed: boolean;
}

export const ExpressionClue = ({ clueImage, emotion, isRevealed }: ExpressionClueProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-clue-bg border-2 border-primary/20">
      <div className="text-center space-y-4">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          😊 Facial Expression
        </Badge>
        <div className="relative">
          <img
            src={clueImage}
            alt={isRevealed ? `Facial expression: ${emotion}` : "Facial expression - guess the emotion!"}
            className="w-full h-64 md:h-80 object-cover rounded-xl border-4 border-primary/20 shadow-lg"
          />
          {!isRevealed && (
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-xl" />
          )}
        </div>
        {isRevealed && (
          <div className="bg-success text-success-foreground p-4 rounded-xl">
            <h2 className="text-2xl font-bold">🎉 The Answer: {emotion.charAt(0).toUpperCase() + emotion.slice(1)}</h2>
          </div>
        )}
        <p className="text-lg text-muted-foreground">
          {isRevealed ? "Great job solving the puzzle!" : "Can you guess the emotion from this facial expression?"}
        </p>
      </div>
    </Card>
  );
}; 