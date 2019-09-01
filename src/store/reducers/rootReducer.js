import { combineReducers } from 'redux';
import createListReducer from './createListReducer';
import authReducer from './authReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  createList: createListReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
