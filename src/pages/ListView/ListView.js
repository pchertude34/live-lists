import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createListItem, checkListItem } from '../../store/actions/listActions';
import uuid from 'uuid/v4';
import Header from '../../components/Header/Header';
import {
  IonPage,
  IonContent,
  IonItem,
  IonInput,
  IonList,
  IonIcon,
  IonButton,
  IonHeader
} from '@ionic/react';
import { add } from 'ionicons/icons';

import ListItem from '../../components/Lists/ListItem';

const ListView = props => {
  const [newListItem, setNewListItem] = useState('');

  const canSave = () => {
    return newListItem.trim().length > 0;
  };

  const handleSaveItemClicked = () => {
    const trimmedNewListItem = newListItem.trim();

    // If there are no actual letters in the list item, don't save it
    if (trimmedNewListItem.length === 0) return;

    const listId = props.match.params.listId;
    const itemId = uuid();
    const listItemToAdd = {
      [itemId]: { name: newListItem, isChecked: false }
    };

    props.createListItem(listItemToAdd, listId);
    setNewListItem('');
  };

  const handleCheckClicked = (itemId, isChecked) => {
    const listId = props.match.params.listId;
    props.checkListItem(listId, itemId, isChecked);
  };

  const listItems = Object.keys(props.listItems || {}).map(itemId => {
    // console.log('itemId', itemId);
    // console.log('props.listItems', props.listItems);
    return (
      // <div
      <ListItem
        key={itemId}
        item={props.listItems[itemId]}
        handleCheckClicked={isChecked => handleCheckClicked(itemId, isChecked)}
      />
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <Header title={props.list.name} hasBackButton />
        <IonItem lines="none">
          <IonInput
            placeholder="Add Item to the list"
            value={newListItem}
            maxlength={85}
            onIonChange={event => setNewListItem(event.target.value)}
          ></IonInput>
          <IonButton
            fill="clear"
            onClick={handleSaveItemClicked}
            disabled={!canSave()}
          >
            <IonIcon
              style={{ fontSize: '4rem', padding: '8px' }}
              icon={add}
              color="primary"
            />
          </IonButton>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonList>
          {listItems ? (
            listItems
          ) : (
            <IonItem lines="none" color="light">
              There are not items in the list yet
            </IonItem>
          )}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const listId = ownProps.match.params.listId;

  return {
    list: state.firestore.data.lists ? state.firestore.data.lists[listId] : {},
    listItems: state.firestore.data.listItems
      ? state.firestore.data.listItems[listId]
      : {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createListItem: (listItem, listId) =>
      dispatch(createListItem(listItem, listId)),
    checkListItem: (listId, listItem, isChecked) =>
      dispatch(checkListItem(listId, listItem, isChecked))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(props => [
    {
      collection: 'lists',
      doc: props.match.params.listId
    },
    {
      collection: 'listItems',
      doc: props.match.params.listId
    }
  ])
)(ListView);
