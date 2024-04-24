import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { ResumeCard, ResumeConteiner } from "./styles";
import { TrasactionsContext } from "../../contexts/TransactionsContext";
import { useContext } from "react";
import { priceFormatter } from "../../utils/formatter";

export function Resume() {
  const { transactions } = useContext(TrasactionsContext);
  //{income: number, outcome: number, total: number}
  const resumo = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.income += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.outcome += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );
  return (
    <ResumeConteiner>
      <ResumeCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(resumo.income)}</strong>
      </ResumeCard>
      <ResumeCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(resumo.outcome)}</strong>
      </ResumeCard>
      <ResumeCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>{priceFormatter.format(resumo.total)}</strong>
      </ResumeCard>
    </ResumeConteiner>
  );
}
