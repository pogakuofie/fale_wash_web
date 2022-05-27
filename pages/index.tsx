import type { NextPage } from "next";

// components
import { StyledText } from "../components/common/basic";
import PageContainer from "../components/common/page";

// config

const Home: NextPage = () => {
  return (
    <PageContainer>
      <StyledText>Hi, Home</StyledText>
    </PageContainer>
  );
};

export default Home;
