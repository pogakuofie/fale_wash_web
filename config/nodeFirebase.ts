import * as admin from "firebase-admin";

let serviceAccount = require("../fale-wash-a6707-firebase-adminsdk-41rt2-333af40c41.json");

if (!admin.apps.length)
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });

export default admin;
