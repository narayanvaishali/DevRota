import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);
export const database = firebase.database();
export const { auth } = firebase;

export const { LOCAL, SESSION, NONE } = auth.Auth.Persistence;

export const getUser = () => new Promise((resolve) => {
  auth().onAuthStateChanged((user) => {
    resolve(user);
  });
});

export default {
  auth,
  database,
  getUser,
};
