import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";

// components
import {
  Box,
  Button,
  Image,
  Logo,
  StyledText,
} from "../components/common/basic";
import { PageContainer, Pager } from "../components/common/page";

// config

const Home: NextPage = () => {
  const [isMobile, setIsMobile] = useState<boolean>();
  const [mobileCarouselState, setMobileCarouselState] = useState<boolean[]>([
    true,
    false,
  ]);

  const [currentCarouselStage, setCurrentCarouselStage] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    setMedia();

    console.log(mobileCarouselState[currentCarouselStage]);

    window.addEventListener("resize", setMedia);
  }, []);

  const setMedia = () => {
    let { matches } = window.matchMedia("(max-width: 768px)");

    setIsMobile(matches);
  };

  const handleStartCTA = () => {
    if (isMobile) {
      const moveCarousel = mobileCarouselState.map((item) => {
        return false;
      });

      moveCarousel[currentCarouselStage + 1] = true;

      setMobileCarouselState(moveCarousel);

      setCurrentCarouselStage(currentCarouselStage + 1);
    } else {
      router.push("/login");
    }
  };

  return (
    <PageContainer flexDirection={isMobile ? "row" : "column"} padding={0}>
      <Pager
        display={isMobile ? (mobileCarouselState[0] ? "flex" : "none") : "flex"}
        flexDirection={"column"}
        backgroundImage={"../assets/images/background_logo.svg"}
        padding={16}
      >
        <Nav display={isMobile ? "none" : "flex"} padding={0}>
          <Logo height={45} width={45} src='../assets/images/logo.svg' />
          <Box padding={0}>
            <StyledText
              cursor={"pointer"}
              onClick={() => {
                router.push("/");
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
                router.push("/");
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
                router.push("/login");
              }}
              marginLeft={14}
              size={18}
              color='#3C0F95'
            >
              Sign In
            </StyledText>
          </Box>
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
        paddingTop={80}
      >
        <Box flexDirection={"column"}>
          <StyledText size={44} marginRight={80} height={48} margin={0}>
            Clean clothes for elegance and confidence.
          </StyledText>
          <StyledText
            margin={0}
            marginTop={24}
            size={18}
            marginRight={110}
            height={22}
          >
            We work to make your clothes clean and ready, just the way you want
            them.
          </StyledText>
        </Box>
        <Box padding={0} width={350} backgroundColor={"#34C4FA"}>
          <Image
            alt='shirt on hanger'
            src='../assets/images/hand_hanger_shirt.svg'
            height={"100%"}
          />
        </Box>
      </Pager>
      <Pager
        display={isMobile ? (mobileCarouselState[1] ? "flex" : "none") : "flex"}
        flexDirection={isMobile ? "column" : "column-reverse"}
        paddingTop={isMobile ? 50 : 80}
        padding={0}
        marginTop={isMobile ? 0 : 130}
        backgroundColor={isMobile && "#34C4FA"}
      >
        <Box padding={16} flexDirection={"column"}>
          <StyledText
            margin={0}
            marginTop={isMobile ? 20 : 30}
            size={isMobile ? 36 : 38}
          >
            Your Comfort, Our Business.
          </StyledText>
          <StyledText size={isMobile ? 16 : 20}>
            Too busy to get your laundry done? Well, good news, you do not have
            to. It is why we are; you, are why we here.
          </StyledText>
        </Box>
        <Box justifyContent={"center"} backgroundColor={"#34C4FA"}>
          <Image
            alt='shirt on hanger'
            src='../assets/images/van.svg'
            height={isMobile ? 200 : 300}
            alignSelf={"flex-end"}
            marginRight={isMobile ? -200 : 0}
          />
        </Box>
        <Image
          display={isMobile ? "flex" : "none"}
          alt='back button'
          src='../assets/images/purple_blue.svg'
          height={150}
          alignSelf={"flex-end"}
          cursor={"pointer"}
          onClick={() => {
            console.log("Number");
          }}
        />
      </Pager>
    </PageContainer>
  );
};

export default Home;

const Nav = styled(Box)`
  justify-content: space-between;
  align-items: center;
`;
