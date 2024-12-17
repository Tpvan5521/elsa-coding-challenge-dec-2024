import { useRouteError } from "react-router-dom";

export const InternalServerErrorScreen = () => {
  const error = useRouteError();
  console.error(error);
  return <main className="rtq-error-screen">500</main>;
};
