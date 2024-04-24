import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/globals";
import { Transactions } from "./pages/Transactions";
import { TransactionProviders } from "./contexts/TransactionsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProviders>
        <Transactions />
      </TransactionProviders>
    </ThemeProvider>
  );
}
