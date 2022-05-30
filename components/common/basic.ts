import styled from "styled-components";

const StyledText = styled.p<{
  size?: number;
  align?: number;
  height?: number;
  margin?: number;
  weight?: number;
  color?: number;
  spacing?: number;
  pointer?: string;
}>`
  font-size: ${({ size }) => `${size}px`};
  align-self: center;
  text-align: ${({ align }) => align};
  line-height: ${({ height }) => `${height}px`};
  color: ${({ color }) => color};
  margin: ${({ margin }) => `${margin}px`};
  font-family: "Akshar", sans-serif;
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ spacing = 0 }) => `${spacing}px`};
  pointer: ${({ pointer = "default" }) => pointer};
`;

export { StyledText };