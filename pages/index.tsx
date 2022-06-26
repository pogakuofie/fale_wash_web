import type { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

// components
import { Box, Button, Logo, StyledText } from "../components/common/basic";
import { PageContainer, Pager } from "../components/common/page";

// config

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [mobileCarouselState, setMobileCarouselState] = useState<number>(0);

  useEffect(() => {
    setMedia();

    window.addEventListener("resize", setMedia);
  }, []);

  const setMedia = () => {
    let { matches } = window.matchMedia("(max-width: 768px)");

    setIsMobile(matches);
  };

  const handleStartCTA = () => {
    let { matches } = window.matchMedia("(max-width: 768px)");

    if (matches) {
    }
  };

  return (
    <PageContainer padding={0}>
      <Pager
        flexDirection={"column"}
        backgroundImage={"../assets/images/background_logo.svg"}
        padding={16}
      >
        <Nav display={isMobile ? "none" : "flex"} padding={0}>
          <Logo height={45} width={45} src='../assets/images/logo.svg' />
          <Menu padding={0}>
            <StyledText
              cursor={"pointer"}
              onClick={() => {
                console.log("Hi");
              }}
              marginLeft={14}
              size={18}
              color='#3C0F95'
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
              color='#3C0F95'
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
              color='#3C0F95'
            >
              Sign In
            </StyledText>
          </Menu>
        </Nav>
        <Box
          flex={1}
          flexDirection='column'
          padding={50}
          justifyContent={"center"}
          align-items={"center"}
        >
          <Logo
            marginBottom={20}
            display={isMobile ? "flex" : "none"}
            alignSelf={"center"}
            height={45}
            width={45}
            src='../assets/images/logo.svg'
          />
          <StyledText
            weight={500}
            align={"center"}
            size={isMobile ? 34 : 54}
            color={"#3C0F95"}
            margin={0}
          >
            Clean Laundry,
            <br /> Always.
          </StyledText>
        </Box>
        <Box align-items={"center"} justifyContent='center'>
          <Button
            height={45}
            width={350}
            backgroundColor={"#34C4FA"}
            widthDiffMobile={100}
            cursor={"pointer"}
            borderRadius={5}
            justifyContent={"center"}
            onClick={() => {
              handleStartCTA();
            }}
          >
            <StyledText
              cursor={"pointer"}
              size={isMobile ? 16 : 18}
              color='#3C0F95'
              alignSelf='center'
              weight={400}
              userSelect={"none"}
            >
              GET STARTED
            </StyledText>
          </Button>
        </Box>
      </Pager>
      <Pager
        display={isMobile ? "none" : "flex"}
        padding={0}
        flexDirection={"row"}
      >
        <Box flexDirection='column'>
          <StyledText size={44} height={52}>
            Clean clothes for elegance and confidence.
          </StyledText>
          <StyledText height={46}>
            We work to make your clothes clean and ready, just the way you want
            them.
          </StyledText>
        </Box>
        <Box flexDirection='column' padding={0} backgroundColor='#34C4FA'>
          <StyledText height={56}>
            Clean clothes for elegance and confidence.
          </StyledText>
          <StyledText height={46}>
            We work to make your clothes clean and ready, just the way you want
            them.
          </StyledText>
        </Box>
      </Pager>
    </PageContainer>
  );
};

export default Home;

const Menu = styled(Box)``;

const Nav = styled(Box)`
  justify-content: space-between;
  align-items: center;
`;
