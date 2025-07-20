import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface HintsDisplayProps {
  hints: string[];
  revealedHints: string[];
}

export const HintsDisplay = ({ hints, revealedHints }: HintsDisplayProps) => {
  if (revealedHints.length === 0) {
    return null;
  }

  return (
    <Card className="w-full max-w-2xl mx-auto p-6 bg-hint-bg border-2 border-accent/30">
      <div className="space-y-4">
        <div className="text-center">
          <Badge variant="outline" className="text-lg px-4 py-2 border-accent text-accent-foreground">
            💡 Emotion Hints
          </Badge>
        </div>
        
        <div className="space-y-3">
          {revealedHints.map((hint, index) => (
            <div 
              key={index}
              className="bg-card p-4 rounded-xl border border-accent/20 animate-fade-in"
            >
              <div className="flex items-start gap-3">
                <Badge variant="secondary" className="mt-1">
                  {index + 1}
                </Badge>
                <p className="text-lg text-foreground flex-1">{hint}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          {revealedHints.length} of {hints.length} hints revealed to help you guess the emotion
        </div>
      </div>
    </Card>
  );
};