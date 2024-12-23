import { Difficulty, QuestionType } from '../types';

type TemplateFunction = (topic: string) => string;
type DifficultyTemplates = Record<QuestionType, TemplateFunction[]>;
type Templates = Record<Difficulty, DifficultyTemplates>;

export const questionTemplates: Templates = {
  easy: {
    definition: [
      (topic) => `Define the fundamental concepts of ${topic}.`,
      (topic) => `What are the key terms used in ${topic}?`,
      (topic) => `Explain the basic terminology of ${topic}.`
    ],
    analysis: [
      (topic) => `Identify the main components of ${topic}.`,
      (topic) => `What are the basic characteristics of ${topic}?`,
      (topic) => `Break down the essential elements of ${topic}.`
    ],
    application: [
      (topic) => `Give a simple example of ${topic} in everyday life.`,
      (topic) => `How is ${topic} used in basic scenarios?`,
      (topic) => `Describe a common application of ${topic}.`
    ],
    comparison: [
      (topic) => `What are the similarities between ${topic} and related concepts?`,
      (topic) => `How does ${topic} differ from other basic concepts?`,
      (topic) => `Compare ${topic} with similar introductory ideas.`
    ],
    evaluation: [
      (topic) => `What are the benefits of understanding ${topic}?`,
      (topic) => `Why is ${topic} important for beginners?`,
      (topic) => `Evaluate the basic importance of ${topic}.`
    ]
  },
  medium: {
    definition: [
      (topic) => `Explain the theoretical framework of ${topic}.`,
      (topic) => `What are the underlying principles of ${topic}?`,
      (topic) => `Describe the core mechanisms of ${topic}.`
    ],
    analysis: [
      (topic) => `Analyze the relationship between different aspects of ${topic}.`,
      (topic) => `How do various components of ${topic} interact?`,
      (topic) => `What factors influence the development of ${topic}?`
    ],
    application: [
      (topic) => `How can ${topic} be implemented in professional settings?`,
      (topic) => `Describe practical applications of ${topic} in industry.`,
      (topic) => `What are some real-world use cases of ${topic}?`
    ],
    comparison: [
      (topic) => `Compare and contrast different approaches to ${topic}.`,
      (topic) => `What are the pros and cons of different ${topic} methodologies?`,
      (topic) => `How do various schools of thought approach ${topic}?`
    ],
    evaluation: [
      (topic) => `What are the challenges in implementing ${topic}?`,
      (topic) => `Evaluate the effectiveness of current ${topic} practices.`,
      (topic) => `What are the limitations of conventional ${topic} approaches?`
    ]
  },
  hard: {
    definition: [
      (topic) => `Critically examine the advanced concepts in ${topic}.`,
      (topic) => `What are the cutting-edge developments in ${topic}?`,
      (topic) => `Explain the complex theoretical aspects of ${topic}.`
    ],
    analysis: [
      (topic) => `Analyze the systemic implications of ${topic} in complex scenarios.`,
      (topic) => `What are the intricate relationships between different aspects of ${topic}?`,
      (topic) => `How do advanced components of ${topic} interact in complex systems?`
    ],
    application: [
      (topic) => `Design a comprehensive solution using advanced ${topic} concepts.`,
      (topic) => `How would you implement ${topic} in a complex enterprise setting?`,
      (topic) => `Propose an innovative application of ${topic} in a challenging context.`
    ],
    comparison: [
      (topic) => `Compare different paradigms in advanced ${topic} implementation.`,
      (topic) => `Evaluate competing theories in advanced ${topic} research.`,
      (topic) => `How do different advanced approaches to ${topic} complement each other?`
    ],
    evaluation: [
      (topic) => `Critically evaluate the future implications of ${topic}.`,
      (topic) => `What are the theoretical and practical limitations of current ${topic} approaches?`,
      (topic) => `Assess the potential impact of emerging trends in ${topic}.`
    ]
  }
};