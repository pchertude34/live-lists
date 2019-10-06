import React from 'react';
import PropTypes from 'prop-types';

import { IonAlert } from '@ionic/react';
import './Alerts.scss';

const RemoveListAlert = props => {
  const alertButtons = [
    {
      text: 'Remove',
      role: 'remove',
      cssClass: 'alert-delete-button',
      handler: () => props.onRemove(props.list.id)
    },
    {
      text: 'Cancel',
      role: 'canacel',
      cssClass: 'color-primary'
    }
  ];

  return (
    <IonAlert
      isOpen={props.showAlert}
      onDidDismiss={props.onDismiss}
      header={'Are you sure you want to remove the list?'}
      message={
        '</br>You can rejoin the list by entering the share code later.</br></br> <h2 class="color-secondary">123EH2</h2>'
      }
      buttons={alertButtons}
    ></IonAlert>
  );
};

RemoveListAlert.propTypes = {
  showAlert: PropTypes.bool.isRequired,
  list: PropTypes.any.isRequired,
  onRemove: PropTypes.func,
  onDismiss: PropTypes.func
};
export default RemoveListAlert;
