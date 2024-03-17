import {errorPageMessage} from "./messages.ts";

export const ErrorsPage = () => {
  return <div data-testid='error-page'>{errorPageMessage.title}</div>
}
