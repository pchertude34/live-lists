import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createList } from '../../store/actions/listActions';

import {
  IonPage,
  IonContent,
  IonLabel,
  IonItem,
  IonInput,
  IonTextarea,
  IonRow,
  IonCol,
  IonGrid,
  IonButton
} from '@ionic/react';
import Header from '../../components/Header/Header';

function parseInitials(name) {
  return name
    .split(' ')
    .map(word => word[0].toUpperCase())
    .slice(0, 2)
    .join('');
}

const CreateList = props => {
  const [listName, setListName] = useState('');
  const [listDescription, setListDescription] = useState('');

  const handleCancelClicked = () => {
    props.history.goBack();
  };

  const handleCreateListClicked = () => {
    const list = {
      name: listName,
      description: listDescription,
      initials: parseInitials(listName)
    };

    props.createList(list).then(() => {
      props.history.goBack();
    });
  };

  const handleListNameChange = event => {
    setListName(event.target.value);
  };

  const handleListDescriptionChange = event => {
    setListDescription(event.target.value);
  };

  return (
    <IonPage>
      <Header title="Create List" hasBackButton />
      <IonContent>
        <form>
          <IonItem lines="full m-b-md">
            <IonLabel color="medium" position="stacked">
              List Name
            </IonLabel>
            <IonInput
              autofocus
              inputMode="text"
              type="text"
              maxlength={56}
              required
              placeholder="Enter list description"
              onIonChange={handleListNameChange}
            ></IonInput>
          </IonItem>
          <IonItem lines="full m-b-lg">
            <IonLabel color="medium" position="stacked">
              Description
            </IonLabel>
            <IonTextarea
              spellCheck
              maxlength={256}
              rows={6}
              placeholder="Enter list description"
              onIonChange={handleListDescriptionChange}
            ></IonTextarea>
          </IonItem>

          <IonGrid>
            <IonRow className="m-b-md">
              <IonCol sizeSm="5" sizeMd="3" offsetMd="3" className="p-sm">
                <IonButton
                  color="light"
                  expand="block"
                  onClick={handleCancelClicked}
                >
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol sizeSm="5" sizeMd="3" className="p-sm">
                <IonButton
                  color="primary"
                  expand="block"
                  onClick={handleCreateListClicked}
                >
                  Create
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </form>
      </IonContent>
    </IonPage>
  );
};

const mapStateToProps = state => {
  return {
    createList: state.createList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createList: list => dispatch(createList(list))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CreateList));
