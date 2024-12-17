import { useQuizIdParams } from "hooks/useQuizIdParams";

export const GameScreen = () => {
  const quizId = useQuizIdParams();
  return <div className="rtq-game-screen">Game</div>;
};
