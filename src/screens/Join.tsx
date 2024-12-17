import { useQuizIdParams } from "hooks";

export const JoinScreen = () => {
  const quizId = useQuizIdParams();
  return <div className="rtq-join-screen">Join</div>;
};
