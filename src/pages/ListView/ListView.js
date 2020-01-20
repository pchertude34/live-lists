import React, { useState, useRef } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded } from 'react-redux-firebase';
import {
  createListItem,
  editListItem,
  checkListItem,
  deleteListItem
} from '../../store/actions/listActions';
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
import EmptyListItem from '../../components/Lists/EmptyListItem';
import EditItemModal from '../../components/Modals/EditItemModal';
import { MY_LISTS_STORE } from '../../constants';

const ListView = props => {
  const [newListItem, setNewListItem] = useState('');
  const [showPopover, setShowPopover] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const listRef = useRef(null);

  const canSave = () => {
    return newListItem.trim().length > 0;
  };

  const handleSaveNewListItem = () => {
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

  const handleDeleteClicked = itemId => {
    const listId = props.match.params.listId;
    props.deleteListItem(listId, itemId);
  };

  const handleEditClicked = itemId => {
    setShowPopover(true);
    setSelectedItemId(itemId);
  };

  const handleEditSaveClicked = (itemId, updatedName) => {
    const trimmedName = updatedName.trim();

    // If there are no actual letters, don't save.
    if (trimmedName.length === 0) return;

    const updatedListItem = {
      [itemId]: { ...props.listItems[itemId], name: trimmedName }
    };
    const listId = props.match.params.listId;
    props
      .editListItem(listId, updatedListItem)
      .then(() => {
        setShowPopover(false);
      })
      .catch(() => {
        listRef.current.closeSlidingItems();
        setShowPopover(false);
      });
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      handleSaveNewListItem();
    }
  };

  const listItems = Object.keys(props.listItems || {}).map(itemId => {
    return (
      <ListItem
        key={itemId}
        item={props.listItems[itemId]}
        handleCheckClicked={isChecked => handleCheckClicked(itemId, isChecked)}
        handleEditClicked={() => handleEditClicked(itemId)}
        handleDeleteClicked={() => handleDeleteClicked(itemId)}
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
            onKeyUp={handleKeyPress}
          ></IonInput>
          <IonButton
            fill="clear"
            onClick={handleSaveNewListItem}
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
        <EditItemModal
          item={(props.listItems && props.listItems[selectedItemId]) || {}}
          showPopover={showPopover}
          onSave={updatedName =>
            handleEditSaveClicked(selectedItemId, updatedName)
          }
          dismiss={() => setShowPopover(false)}
        />
        {isLoaded(props.listItems) && !listItems.length > 0 ? (
          <EmptyListItem>There are no items in this list yet.</EmptyListItem>
        ) : (
          <IonList ref={listRef}>{listItems}</IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const listId = ownProps.match.params.listId;

  return {
    list: state.firestore.data[MY_LISTS_STORE]
      ? state.firestore.data[MY_LISTS_STORE][listId]
      : {},
    listItems: state.firestore.data.listItems
      ? state.firestore.data.listItems[listId]
      : {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createListItem: (listItem, listId) =>
      dispatch(createListItem(listItem, listId)),
    editListItem: (listId, listItem) =>
      dispatch(editListItem(listId, listItem)),
    checkListItem: (listId, listItem, isChecked) =>
      dispatch(checkListItem(listId, listItem, isChecked)),
    deleteListItem: (listId, itemId) => dispatch(deleteListItem(listId, itemId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'lists',
      doc: props.match.params.listId
    },
    {
      collection: 'listItems',
      doc: props.match.params.listId,
      queryParams: ['name']
    }
  ])
)(ListView);
