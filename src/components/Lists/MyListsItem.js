import React from 'react';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import { IonItem, IonAvatar, IonIcon, IonButton } from '@ionic/react';
import { more } from 'ionicons/icons';

import './MyListsItem.scss';

const MyListsItem = props => {
  const handleMoreClicked = () => {};

  const handleItemClicked = () => {
    props.history.push(`/list/${props.listId}`);
  };

  return (
    <div>
      <div className="item__header">
        <i>
          {props.updated
            ? `Last updated ${moment(props.updatedAt.toDate()).fromNow()}`
            : `Created ${moment(props.createdAt.toDate()).fromNow()}`}
        </i>
      </div>
      <IonItem color="light" button detail={false} onClick={handleItemClicked}>
        <IonAvatar slot="start">
          <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
        </IonAvatar>
        <div className="item__text">
          <div className="item__title">{props.name}</div>
          <div className="item__description">{props.description}</div>
          {/* Shared with subtext */}
          {/* <div className="item__subtext">
            <i>Shared with Alyssa and 2 others</i>
          </div> */}
        </div>
        <IonButton
          fill="clear"
          slot="end"
          size="large"
          onClick={handleMoreClicked}
        >
          <IonIcon icon={more} />
        </IonButton>
      </IonItem>
    </div>
  );
};

export default withRouter(MyListsItem);
