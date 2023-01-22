import { getDocs, collection } from '@firebase/firestore';
import { db } from '../config/firebase';

export const getFirestoreRecords = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const records = querySnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return records;
  } catch (err) {
    return err.message;
  }
};

export const sendEmail = async (emailData) => {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(emailData),
    });

    const { sent } = await res.json();

    return sent;
  } catch (err) {
    return err.message;
  }
};
