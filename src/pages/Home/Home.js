import React from 'react';
import { Link } from 'react-router-dom';
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

const Home = () => {
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

export default Home;
