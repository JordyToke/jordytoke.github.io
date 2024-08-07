import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  let error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return <p>{error.status} {error.statusText}</p>
  }

  return <p>{error.message || "Unknown Error"}</p>
}