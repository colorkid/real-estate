import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const initFirebaseApi = () => {
  const firebaseApp = initializeApp({
    apiKey: 'AIzaSyCT6H3x26DKe93UhDBQHltUMAXxkyWPx8M',
    authDomain: 'estate-33b02.firebaseapp.com',
    projectId: 'estate-33b02',
    storageBucket: 'estate-33b02.appspot.com',
    messagingSenderId: '192260133065',
    appId: '1:192260133065:web:bd1bbf2d7cabbaeab07d18',
  });

  const auth = getAuth(firebaseApp);

  return {
    auth,
  };
};

export const FirebaseApi = initFirebaseApi();
