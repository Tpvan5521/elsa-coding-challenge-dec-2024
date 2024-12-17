import { useQuizIdParams } from "hooks";

export const LeaderBoardScreen = () => {
  const quizId = useQuizIdParams();
  return <div className="rtq-leaderboard-screen">LeaderBoard</div>;
};
