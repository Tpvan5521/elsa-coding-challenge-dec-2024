import { useParams } from "react-router-dom";

type ParamsType = {
  gameId: string;
};

export const useQuizIdParams = () => {
  const quizId = useParams<Partial<ParamsType>>()?.gameId;

  return quizId;
};
