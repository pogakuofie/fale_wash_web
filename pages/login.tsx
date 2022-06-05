import type { NextPage } from "next";
import { useRouter } from "next/router";

// components
import { StyledText } from "../components/common/basic";
import PageContainer from "../components/common/page";

// hooks
import { useAuth } from "../context/AuthContext";

const Login: NextPage = () => {
  const { recaptchaVerifier, setPhoneNumber, setOTPCode, login, isLoggedIn } =
    useAuth();

  const router = useRouter();

  return (
    <PageContainer>
      <StyledText>Hi, Login</StyledText>
      <div style={{}} id='sign-in-button'></div>
      <div id='recaptcha-container'></div>
      <input
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
      </button>
      <button
        onClick={() => {
          if (isLoggedIn) router.push("/dashboard");
        }}
      >
        Dashboard
      </button>
    </PageContainer>
  );
};

export default Login;
