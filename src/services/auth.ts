import { FirebaseApi } from '../firebaseConnector';
import {
  createUserWithEmailAndPassword,
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export type userDataRequestType = {
  email: string;
  password: string;
};

const AUTH_SERVICE = {
  signIn: (data: userDataRequestType): Promise<UserCredential> => {
    const { email, password } = data;
    return signInWithEmailAndPassword(FirebaseApi.auth, email, password);
  },

  singUp: (data: userDataRequestType): Promise<UserCredential> => {
    const { email, password } = data;
    return createUserWithEmailAndPassword(FirebaseApi.auth, email, password);
  },

  logOut: (): Promise<void> => {
    return signOut(FirebaseApi.auth);
  },
};

export default AUTH_SERVICE;
