import styled from "styled-components";

// interface Texted {
//   size: number | undefined;
//   align: string | undefined;
//   height: number | undefined;
//   margin: number | undefined;
//   weight: number | undefined;
//   spacing: number | undefined;
//   pointer: string | undefined;
// }

const StyledText = styled.p`
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
