import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  IonItem,
  IonIcon,
  IonCheckbox,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonButton
} from '@ionic/react';
import { trash, create } from 'ionicons/icons';

import './MyListsItem.scss';

const ListItem = props => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
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
    <SizeWrapper {...props} isLargeScreen={isLargeScreen}>
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
    </SizeWrapper>
  );
};

/**
 * Conditionally wrap the child component for small screen sizes.
 * Return the component by itself for large screen sizes
 * @param {any} props Props from the ListItem component.
 */
const SizeWrapper = props => {
  return !props.isLargeScreen
    ? listWrapper(props.children, props)
    : props.children;
};

/**
 * Add IonItemSliding the the Child Component
 * @param {React.Component} ChildComponent The component to render
 * @param {any} props Props that were passed to the child component
 */
function listWrapper(ChildComponent, props) {
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
      {ChildComponent}
    </IonItemSliding>
  );
}

ListItem.propTypes = {
  handleCheckClicked: PropTypes.func.isRequired,
  handleDeleteClicked: PropTypes.func.isRequired,
  handleEditClicked: PropTypes.func.isRequired
};

export default ListItem;
