import { Question, GeneratorConfig, QuestionType, Difficulty } from '../types';
import { questionTemplates } from './questionTemplates';
import { questionTypes } from './questionTypes';

function generateMarks(difficulty: Difficulty): number {
  switch (difficulty) {
    case 'easy': return 5;
    case 'medium': return 10;
    case 'hard': return 15;
  }
}

function getRandomTemplate(templates: ((topic: string) => string)[]): (topic: string) => string {
  const index = Math.floor(Math.random() * templates.length);
  return templates[index];
}

function distributeQuestionTypes(count: number): QuestionType[] {
  const types = Object.keys(questionTypes) as QuestionType[];
  const distribution: QuestionType[] = [];
  
  // Ensure at least one of each type if possible
  const baseCount = Math.min(count, types.length);
  for (let i = 0; i < baseCount; i++) {
    distribution.push(types[i]);
  }
  
  // Fill remaining slots randomly
  for (let i = baseCount; i < count; i++) {
    const randomType = types[Math.floor(Math.random() * types.length)];
    distribution.push(randomType);
  }
  
  // Shuffle the array
  return distribution.sort(() => Math.random() - 0.5);
}

export function generateQuestionPaper(config: GeneratorConfig): Question[] {
  const questions: Question[] = [];
  const questionTypeDistribution = distributeQuestionTypes(config.questionCount);

  questionTypeDistribution.forEach((type, index) => {
    const templates = questionTemplates[config.difficulty][type];
    const template = getRandomTemplate(templates);
    
    questions.push({
      id: `${index + 1}`,
      text: template(config.topic),
      topic: config.topic,
      difficulty: config.difficulty,
      marks: generateMarks(config.difficulty),
      type
    });
  });

  return questions;
}