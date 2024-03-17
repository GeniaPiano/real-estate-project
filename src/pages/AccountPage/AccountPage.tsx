import { TitleHeader } from "../../components/atoms/TitleHeader/TitleHeader.tsx"
import {accountPageMessages} from "./messages.ts";

export const AccountPage = () => {
  return (
    <>
      <TitleHeader title={(accountPageMessages.title)}/>
    </>
  )
}
