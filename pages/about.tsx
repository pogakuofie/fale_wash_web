import type { NextPage } from "next";

// components
import { StyledText } from "../components/common/basic";
import { PageContainer } from "../components/common/page";

const About: NextPage = () => {
  return (
    <PageContainer title={"Fale Wash - About us and our motivations"}>
      <StyledText>Hi, About</StyledText>
    </PageContainer>
  );
};

export default About;
