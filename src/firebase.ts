import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";

// aded keys (I will delete project after a day)
const firebaseConfig = {
  apiKey: "AIzaSyA1zH75ItI55lkUYp6p1wPQL2ijqhCp0_w",
  authDomain: "ott-clone-c322e.firebaseapp.com",
  projectId: "ott-clone-c322e",
  storageBucket: "ott-clone-c322e.appspot.com",
  messagingSenderId: "410768470036",
  appId: "1:410768470036:web:57f350c7fa897e85933701",
  measurementId: "G-538V2C5XWL",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
