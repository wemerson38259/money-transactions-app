import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TrasactionType,
  TransactionsButtonType,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../lib/axios";
import { useContext } from "react";
import {
  TransactionProviders,
  TrasactionsContext,
} from "../../contexts/TransactionsContext";

const newTransactionModalSchema = z.object({
  description: z.string(),
  amount: z.number(),
  category: z.string(),
  type: z.enum(["income", "outcome"]),
});

type NewTrasactionFormInputs = z.infer<typeof newTransactionModalSchema>;
export function NewTransactionModal() {
  const { createTransaction } = useContext(TrasactionsContext);

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTrasactionFormInputs>({
    resolver: zodResolver(newTransactionModalSchema),
  });

  async function handleCreateNewTransaction(data: NewTrasactionFormInputs) {
    const { description, amount, category, type } = data;
    await createTransaction({ description, amount, category, type });
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register("description")}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register("amount", { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register("category")}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TrasactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionsButtonType variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionsButtonType>
                  <TransactionsButtonType variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionsButtonType>
                </TrasactionType>
              );
            }}
          ></Controller>

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
