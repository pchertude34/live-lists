import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router-dom';

import { IonItem, IonAvatar, IonIcon, IonButton } from '@ionic/react';
import { more } from 'ionicons/icons';
import ListItemSizeWrapper from './ListItemSizeWrapper';

import './MyListsItem.scss';

const MyListsItem = props => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);

    return function cleanup() {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  const updateBreakpoint = () => {
    window.innerWidth > 576 ? setIsLargeScreen(true) : setIsLargeScreen(false);
  };

  const handleMoreClicked = () => {};

  const handleItemClicked = event => {
    console.log('event.target', event.target);
    if (event.target.id !== 'edit-button') {
      props.history.push(`/list/${props.listId}`);
    }
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
      <ListItemSizeWrapper {...props} isLargeScreen={isLargeScreen}>
        <IonItem
          color="light"
          button
          detail={false}
          onClick={handleItemClicked}
        >
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
          {/* <IonButton
            id="edit-button"
            fill="clear"
            slot="end"
            size="large"
            onClick={handleMoreClicked}
            className="list-item__button"
          >
            <IonIcon icon={more} mode="md" />
          </IonButton> */}
        </IonItem>
      </ListItemSizeWrapper>
    </div>
  );
};

MyListsItem.propTypes = {
  createdAt: PropTypes.object.isRequired,
  updatedAt: PropTypes.string,
  initials: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleDeleteClicked: PropTypes.func.isRequired
};

export default withRouter(MyListsItem);
