
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCQRDwTJYDbuE0zbXVgJ7OFl2w_ivZQ5Yg",
  authDomain: "todoapp-f8fba.firebaseapp.com",
  projectId: "todoapp-f8fba",
  storageBucket: "todoapp-f8fba.appspot.com",
  messagingSenderId: "460060337082",
  appId: "1:460060337082:web:9b41e23f52bf6faf93f383"
};


const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app);


export { dataBase, app };