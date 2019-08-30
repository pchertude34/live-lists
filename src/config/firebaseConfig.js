import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDdSIh62kC_K1qHpCkbrmI9m7opF8mP7BQ',
  authDomain: 'livelists-b3012.firebaseapp.com',
  databaseURL: 'https://livelists-b3012.firebaseio.com',
  projectId: 'livelists-b3012',
  storageBucket: 'livelists-b3012.appspot.com',
  messagingSenderId: '802577220437',
  appId: '1:802577220437:web:7fce0849ed54ddd7'
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
