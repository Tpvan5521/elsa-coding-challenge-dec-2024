import { FirebaseOptions, initializeApp } from "firebase/app";
import { envConfig } from "./env.config";
import { getDatabase } from "firebase/database";

const firebaseConfig: FirebaseOptions = {
  apiKey: envConfig.FIREBASE_API_KEY,
  authDomain: envConfig.FIREBASE_AUTH_DOMAIN,
  projectId: envConfig.FIREBASE_PROJECT_ID,
  storageBucket: envConfig.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envConfig.FIREBASE_MESSAGING_SENDER_ID,
  appId: envConfig.FIREBASE_APP_ID,
  databaseURL: envConfig.FIREBASE_API_URL,
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
