import { createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionProps {
  id: number;
  description: string;
  type: "income" | "outcome";
  amount: number;
  createdAt: string;
  category: string;
}

interface CreateTransactionInput {
  description: string;
  type: "income" | "outcome";
  amount: number;
  category: string;
}

interface TrasactionsContextType {
  transactions: TransactionProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>;
}

export const TrasactionsContext = createContext({} as TrasactionsContextType);

interface TransactionProvidersProps {
  children: React.ReactNode;
}

export function TransactionProviders({ children }: TransactionProvidersProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        description: query,
      },
    });
    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionInput) {
    const response = await api.post("transactions", {
      description: data.description,
      type: data.type,
      amount: data.amount,
      category: data.category,
      createdAt: new Date(),
    });

    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TrasactionsContext.Provider
      value={{ transactions, fetchTransactions, createTransaction }}
    >
      {children}
    </TrasactionsContext.Provider>
  );
}
