import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  signOut,
  getAuth,
} from "firebase/auth";

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
  const [appVerifier, setAppVerifier] = useState<any>(null);

  const app = createFirebaseApp();
  const auth = getAuth(app);

  auth.languageCode = "en";

  useEffect(() => {}, []);

  const login = () => {
    signInWithPhoneNumber(auth, "+233547557948", appVerifier)
      .then((confirmationResult) => {
        setConfirmResult(confirmationResult);
        console.log("confirmationResult", confirmationResult);
      })
      .catch((error) => {
        console.log("sms error", error);
      });
  };

  const logout = async () => {
    setUser(null);
    await signOut(auth);
  };

  const recaptchaVerifier = () => {
    const recaptcha = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response: any) => {
          console.log(response);
        },
        "expired-callback": () => {
          console.log("expired");
        },
      },
      auth
    ).verify();

    setAppVerifier(recaptcha);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, recaptchaVerifier }}>
      {children}
    </AuthContext.Provider>
  );
};