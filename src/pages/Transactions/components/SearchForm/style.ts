import styled from "styled-components";

export const SearchFormConteiner = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 0.375rem;
    border: 0;
    background: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border-radius: 6px;
    font-weight: bold;
    color: ${(props) => props.theme["green-300"]};
    border: 1px solid ${(props) => props.theme["green-300"]};

    &disabled {
      opacity: 0.8;
    }

    &:not(:disabled):hover {
      color: ${(props) => props.theme.white};
      border: 1px solid ${(props) => props.theme["green-500"]};
      background: ${(props) => props.theme["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;
