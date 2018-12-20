import firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);
export const database = firebase.database();
export const { auth } = firebase;
// export const database = firebase.database()

export default {
  auth,
  database,
};
