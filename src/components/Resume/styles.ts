import styled, { css } from "styled-components";

export const ResumeConteiner = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -5rem;
`;

interface ResumeCardProps {
  variant?: "green";
}

export const ResumeCard = styled.div<ResumeCardProps>`
  background: ${(props) => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme["gray-300"]};
  }

  strong {
    display: flex;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${(props) =>
    props.variant === "green" &&
    css`
      background: ${(props) => props.theme["green-700"]};
    `}
`;
