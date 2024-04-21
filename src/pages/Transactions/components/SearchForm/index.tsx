import { MagnifyingGlass } from "phosphor-react";
import { SearchFormConteiner } from "./style";

export function SearchForm() {
  return (
    <SearchFormConteiner>
      <input type="text" placeholder="Busce uma movimentação orçamentária" />

      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormConteiner>
  );
}
