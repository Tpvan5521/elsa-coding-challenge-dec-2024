import { useQuizIdParams } from "hooks";

export const ResultScreen = () => {
  const quizId = useQuizIdParams();
  return <div className="rtq-result-screen">Result {quizId}</div>;
};
