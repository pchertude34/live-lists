import React from 'react';
import { withRouter } from 'react-router-dom';
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

const CreateList = props => {
  const handleCancelClicked = () => {
    console.log('handleCancelClicked');
    props.history.goBack();
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
                <IonButton color="primary" expand="block">
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

export default withRouter(CreateList);
