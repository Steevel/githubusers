import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC25AdopTJtTIAMI2CQA9oUn4HV_sS3_60",
	authDomain: "gitapp-abb4e.firebaseapp.com",
	projectId: "gitapp-abb4e",
	storageBucket: "gitapp-abb4e.appspot.com",
	messagingSenderId: "809732647311",
	appId: "1:809732647311:web:bfb41554430af7167683fa",
	measurementId: "G-LRRGYH38Z4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
