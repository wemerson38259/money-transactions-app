import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TrasactionType,
  TransactionsButtonType,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TrasactionType>
            <TransactionsButtonType variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionsButtonType>
            <TransactionsButtonType variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionsButtonType>
          </TrasactionType>
          <button type="submit">Cadastrar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
