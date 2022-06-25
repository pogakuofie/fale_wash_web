import type { NextPage } from "next";
import styled from "styled-components";

// components
import { Box, Buttton, Logo, StyledText } from "../components/common/basic";
import { PageContainer, Pager } from "../components/common/page";

// config

const Home: NextPage = () => {
  return (
    <PageContainer padding={0}>
      <Pager
        style={{ flexDirection: "row-reverse" }}
        backgroundImage={"../assets/images/background_logo.svg"}
      >
        <Nav>
          <Logo height={45} width={45} src='../assets/images/logo.svg' />
          <Menu padding={0}>
            <StyledText
              cursor={"pointer"}
              onClick={() => {
                console.log("Hi");
              }}
              marginLeft={14}
              size={18}
            >
              Home
            </StyledText>
            <StyledText
              cursor={"pointer"}
              onClick={() => {
                console.log("Hi");
              }}
              marginLeft={14}
              size={18}
            >
              About
            </StyledText>
            <StyledText
              cursor={"pointer"}
              onClick={() => {
                console.log("Hi");
              }}
              marginLeft={14}
              size={18}
            >
              Sign In
            </StyledText>
          </Menu>
        </Nav>
        <Box
          style={{ flexDirection: "column" }}
          padding={50}
          justifyContent={"center"}
        >
          <MobileLogo marginBottom={15} padding={0} justifyContent={"center"}>
            <Logo height={45} width={45} src='../assets/images/logo.svg' />
          </MobileLogo>
          <StyledText
            weight={500}
            textAlign={"center"}
            size={54}
            sizeDiffMobile={22}
            color={"#3C0F95"}
            margin={0}
          >
            Clean Laundry,
            <br /> Always.
          </StyledText>
        </Box>
        <Box
          style={{ flex: 1, alignItems: "flex-end" }}
          justifyContent='center'
        >
          <Buttton
            height={45}
            width={350}
            backgroundColor={"#34C4FA"}
            widthDiffMobile={100}
            cursor={"pointer"}
          >
            <StyledText
              cursor={"pointer"}
              size={18}
              sizeDiffMobile={2}
              color='#ffffff'
            >
              GET STARTED
            </StyledText>
          </Buttton>
        </Box>
      </Pager>
    </PageContainer>
  );
};

export default Home;

const Menu = styled(Box)``;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 595px) {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 1100px) {
    display: flex;
  }

  @media only screen and (min-width: 1400px) {
    display: flex;
  }
`;

const MobileLogo = styled(Box)<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};

  @media only screen and (max-width: 595px) {
    display: flex;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
  }

  @media only screen and (min-width: 1100px) {
    display: none;
  }

  @media only screen and (min-width: 1400px) {
    display: none;
  }
`;
