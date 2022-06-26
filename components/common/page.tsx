import styled from "styled-components";

// components
import { Box } from "./basic";
import CustomHead from "./head";

const PageContainer = (props: any) => {
  const { children, title, padding } = props;
  return (
    <BreakPoints padding={padding}>
      <CustomHead title={title} />
      {children}
    </BreakPoints>
  );
};

const Pager = (props: any) => {
  const { children, backgroundImage, padding, flexDirection, display } = props;

  return (
    <Page
      backgroundImage={backgroundImage}
      padding={padding}
      flexDirection={flexDirection}
      display={display}
    >
      {children}
    </Page>
  );
};

export { PageContainer, Pager };

const Page = styled(Box)`
  display: ${({ display }) => display};

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
  flex-direction: column;

  @media only screen and (max-width: 595px) {
    // background-color: pink;
  }

  @media only screen and (min-width: 600px) {
    // background-color: blue;
  }

  @media only screen and (min-width: 768px) {
    // background-color: yellow;
  }

  @media only screen and (min-width: 889px) {
    // background-color: brown;
    margin-left: 100px;
    margin-right: 100px;
  }

  @media only screen and (min-width: 1100px) {
    // background-color: green;
    margin-left: 140px;
    margin-right: 140px;
  }

  @media only screen and (min-width: 1400px) {
    // background-color: red;
    margin-left: 280px;
    margin-right: 280px;
  }
`;
