import styled from "styled-components";

const StyledText = styled.p<{
  size?: number;
  align?: string;
  height?: number;
  margin?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  weight?: number;
  color?: string;
  spacing?: number;
  cursor?: string;
  alignSelf?: string;
  userSelect?: string;
}>`
  text-align: ${({ align }) => align};
  align-self: ${({ alignSelf }) => alignSelf};
  line-height: ${({ height }) => `${height}px`};
  color: ${({ color }) => color};
  margin: ${({ margin }) => `${margin}px`};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  font-family: "Akshar", sans-serif;
  font-weight: ${({ weight }) => weight};
  letter-spacing: ${({ spacing = 0 }) => `${spacing}px`};
  cursor: ${({ cursor = "default" }) => cursor};
  font-size: ${({ size }) => `${size}px`};
  user-select: ${({ userSelect }) => userSelect};
`;

const Box = styled.div<{
  padding?: number;
  width?: number;
  height?: number;
  display?: string;
  flex?: number;
  backgroundImage?: string;
  justifyContent?: string;
  backgroundColor?: string;
  borderRadius?: number;
  cursor?: string;
  flexDirection?: string;
  alignItems?: string;
  marginBottom?: number;
  marginTop?: number;
  marginRight?: number;
  paddingTop?: number;
}>`
  display: ${({ display = "flex" }) => display};
  flex: ${({ flex }) => flex};
  flex-direction: ${({ flexDirection }) => flexDirection};
  height: ${({ height }) => `${height}px`};
  border-radius: ${({ borderRadius }) => `${borderRadius}px`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ padding = 8 }) => `${padding}px`};
  padding-top: ${({ paddingTop }) => `${paddingTop}px`};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat, repeat;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  cursor: ${({ cursor = "default" }) => cursor};
  width: ${({ width }) => `${width}px`};
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
`;

const Logo = styled.img<{
  height?: number;
  width?: number;
  display?: string;
  alignSelf?: string;
  marginBottom?: number;
}>`
  display: ${({ display }) => display};
  align-self: ${({ alignSelf }) => alignSelf};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
`;

const Button = (props: any) => {
  const {
    children,
    height,
    backgroundColor,
    width,
    padding,
    cursor,
    justifyContent,
    borderRadius,
    onClick,
    marginBottom,
  } = props;

  return (
    <Box
      onClick={onClick}
      justifyContent={justifyContent}
      width={width}
      height={height}
      padding={padding}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      cursor={cursor}
      marginBottom={marginBottom}
    >
      {children}
    </Box>
  );
};

const Image = styled.img<{
  display?: string;
  height?: any;
  width?: number;
  alignSelf?: string;
  marginRight?: number;
  cursor?: string;
}>`
  display: ${({ display }) => display};
  height: ${({ height }) => `${height}px`};
  width: ${({ width }) => `${width}px`};
  align-self: ${({ alignSelf }) => alignSelf};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  cursor: ${({ cursor = "default" }) => cursor};
`;

export { StyledText, Box, Logo, Button, Image };
