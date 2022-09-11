import styled from "styled-components";

// components
import { Box } from "./basic";
import CustomHead from "./head";

const PageContainer = ({
  children,
  title,
  padding,
  paddingTop,
  flexDirection,
  width,
}: any) => {
  return (
    <BreakPoints
      flexDirection={flexDirection}
      padding={padding}
      paddingTop={paddingTop}
      width={width}
    >
      <CustomHead title={title} />
      {children}
    </BreakPoints>
  );
};

const Pager = ({
  children,
  backgroundImage,
  padding,
  flexDirection,
  display,
  paddingTop,
  paddingLeft,
  paddingRight,
  backgroundColor = "white",
  marginTop,
  marginRight,
  marginLeft,
  alignItems,
  justifyContent,
  paddingBottom,
}: any) => {
  return (
    <Page
      backgroundImage={backgroundImage}
      padding={padding}
      flexDirection={flexDirection}
      display={display}
      paddingTop={paddingTop}
      backgroundColor={backgroundColor}
      marginTop={marginTop}
      marginRight={marginRight}
      alignItems={alignItems}
      justifyContent={justifyContent}
      marginLeft={marginLeft}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
    >
      {children}
    </Page>
  );
};

export { PageContainer, Pager };

const Page = styled(Box)`
  display: ${({ display }) => display};
  flex-direction: ${({ flexDirection }) => flexDirection};
  margin-right: ${({ marginRight }) => `${marginRight}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  padding-right: ${({ paddingLeft }) => `${paddingLeft}px`};
  padding-left: ${({ paddingRight }) => `${paddingRight}px`};
  padding-bottom: ${({ paddingBottom }) => `${paddingBottom}px`};
  overflow: hidden;
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};

  @media only screen and (max-width: 595px) {
    height: 100vh;
  }

  @media only screen and (min-width: 600px) {
    height: 100vh;
  }

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }

  @media only screen and (min-width: 889px) {
    height: 80vh;
  }

  @media only screen and (min-width: 1100px) {
    height: 70vh;
  }

  @media only screen and (min-width: 1400px) {
    height: 70vh;
  }
`;

const BreakPoints = styled(Box)`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  // background-color: #f2f2f2;

  @media only screen and (max-width: 595px) {
    // background-color: #f5f5f5;
  }

  @media only screen and (min-width: 600px) {
    // background-color: blue;
  }

  @media only screen and (min-width: 768px) {
    // background-color: yellow;
  }

  @media only screen and (min-width: 889px) {
    // background-color: brown;
    padding-left: 100px;
    padding-right: 100px;
  }

  @media only screen and (min-width: 1100px) {
    // background-color: green;
    padding-left: 140px;
    padding-right: 140px;
  }

  @media only screen and (min-width: 1400px) {
    // background-color: red;
    padding-left: 280px;
    padding-right: 280px;
  }
`;
