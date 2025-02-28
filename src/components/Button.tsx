'use client';

import { db } from '../utils/firebase-init';
import { collection, addDoc } from "firebase/firestore"; 

export default function Button() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      if (process.env.NEXT_PUBLIC_FIREBASE_DOCUMTENT_ID) {
        const docRef = await addDoc(collection(db,  process.env.NEXT_PUBLIC_FIREBASE_DOCUMTENT_ID ?? ""), {
          name: "Joe"
        });
        console.log("Document written with ID: ", docRef.id);
      }
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <button onClick={handleSubmit}>Test Firebase</button>
  );
}

