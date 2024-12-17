type BaseType = {
  id: string;
  createdAt?: string;
};

export type UserType = BaseType & {
  name: string;
  accountName: string;
};

export type QuizType = BaseType & {
  title: string;
  hostId: string;
  questions: QuestionType[];
};

export type QuestionType = BaseType & {
  title: string;
  answers: AnswerType[];
  answerTimeMs: number;
};

export type AnswerType = BaseType & {
  title: string;
};

export type CreateQuizPayload = Omit<QuizType, "id" | "createdAt">;

export type QuizSessionType = BaseType & {
  hostId: string;
  quizId: string;
  participants: ParticipantType[];
};

export type ParticipantType = BaseType & {
  name: string;
  score: number;
  sessionId: string;
  hasFinishedAllQuestions: boolean;
};

export type CreateParticipantPayload = Pick<
  ParticipantType,
  "name" | "sessionId"
>;
