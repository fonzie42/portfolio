import { useRouteError } from "react-router-dom";
import { Header1, Paragraph } from "../ui/typography";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log({ error });

  return (
    <div id="error-page">
      <Header1>Oops!</Header1>
      <Paragraph>Sorry, an unexpected error has occurred.</Paragraph>
    </div>
  );
};
