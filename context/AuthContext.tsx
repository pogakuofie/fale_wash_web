import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
  getAuth,
  signInAnonymously,
} from "firebase/auth";
import parsePhoneNumber from "libphonenumber-js";
import { RecaptchaVerifier } from "firebase/auth";
import { useRouter } from "next/router";

// config
import { createFirebaseApp } from "../config/clientFirebase";

const AuthContext = createContext<any>({});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<any>(null);
  const [confirmResult, setConfirmResult] = useState<any>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>("+233");
  const [optCode, setOTPCode] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  const app = createFirebaseApp();

  const auth = getAuth(app);

  const router = useRouter();

  auth.languageCode = "en";

  useEffect(() => {
    const cachedIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(cachedIsLoggedIn);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");
      } else {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem("isLoggedIn");
      }
    });
  }, [auth]);

  const sendOTP = (appVerifier: any) => {
    const parsed = parsePhoneNumber(`${countryCode}${phoneNumber}`);

    if (parsed?.isValid())
      signInWithPhoneNumber(auth, parsed?.number, appVerifier)
        .then((confirmationResult) => {
          setConfirmResult(confirmationResult);
        })
        .catch((error) => {});
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  const recaptchaVerifier = () => {
    const appVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {},
        "expired-callback": () => {},
      },
      auth
    );

    sendOTP(appVerifier);
  };

  const login = () => {
    confirmResult
      .confirm(optCode)
      .then((result: any) => {
        const { user } = result;

        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", "true");

        router.push("/dashboard");
      })
      .catch((error: any) => {});
  };

  const anonSignIn = () => {
    signInAnonymously(auth)
      .then(() => {
        // Signed in..
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  };

  return (
    <AuthContext.Provider
      value={{
        app,
        user,
        logout,
        recaptchaVerifier,
        phoneNumber,
        setPhoneNumber,
        countryCode,
        setCountryCode,
        setOTPCode,
        login,
        isLoggedIn,
        anonSignIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
