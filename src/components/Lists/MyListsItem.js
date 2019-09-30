import React from 'react';
import PropTypes from 'prop-types';
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
          <div className="item__initials">
            <div className="item__initials--text">{props.initials}</div>
          </div>
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

MyListsItem.propTypes = {
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string,
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default withRouter(MyListsItem);
