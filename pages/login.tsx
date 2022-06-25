import type { NextPage } from "next";
import { useRouter } from "next/router";
import { getMessaging, getToken } from "firebase/messaging";
import { useEffect } from "react";

// components
import { StyledText } from "../components/common/basic";
import { PageContainer } from "../components/common/page";

// lib
import { createFirebaseApp } from "../config/clientFirebase";

// hooks
import { useAuth } from "../context/AuthContext";

const Login: NextPage = () => {
  const { recaptchaVerifier, setPhoneNumber, setOTPCode, login, isLoggedIn } =
    useAuth();

  const router = useRouter();

  const app = createFirebaseApp();

  // useEffect(() => {
  //   Notification.requestPermission().then(function (status) {
  //     if (status === "denied") {
  //       console.log("denied");
  //     } else if (status === "granted") {
  //       const messaging = getMessaging(app);

  //       getToken(messaging, {
  //         vapidKey:
  //           "BJWKLEtkHeWx4qCG_Ddem0f-stJ2MCHGz67zNGa1d68VyilPwbhVIfqk91XrXG6rILOKY47-J_LZb1_Q1JB3my8",
  //       });
  //     }
  //   });
  // }, []);

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
      <button onClick={() => {}}>Permission</button>
    </PageContainer>
  );
};

export default Login;
