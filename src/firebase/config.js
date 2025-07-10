import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAlQD03ifLdCSCxCWKHC4HSjcRpNe6laeE",
  authDomain: "samuraistore-15c3f.firebaseapp.com",
  projectId: "samuraistore-15c3f",
  storageBucket: "samuraistore-15c3f.firebasestorage.app",
  messagingSenderId: "402027006070",
  appId: "1:402027006070:web:7b9c9bd4cb465da216f757"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

export async function getItems() {
  const querySnapshot = await getDocs(collection(db,"items"));
  querySnapshot.forEach(doc => console.log(`${doc.id} => ${doc.data().nombre} `))
}
