import { TitleHeader } from "../../components/atoms/TitleHeader/TitleHeader.tsx";
import {postAddPageMessage} from "./messages.ts";

export const PostAddPage = () => {
  return (
    <>
      <TitleHeader title={postAddPageMessage.title} />
    </>
  );
};
