import {
  HeaderConteiner,
  HeaderContent,
  NewTransactionsButton,
} from "./styles";
import logoIMG from "./../../assets/logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { NewTransactionModal } from "../NewTransactionModal";
export function Header() {
  return (
    <HeaderConteiner>
      <HeaderContent>
        <img src={logoIMG} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionsButton>Nova Transação</NewTransactionsButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderConteiner>
  );
}
