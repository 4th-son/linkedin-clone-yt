import  {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {  getFirestore, } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD8zUClDwWguripPmXesHXQMhIzkWjKspU",
  authDomain: "linkedin-clone-yt-f8211.firebaseapp.com",
  projectId: "linkedin-clone-yt-f8211",
  storageBucket: "linkedin-clone-yt-f8211.appspot.com",
  messagingSenderId: "864359398936",
  appId: "1:864359398936:web:e85963281dc815c8500d6d"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export { db, auth}; 