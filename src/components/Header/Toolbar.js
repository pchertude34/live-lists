import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import {
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonMenuButton
} from '@ionic/react';

const Toolbar = () => {
  return (
    <IonToolbar color="primary">
      <IonButtons slot="start">
        <IonBackButton defaultHref="/" text="" />
      </IonButtons>
      <IonButtons slot="end">
        <IonMenuButton color="light" autoHide={false} menuId="main" />
      </IonButtons>
    </IonToolbar>
  );
};

export default withRouter(Toolbar);
