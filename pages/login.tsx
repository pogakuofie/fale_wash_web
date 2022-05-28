import type { NextPage } from "next";

// components
import { StyledText } from "../components/common/basic";
import { useEffect } from "react";

// hooks
import { useAuth } from "../context/AuthContext";
import PageContainer from "../components/common/page";

const Login: NextPage = () => {
  useEffect(() => {}, []);

  const { recaptchaVerifier } = useAuth();

  return (
    <PageContainer>
      <StyledText>Hi, Login</StyledText>
      <div style={{}} id='sign-in-button'></div>
      <div id='recaptcha-container'></div>
      <button
        onClick={() => {
          recaptchaVerifier();
        }}
      >
        Start
      </button>
    </PageContainer>
  );
};

export default Login;
