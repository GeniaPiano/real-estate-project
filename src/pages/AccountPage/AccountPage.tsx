import { TitleHeader } from "../../components/atoms/TitleHeader/TitleHeader.tsx"
import {accountPageMessages} from "./messages.ts";

export const AccountPage = () => {
  return (
    <div data-testid='account-page'>
      <TitleHeader title={(accountPageMessages.title)}/>
    </div>
  )
}
