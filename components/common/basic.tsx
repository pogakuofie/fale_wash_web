import styled from "styled-components";

const StyledText = styled.p<{
  size?: number;
  sizeDiffMobile?: number;
  align?: number;
  height?: number;
  margin?: number;
  weight?: number;
  color?: string;
  spacing?: number;
  marginLeft?: number;
  cursor?: string;
  textAlign?: string;
}>`
  align-self: center;
  text-align: ${({ align }) => align};
  line-height: ${({ height }) => `${height}px`};
  color: ${({ color }) => color};
  margin: ${({ margin }) => `${margin}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  font-family: "Akshar", sans-serif;
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ spacing = 0 }) => `${spacing}px`};
  cursor: ${({ cursor = "default" }) => cursor};
  text-align: ${({ textAlign = "left" }) => textAlign};

  @media only screen and (max-width: 595px) {
    font-size: ${({ size = 14, sizeDiffMobile = 0 }) =>
      `${size - sizeDiffMobile}px`};
  }

  @media only screen and (min-width: 600px) {
    font-size: ${({ size = 14, sizeDiffMobile = 0 }) =>
      `${size - sizeDiffMobile}px`};
  }

  @media only screen and (min-width: 768px) {
    font-size: ${({ size = 14, sizeDiffMobile = 0 }) =>
      `${size - sizeDiffMobile}px`};
  }

  @media only screen and (min-width: 889px) {
    font-size: ${({ size = 14 }) => `${size}px`};
  }

  @media only screen and (min-width: 1100px) {
    font-size: ${({ size = 14 }) => `${size}px`};
  }

  @media only screen and (min-width: 1400px) {
    font-size: ${({ size = 14 }) => `${size}px`};
  }
`;

const Box = styled.div<{
  padding?: number;
  width?: number;
  height?: number;
  widthDiffMobile?: number;
  display?: string;
  backgroundImage?: string;
  justifyContent?: string;
  backgroundColor?: string;
  borderRadius?: number;
  cursor?: string;
}>`
  display: ${({ display = "flex" }) => display};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background-color: ${({ backgroundColor = "" }) => backgroundColor};
  padding: ${({ padding = 8 }) => `${padding}px`};
  background-image: ${({ backgroundImage = "" }) => `url(${backgroundImage})`};
  background-repeat: no-repeat, repeat;
  justify-content: ${({ justifyContent = "flex-start" }) =>
    `${justifyContent}`};
  cursor: ${({ cursor = "default" }) => cursor};

  @media only screen and (max-width: 595px) {
    width: ${({ width, widthDiffMobile = 0 }) =>
      width && `${width - widthDiffMobile}px`};
  }

  @media only screen and (min-width: 600px) {
    width: ${({ width, widthDiffMobile = 0 }) =>
      width && `${width - widthDiffMobile}px`};
  }

  @media only screen and (min-width: 768px) {
    width: ${({ width, widthDiffMobile = 0 }) =>
      width && `${width - widthDiffMobile}px`};
  }

  @media only screen and (min-width: 889px) {
    width: ${({ width }) => `${width}px`};
  }

  @media only screen and (min-width: 1100px) {
    width: ${({ width }) => `${width}px`};
  }

  @media only screen and (min-width: 1400px) {
    width: ${({ width }) => `${width}px`};
  }
`;

const Logo = styled.img<{ height?: number; width?: number }>`
  @media only screen and (max-width: 595px) {
    height: ${({ height = 0 }) => `${height - 5}px`};
    width: ${({ width = 0 }) => `${width - 5}px`};
  }

  @media only screen and (min-width: 600px) {
    height: ${({ height = 0 }) => `${height - 5}px`};
    width: ${({ width = 0 }) => `${width - 5}px`};
  }

  @media only screen and (min-width: 768px) {
    height: ${({ height = 0 }) => `${height - 5}px`};
    width: ${({ width = 0 }) => `${width - 5}px`};
  }

  @media only screen and (min-width: 889px) {
    height: ${({ height = 45 }) => `${height}px`};
    width: ${({ width = 45 }) => `${width}px`};
  }

  @media only screen and (min-width: 1100px) {
    height: ${({ height = 45 }) => `${height}px`};
    width: ${({ width = 45 }) => `${width}px`};
  }

  @media only screen and (min-width: 1400px) {
    height: ${({ height = 45 }) => `${height}px`};
    width: ${({ width = 45 }) => `${width}px`};
  }
`;

const Buttton = (props: any) => {
  const {
    children,
    height,
    backgroundColor,
    width,
    padding,
    widthDiffMobile,
    cursor,
  } = props;

  return (
    <Box
      justifyContent='center'
      width={width}
      widthDiffMobile={widthDiffMobile}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={5}
      cursor={cursor}
    >
      {children}
    </Box>
  );
};

export { StyledText, Box, Logo, Buttton };
