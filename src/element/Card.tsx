import styled from "styled-components";


type CardProps = {
  width?: number;
  height?: number;
};

export const Card = styled.div<CardProps>`
  padding: 1rem;
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
  height: ${({ height }) => (height ? `${height}rem` : "auto")};
`;
