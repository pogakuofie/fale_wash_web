import { createContext, useContext, useEffect, useState } from "react";
import { getMessaging } from "firebase/messaging";

// config
import { createFirebaseApp } from "../config/clientFirebase";

const MessagingContext = createContext<any>({});

export const useMessaging = () => useContext(MessagingContext);

export const MessagingContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const app = createFirebaseApp();

  // let messaging;

  // useEffect(() => {
  //   if (app) {
  //     console.log("here");
  //     messaging = getMessaging(app);
  //   }
  // }, [app]);

  // const messaging = getMessaging(app);

  // messaging.getToken({
  //   vapidKey:
  //     "BJWKLEtkHeWx4qCG_Ddem0f-stJ2MCHGz67zNGa1d68VyilPwbhVIfqk91XrXG6rILOKY47-J_LZb1_Q1JB3my8",
  // });

  console.log(app, "appapp");

  return (
    <MessagingContext.Provider value={{}}>{children}</MessagingContext.Provider>
  );
};
