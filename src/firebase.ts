import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDRD2LESwUam8imeByAeeD14hh8rZub1sA",
  authDomain: "cartwheel-ranch.firebaseapp.com",
  projectId: "cartwheel-ranch",
  storageBucket: "cartwheel-ranch.appspot.com",
  messagingSenderId: "1007896221918",
  appId: "1:1007896221918:web:9393ba2373cd6c08e40a4f"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
