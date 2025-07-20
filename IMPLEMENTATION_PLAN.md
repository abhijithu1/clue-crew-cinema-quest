# Implementation Plan: Facial Expression Guessing Game

## Overview
Transform the current movie guessing game into a facial expression guessing game. In this new version, users will be shown an image of a person's facial expression and must guess the emotion being displayed. If the user is unable to guess, they can request hints for each game round.

---

## Steps

### 1. Data Model & Assets
- **Replace Movie Data:**
  - Remove or archive the existing `movies.ts` data.
  - Create a new data file (e.g., `expressions.ts`) containing:
    - Image URLs or local paths for facial expressions.
    - The correct emotion label for each image (e.g., happy, sad, angry, surprised, etc.).
    - Optional: List of hints for each expression (e.g., "This emotion is often shown when receiving good news.").
- **Image Assets:**
  - Collect or generate a set of facial expression images (ensure usage rights).
  - Store images in the `public/` directory or use external URLs.

### 2. UI/UX Changes
- **Game Display:**
  - Update the main game component to display a facial expression image instead of a movie clue.
  - Update any text or instructions to reference emotions instead of movies.
- **Guess Input:**
  - Change input validation to check for emotion labels instead of movie titles.
  - Optionally, provide a dropdown or autocomplete for common emotions.
- **Hints:**
  - Update the hints system to provide clues about the emotion (not movie-related hints).
- **Feedback:**
  - Update feedback messages to reference emotions (e.g., "Correct! The emotion was 'surprised'.").

### 3. Component Refactoring
- **Rename Components:**
  - Rename movie-specific components (e.g., `MovieClue.tsx` → `ExpressionClue.tsx`).
  - Update imports and usage throughout the codebase.
- **Update Logic:**
  - Refactor logic in the main game component to use the new data model.
  - Ensure guess checking and hint logic works with emotions.

### 4. Testing & Validation
- **Manual Testing:**
  - Play through the game to ensure images display, guesses are validated, and hints work as expected.
- **Edge Cases:**
  - Test with similar emotions (e.g., happy vs. excited) to ensure fair gameplay.
- **Accessibility:**
  - Ensure images have alt text and the game is accessible to screen readers.

### 5. Documentation & Polish
- **Update README:**
  - Reflect the new game concept and instructions.
- **Polish UI:**
  - Adjust styles as needed for the new content.
- **Optional Enhancements:**
  - Add scoring, timer, or difficulty levels.
  - Support for multiple languages or custom emotion sets.

---

## File/Component Checklist
- [ ] `src/data/expressions.ts` (new data file)
- [ ] `public/expressions/` (image assets)
- [ ] `src/components/ExpressionClue.tsx` (renamed/updated component)
- [ ] Update all references from movies to expressions/emotions
- [ ] Update hints and feedback logic
- [ ] Update documentation

---

## Timeline Estimate
1. Data & Assets: 1 day
2. UI/UX & Component Refactor: 1-2 days
3. Testing & Polish: 1 day

---

## Notes
- Ensure all image assets are properly licensed.
- Consider user privacy and inclusivity in emotion selection and image sourcing. 