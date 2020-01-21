import React from 'react';
import PropTypes from 'prop-types';

import { IonAlert } from '@ionic/react';
import './Alerts.scss';

const ShareListAlert = props => {
  const alertButtons = [
    {
      text: 'Copy',
      role: 'copy',
      handler: () => props.onCopy(props.list.id)
    }
  ];
  return (
    <IonAlert
      isOpen={props.showAlert}
      onDidDismiss={props.onDismiss}
      header={`Share ${props.list ? props.list.name : ''}`}
      message={`</br>Add editor by sharing this code:</br></br> <h2 class="color-secondary">123EH2</h2>`}
      buttons={alertButtons}
    />
  );
};

ShareListAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  list: PropTypes.any,
  onCopy: PropTypes.func,
  onDismiss: PropTypes.func.isRequired
};

export default ShareListAlert;
