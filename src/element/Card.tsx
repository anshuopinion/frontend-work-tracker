import styled from "@emotion/styled";
import { Card as MCard } from "@material-ui/core";

type CardProps = {
  width?: number;
  height?: number;
};

export const Card = styled(MCard)<CardProps>`
  padding: 1rem;
  width: ${({ width }) => (width ? `${width}rem` : "auto")};
  height: ${({ height }) => (height ? `${height}rem` : "auto")};
`;
