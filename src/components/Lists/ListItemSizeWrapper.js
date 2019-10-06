import React from 'react';
import {
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonIcon
} from '@ionic/react';
import { trash, create } from 'ionicons/icons';

/**
 * Conditionally wrap the child component for small screen sizes.
 * Return the component by itself for large screen sizes
 * @param {any} props Props from the ListItem component.
 */
const ListItemSizeWrapper = props => {
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

export default ListItemSizeWrapper;
