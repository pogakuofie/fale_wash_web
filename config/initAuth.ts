import { init } from "next-firebase-auth";

const initAuth = () => {
  const {
    FIREBASE_PRIVATE_KEY,
    PUBLIC_FIREBASE_API_KEY,
    auth_uri,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    Realtime_Database,
  } = process.env;

  if (FIREBASE_PRIVATE_KEY)
    init({
      authPageURL: "/auth",
      appPageURL: "/",
      loginAPIEndpoint: "/api/login", // required
      logoutAPIEndpoint: "/api/logout", // required
      onLoginRequestError: (err) => {
        console.error(err);
      },
      onLogoutRequestError: (err) => {
        console.error(err);
      },
      firebaseAdminInitConfig: {
        credential: {
          projectId: "fale-wash-a6707",
          clientEmail:
            "firebase-adminsdk-41rt2@fale-wash-a6707.iam.gserviceaccount.com",
          // The private key must not be accessible on the client side.
          privateKey: FIREBASE_PRIVATE_KEY,
        },
        databaseURL:
          "firebase-adminsdk-41rt2@fale-wash-a6707.iam.gserviceaccount.com",
      },
      // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
      // useFirebaseAdminDefaultCredential: true,
      firebaseClientInitConfig: {
        apiKey: "AIzaSyBBphJkGU7TyD4KPARKfHCbzj6sbgFKOvw", // required
        authDomain: auth_uri,
        databaseURL: Realtime_Database,
        projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      },
      cookies: {
        name: "Fale Wash", // required
        // Keys are required unless you set `signed` to `false`.
        // The keys cannot be accessible on the client side.
        keys: [
          process.env.COOKIE_SECRET_CURRENT,
          process.env.COOKIE_SECRET_PREVIOUS,
        ],
        httpOnly: true,
        maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
        overwrite: true,
        path: "/",
        sameSite: "strict",
        secure: true, // set this to false in local (non-HTTPS) development
        signed: true,
      },
      onVerifyTokenError: (err) => {
        console.error(err);
      },
      onTokenRefreshError: (err) => {
        console.error(err);
      },
    });
};

export default initAuth;
