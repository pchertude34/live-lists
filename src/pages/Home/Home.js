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

import Header from '../../components/Header/Header';
import MyLists from '../../components/Lists/MyLists';

const Home = props => {
  console.log('Home props', props);
  return (
    <IonPage>
      <IonHeader>
        <Header title="My Lists" />
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <Link to={{ pathname: '/createlist' }}>
            <IonFabButton size="small">
              <IonIcon name="add" color="light" />
            </IonFabButton>
          </Link>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const lists = state.firestore.data.lists;
  const auth = state.firebase.auth;
  return {
    lists: lists,
    auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    {
      collection: 'lists',
      where: [['editors', 'array-contains', props.auth.uid]]
    }
  ])
)(Home);
