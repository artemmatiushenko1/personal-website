import { getDocs, collection } from '@firebase/firestore';
import { db } from 'firebase/config';
import emailjs from '@emailjs/browser';

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

export const sendEmail = async (emailTeamplate) => {
  try {
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
      emailTeamplate,
      process.env.NEXT_PUBLIC_EMAIL_JS_USER_ID
    );
  } catch (err) {
    return err.message;
  }
};
