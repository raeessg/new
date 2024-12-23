export type Difficulty = 'easy' | 'medium' | 'hard';

export type QuestionType = 'definition' | 'analysis' | 'application' | 'comparison' | 'evaluation';

export interface Question {
  id: string;
  text: string;
  topic: string;
  difficulty: Difficulty;
  marks: number;
  type: QuestionType;
}

export interface GeneratorConfig {
  topic: string;
  difficulty: Difficulty;
  questionCount: number;
}