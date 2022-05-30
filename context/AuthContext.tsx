import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
  getAuth,
} from "firebase/auth";
import parsePhoneNumber from "libphonenumber-js";

// config
import { createFirebaseApp } from "../config/firebase";
import { RecaptchaVerifier } from "firebase/auth";

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

  const app = createFirebaseApp();

  const auth = getAuth(app);

  auth.languageCode = "en";

  useEffect(() => {}, []);

  const sendOTP = (appVerifier: any) => {
    const parsed = parsePhoneNumber(`${countryCode}${phoneNumber}`);

    const { number, isValid } = parsed || {};

    if (parsed?.isValid())
      signInWithPhoneNumber(auth, parsed?.number, appVerifier)
        .then((confirmationResult) => {
          setConfirmResult(confirmationResult);
        })
        .catch((error) => {});
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
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
      })
      .catch((error: any) => {});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        recaptchaVerifier,
        phoneNumber,
        setPhoneNumber,
        countryCode,
        setCountryCode,
        setOTPCode,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
