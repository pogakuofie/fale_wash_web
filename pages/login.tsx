import type { NextPage } from "next";

// components
import { StyledText } from "../components/common/basic";
import { useEffect } from "react";

// hooks
import { useAuth } from "../context/AuthContext";
import PageContainer from "../components/common/page";

const Login: NextPage = () => {
  useEffect(() => {}, []);

  const { recaptchaVerifier, setPhoneNumber, setOTPCode, login } = useAuth();

  return (
    <PageContainer>
      <StyledText>Hi, Login</StyledText>
      <div style={{}} id='sign-in-button'></div>
      <div id='recaptcha-container'></div>
      {/* <input
        type={"text"}
        maxLength={10}
        onChange={({ target }) => {
          const { value } = target;

          setPhoneNumber(value);
        }}
      />
      <input
        maxLength={6}
        type={"text"}
        onChange={({ target }) => {
          const { value } = target;
          setOTPCode(value);
        }}
      />
      <button
        onClick={() => {
          recaptchaVerifier();
        }}
      >
        Send
      </button>
      <button
        onClick={() => {
          login();
        }}
      >
        Verify
      </button> */}
    </PageContainer>
  );
};

export default Login;
