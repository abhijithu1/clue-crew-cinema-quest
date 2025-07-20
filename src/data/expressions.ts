// Facial expression data for the guessing game
// Each entry contains an image URL, the correct emotion, and hints

export type Expression = {
  image: string;
  emotion: string;
  hints: string[];
};

export const expressions: Expression[] = [
  {
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    emotion: 'happy',
    hints: [
      'This emotion is often shown when something good happens.',
      'It is usually accompanied by a smile.',
      'People feel this when they receive good news.'
    ]
  },
  {
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    emotion: 'sad',
    hints: [
      'This emotion is often shown when something bad happens.',
      'It may involve tears or a frown.',
      'People feel this when they lose something important.'
    ]
  },
  {
    image: 'https://randomuser.me/api/portraits/men/3.jpg',
    emotion: 'angry',
    hints: [
      'This emotion is often shown when someone is upset or frustrated.',
      'It may involve a scowl or clenched teeth.',
      'People feel this when things do not go their way.'
    ]
  },
  {
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
    emotion: 'surprised',
    hints: [
      'This emotion is often shown when something unexpected happens.',
      'It may involve wide eyes and a dropped jaw.',
      'People feel this when they are caught off guard.'
    ]
  }
]; 