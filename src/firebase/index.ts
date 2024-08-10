import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDElK_ZGlpLr42MHCzRNXyljoT7NeYyHfU",
  authDomain: "gym-training-9dffe.firebaseapp.com",
  projectId: "gym-training-9dffe",
  storageBucket: "gym-training-9dffe.appspot.com",
  messagingSenderId: "1031491044877",
  appId: "1:1031491044877:web:791afc9649944af2413744"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }