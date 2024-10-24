import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as Error & { statusText?: string };
  console.error(error);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
