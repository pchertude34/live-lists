import React from 'react';
import PropTypes from 'prop-types';
import {
  IonItem,
  IonButton,
  IonIcon,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption
} from '@ionic/react';
import { trash, create } from 'ionicons/icons';

const ListItem = props => {
  return (
    <IonItemSliding>
      <IonItemOptions>
        <IonItemOption
          color="danger"
          type="button"
          style={{ padding: '.8rem' }}
          onClick={props.handleDeleteClicked}
        >
          <IonIcon slot="icon-only" icon={trash} />
        </IonItemOption>
        <IonItemOption
          type="button"
          style={{ padding: '.8rem' }}
          onClick={props.handleEditClicked}
        >
          <IonIcon slot="icon-only" icon={create} />
        </IonItemOption>
      </IonItemOptions>
      <IonItem
        color="light"
        lines="none"
        button
        detail={false}
        onClick={() => props.handleCheckClicked(!props.item.isChecked)}
      >
        <IonCheckbox slot="start" checked={props.item.isChecked} />
        <div className="item__text">
          <div className="item__title">{props.item.name}</div>
          <div className="item__subtext">
            <i>some subtext</i>
          </div>
        </div>
      </IonItem>
    </IonItemSliding>
  );
};

ListItem.propTypes = {
  handleCheckClicked: PropTypes.func.isRequired,
  handleDeleteClicked: PropTypes.func.isRequired,
  handleEditClicked: PropTypes.func.isRequired
};

export default ListItem;
