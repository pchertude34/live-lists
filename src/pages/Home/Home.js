import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {
  IonHeader,
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react';
import { add } from 'ionicons/icons';

import Header from '../../components/Header/Header';
import MyLists from '../../components/Lists/MyLists';
import { MY_LISTS_STORE } from '../../constants';

const Home = props => {
  console.log('Home props', props.lists);

  return (
    <IonPage>
      <IonHeader>
        <Header title="My Lists" />
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <Link to={{ pathname: '/createlist' }}>
            <IonFabButton size="small">
              <IonIcon icon={add} color="light" />
            </IonFabButton>
          </Link>
        </IonFab>
        <MyLists lists={props.lists} />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const myLists = state.firestore.ordered[MY_LISTS_STORE];
  const auth = state.firebase.auth;
  return {
    lists: myLists,
    auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => {
    console.log('props', props);
    return [
      {
        collection: 'lists',
        where: [['editors', 'array-contains', props.auth.uid]],
        storeAs: MY_LISTS_STORE
      }
    ];
  })
)(Home);
