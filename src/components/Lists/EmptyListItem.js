import React from 'react';
import { IonItem } from '@ionic/react';
import PropTypes from 'prop-types';

import './MyListsItem.scss';

const EmptyListItem = props => {
  return (
    <IonItem color="light" lines="none">
      <div className="list-item__empty p-md text-center">{props.children}</div>
    </IonItem>
  );
};

EmptyListItem.propTypes = {
  children: PropTypes.any.isRequired
};

export default EmptyListItem;
