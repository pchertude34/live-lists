import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Plugins } from '@capacitor/core';
import { firestoreConnect } from 'react-redux-firebase';
import { removeList } from '../../store/actions/listActions';
import {
  IonHeader,
  IonContent,
  IonPage,
  IonFab,
  IonFabButton,
  IonIcon,
  IonList
} from '@ionic/react';
import { add } from 'ionicons/icons';

import Header from '../../components/Header/Header';
import MyListsItem from '../../components/Lists/MyListsItem';
import RemoveListAlert from '../../components/Alerts/RemoveListAlert';
import ShareListAlert from '../../components/Alerts/ShareListAlert';
import { MY_LISTS_STORE } from '../../constants';

const { Clipboard } = Plugins;

const Home = props => {
  const [showRemoveListAlert, setShowRemoveListAlert] = useState(false);
  const [showShareListAlert, setShowShareListAlert] = useState(false);
  const [selectedList, setSelectedList] = useState();

  /**
   * Propmt the user to remove the list when they click the delete button.
   * @param {any} list The list to potentially remove
   */
  const handleDeleteClicked = list => {
    setSelectedList(list);
    setShowRemoveListAlert(true);
  };

  const handleShareClicked = list => {
    setSelectedList(list);
    setShowShareListAlert(true);
  };

  const handleListRemove = listId => {
    props.removeList(listId);
  };

  const handleListCodeCopy = listCode => {
    console.log('Trying to copy', listCode);
    Clipboard.write({
      string: listCode
    });
  };

  /**
   * Handle what happens when the remove list alert is closed
   */
  const handleRemoveListAlertDismiss = () => {
    setShowRemoveListAlert(false);
  };

  const lists = (props.lists || []).map(list => {
    return (
      <MyListsItem
        key={list.id}
        listId={list.id}
        name={list.name}
        initials={list.initials}
        description={list.description}
        createdAt={list.createdAt}
        handleDeleteClicked={() => handleDeleteClicked(list)}
        handleShareClicked={() => handleShareClicked(list)}
      />
    );
  });

  return (
    <IonPage>
      <IonHeader>
        <Header title="My Lists" />
      </IonHeader>
      <IonContent>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <Link to={{ pathname: '/createlist' }}>
            <IonFabButton size="small">
              <IonIcon icon={add} color="light" />
            </IonFabButton>
          </Link>
        </IonFab>
        <IonList lines="none">{lists}</IonList>
        <RemoveListAlert
          showAlert={showRemoveListAlert}
          list={selectedList}
          onDismiss={handleRemoveListAlertDismiss}
          onRemove={handleListRemove}
        />
        <ShareListAlert
          showAlert={showShareListAlert}
          list={selectedList}
          onCopy={handleListCodeCopy}
          onDismiss={() => setShowShareListAlert(false)}
        />
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = (state, ownProps) => {
  const myLists = state.firestore.ordered[MY_LISTS_STORE];
  const auth = state.firebase.auth;
  return {
    lists: myLists,
    auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeList: listId => dispatch(removeList(listId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: 'lists',
      where: [['editors', 'array-contains', props.auth.uid]],
      orderBy: ['createdAt', 'desc'],
      storeAs: MY_LISTS_STORE
    }
  ])
)(Home);
