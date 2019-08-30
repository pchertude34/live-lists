import React from 'react';
import {
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';

import './SignIn.scss';

const SignIn = () => {
  return (
    <IonContent>
      <div className="signin-header">
        <div className="signin-header__logo-container">
          <img
            src="/assets/img/logo-full.png"
            alt="Live Lists"
            className="signin-header__logo"
          />
        </div>
      </div>
      <form>
        <IonGrid>
          <IonRow className="ion-padding-bottom">
            {/* Fields for mobile */}
            <IonCol sizeSm>
              <IonItem detailIcon="ios-arrow-forward">
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-bottom">
            <IonCol sizeSm>
              <IonItem detailIcon="ios-arrow-forward">
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password"></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-bottom">
            <IonCol sizeSm>
              <button className="signin-button signin-button-gradient">
                Login
              </button>
            </IonCol>
          </IonRow>
        </IonGrid>
      </form>
    </IonContent>
  );
};

export default SignIn;
