import { combineReducers } from 'redux';
import { firestoreReducer } from 'react-redux-firebase';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
