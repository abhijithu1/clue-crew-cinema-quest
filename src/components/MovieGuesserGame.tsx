import { useState, useEffect } from "react";
import { Movie, getRandomMovie } from "@/data/movies";
import { GameHeader } from "@/components/GameHeader";
import { MovieClue } from "@/components/MovieClue";
import { GuessInput } from "@/components/GuessInput";
import { HintsDisplay } from "@/components/HintsDisplay";
import { GuessHistory } from "@/components/GuessHistory";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PartyPopper, RotateCcw } from "lucide-react";

interface Guess {
  guess: string;
  isCorrect: boolean;
}

export const MovieGuesserGame = () => {
  const { toast } = useToast();
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [revealedHints, setRevealedHints] = useState<string[]>([]);
  const [isGameWon, setIsGameWon] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const maxGuesses = 5;
  const maxHints = 4;
  const guessesLeft = maxGuesses - guesses.length;
  const hintsUsed = revealedHints.length;
  const canRequestHint = hintsUsed < maxHints && !isGameWon && !isGameOver;

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newMovie = getRandomMovie();
    setCurrentMovie(newMovie);
    setGuesses([]);
    setRevealedHints([]);
    setIsGameWon(false);
    setIsGameOver(false);
    setIsAnswerRevealed(false);
    
    toast({
      title: "🎬 New Movie Challenge!",
      description: "Look at the visual clue and guess the movie!",
    });
  };

  const handleGuess = (guess: string) => {
    if (!currentMovie || isGameWon || isGameOver) return;

    const normalizedGuess = guess.toLowerCase().trim();
    const isCorrect = currentMovie.acceptedAnswers.some(answer => 
      answer.toLowerCase() === normalizedGuess ||
      normalizedGuess.includes(answer.toLowerCase()) ||
      answer.toLowerCase().includes(normalizedGuess)
    );

    const newGuess: Guess = { guess, isCorrect };
    const updatedGuesses = [...guesses, newGuess];
    setGuesses(updatedGuesses);

    if (isCorrect) {
      setIsGameWon(true);
      setIsAnswerRevealed(true);
      toast({
        title: "🎉 Congratulations!",
        description: `You guessed correctly! The movie is "${currentMovie.title}"`,
      });
    } else {
      const remainingGuesses = maxGuesses - updatedGuesses.length;
      
      if (remainingGuesses === 0) {
        setIsGameOver(true);
        toast({
          title: "Game Over!",
          description: "No more guesses left. Try revealing the answer or start a new game!",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Not quite right!",
          description: `You have ${remainingGuesses} guess${remainingGuesses !== 1 ? 'es' : ''} left. Try again or get a hint!`,
          variant: "destructive",
        });
      }
    }
  };

  const handleRequestHint = () => {
    if (!currentMovie || !canRequestHint) return;

    const nextHint = currentMovie.hints[hintsUsed];
    if (nextHint) {
      setRevealedHints([...revealedHints, nextHint]);
      toast({
        title: "💡 Hint Revealed!",
        description: "Use this clue to help you guess the movie!",
      });
    }
  };

  const handleRevealAnswer = () => {
    setIsAnswerRevealed(true);
    setIsGameOver(true);
    toast({
      title: "Answer Revealed!",
      description: `The movie was "${currentMovie?.title}". Ready for a new challenge?`,
    });
  };

  if (!currentMovie) {
    return (
      <div className="min-h-screen bg-game-bg p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary mb-4">Loading...</div>
          <div className="text-muted-foreground">Preparing your movie challenge!</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-game-bg p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        <GameHeader
          guessesLeft={guessesLeft}
          hintsUsed={hintsUsed}
          onRevealAnswer={handleRevealAnswer}
          onNewGame={startNewGame}
          maxGuesses={maxGuesses}
          maxHints={maxHints}
        />

        <MovieClue
          clueImage={currentMovie.clueImage}
          movieTitle={currentMovie.title}
          isRevealed={isAnswerRevealed}
        />

        <HintsDisplay
          hints={currentMovie.hints}
          revealedHints={revealedHints}
        />

        <GuessInput
          onGuess={handleGuess}
          onRequestHint={handleRequestHint}
          canRequestHint={canRequestHint}
          isGameOver={isGameOver || isGameWon}
          guessesLeft={guessesLeft}
        />

        <GuessHistory guesses={guesses} />

        {(isGameWon || isGameOver) && (
          <Card className="w-full max-w-2xl mx-auto p-6 bg-card border-2 border-primary/20 text-center">
            <div className="space-y-4">
              {isGameWon && (
                <div className="flex items-center justify-center gap-2 text-success">
                  <PartyPopper className="h-8 w-8" />
                  <h2 className="text-2xl font-bold">Excellent Work!</h2>
                  <PartyPopper className="h-8 w-8" />
                </div>
              )}
              
              {isGameOver && !isGameWon && (
                <div className="text-warning">
                  <h2 className="text-2xl font-bold">Game Complete!</h2>
                  <p className="text-lg">Better luck next time!</p>
                </div>
              )}

              <div className="text-lg text-muted-foreground mb-4">
                {isGameWon 
                  ? `You solved it in ${guesses.length} guess${guesses.length !== 1 ? 'es' : ''} with ${hintsUsed} hint${hintsUsed !== 1 ? 's' : ''}!`
                  : "Don't worry, practice makes perfect!"
                }
              </div>

              <Button
                onClick={startNewGame}
                size="lg"
                className="px-8 py-3 text-lg"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Play Again
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};