import { makeAutoObservable } from 'mobx';
import AUTH_SERVICE, { userDataRequestType } from '../services/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { FirebaseApi } from '../firebaseConnector';
import { message } from 'antd';

interface IUser {
  [key: string]: any;
}

class Auth {
  isFetching = false;
  error = {};
  user = {} as IUser;

  constructor() {
    makeAutoObservable(this);

    this.isFetching = true;
    onAuthStateChanged(FirebaseApi.auth, (user) => {
      !!user && this.setUser(user);
      this.isFetching = false;
    });
  }

  get isAuthed(): boolean {
    return !!Object.keys(this.user).length;
  }

  setUser(user: IUser) {
    this.user = user;
  }

  async singUp(data: userDataRequestType) {
    this.isFetching = true;
    try {
      const response = await AUTH_SERVICE.singUp(data);
      this.setUser(response?.user);
    } catch (e: any) {
      message.error(e.message);
      this.error = e;
    } finally {
      this.isFetching = false;
    }
  }

  async signIn(data: userDataRequestType) {
    this.isFetching = true;
    try {
      const response = await AUTH_SERVICE.signIn(data);
      this.setUser(response?.user);
    } catch (e: any) {
      message.error(e.message);
      this.error = e;
    } finally {
      this.isFetching = false;
    }
  }

  async logOut() {
    this.isFetching = true;
    try {
      await AUTH_SERVICE.logOut();
      this.setUser({});
    } catch (e: any) {
      message.error(e.message);
      this.error = e;
    } finally {
      this.isFetching = false;
    }
  }
}

export default new Auth();
