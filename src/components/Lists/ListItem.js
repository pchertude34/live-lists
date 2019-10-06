import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { IonItem, IonIcon, IonCheckbox, IonButton } from '@ionic/react';
import { trash, create } from 'ionicons/icons';
import ListItemSizeWrapper from './ListItemSizeWrapper';

import './MyListsItem.scss';

const ListItem = props => {
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

  const handleItemClicked = event => {
    if (
      event.target.id === 'delete-button' ||
      event.target.id === 'edit-button'
    )
      return;

    props.handleCheckClicked(!props.item.isChecked);
  };

  return (
    <ListItemSizeWrapper {...props} isLargeScreen={isLargeScreen}>
      <IonItem
        color="light"
        lines="none"
        button
        detail={false}
        onClick={handleItemClicked}
      >
        <IonCheckbox slot="start" checked={props.item.isChecked} />
        <div className="item__text">
          <div className="item__title">{props.item.name}</div>
          <div className="item__subtext">
            <i>some subtext</i>
          </div>
        </div>
        {/* If the screen is big, render buttons on the item for delete and edit\ */}
        {isLargeScreen && (
          <React.Fragment>
            <IonButton
              id="delete-button"
              fill="clear"
              slot="end"
              size="large"
              onClick={props.handleDeleteClicked}
              className="list-item__button"
            >
              <IonIcon icon={trash} color="danger" />
            </IonButton>
            <IonButton
              id="edit-button"
              fill="clear"
              slot="end"
              size="large"
              onClick={props.handleEditClicked}
              className="list-item__button"
            >
              <IonIcon icon={create} color="primary" />
            </IonButton>
          </React.Fragment>
        )}
      </IonItem>
    </ListItemSizeWrapper>
  );
};

ListItem.propTypes = {
  handleCheckClicked: PropTypes.func.isRequired,
  handleDeleteClicked: PropTypes.func.isRequired,
  handleEditClicked: PropTypes.func.isRequired
};

export default ListItem;
