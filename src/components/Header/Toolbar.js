import React from 'react';
import PropTypes from 'prop-types';

import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonMenuButton
} from '@ionic/react';

const Toolbar = props => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonButtons slot="start">
          {props.hasBackButton && <IonBackButton defaultHref="/" text="" />}
        </IonButtons>
        <IonButtons slot="end">
          <IonMenuButton color="light" autoHide={false} />
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

Toolbar.propTypes = {
  hasBackButton: PropTypes.bool
};

export default Toolbar;
