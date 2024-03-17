import { TitleHeader } from "../../components/atoms/TitleHeader/TitleHeader.tsx";
import {postAddPageMessage} from "./messages.ts";

export const PostAddPage = () => {
  return (
    <div data-testid='post-add-page'>
      <TitleHeader title={postAddPageMessage.title} />
    </div>
  );
};
