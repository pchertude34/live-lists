import React, { useState, useEffect, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  IonPopover,
  IonInput,
  IonButton,
  IonItem,
  IonText
} from '@ionic/react';

import './EditModal.scss';

const EditItemModal = props => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [updatedItemName, setUpdatedItemName] = useState('');
  // const [inputField, setInputField] = useState();
  const inputRef = useRef(null);
  // const inputRef = useCallback(node => {
  //   console.log('here');
  //   console.log(node.setFocus());
  // });

  useEffect(() => {
    setSelectedItem(props.item);
    setUpdatedItemName(props.item.name);
  }, [props.item]);

  useEffect(() => {
    if (props.showPopover && inputRef) {
      console.log('itemInput', inputRef);
      inputRef.current.setFocus();
    }
  }, [props.showPopover, inputRef]);

  const handleItemNameChange = event => {
    setUpdatedItemName(event.target.value);
  };

  const handleOnFocus = e => {
    console.log('onFocus');
    console.log('e', e);
  };

  return (
    <IonPopover
      isOpen={props.showPopover}
      onDidDismiss={props.dismiss}
      cssClass="modal"
    >
      <IonText>
        <h4>Edit Item</h4>
      </IonText>
      <IonItem className="m-r-md">
        <IonInput
          // autoFocus
          value={updatedItemName}
          onIonChange={handleItemNameChange}
          ref={inputRef}
          onFocus={handleOnFocus}
        />
      </IonItem>
      <IonButton color="primary" className="m-t-md m-b-md">
        SAVE
      </IonButton>
    </IonPopover>
  );
};

EditItemModal.propTypes = {
  item: PropTypes.any.isRequired,
  showPopover: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired
};

export default EditItemModal;
