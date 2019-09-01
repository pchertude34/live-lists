import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';
import {
  IonContent,
  IonMenu,
  IonHeader,
  IonTitle,
  IonItem,
  IonIcon,
  IonList,
  IonListHeader,
  IonToolbar,
  IonMenuToggle,
  IonLabel
} from '@ionic/react';

import { logOut } from 'ionicons/icons';

const Menu = props => {
  return (
    <IonMenu side="end" contentId="main" id="main-menu">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonMenuToggle>
            <IonItem button onClick={props.signOut}>
              <IonIcon slot="start" icon={logOut} />
              <IonLabel>Logout</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Menu);
