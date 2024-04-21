import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { ResumeCard, ResumeConteiner } from "./style";

export function Resume() {
  return (
    <ResumeConteiner>
      <ResumeCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,31</strong>
      </ResumeCard>
      <ResumeCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 17.400,31</strong>
      </ResumeCard>
      <ResumeCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#ffff" />
        </header>
        <strong>R$ 17.400,31</strong>
      </ResumeCard>
    </ResumeConteiner>
  );
}
