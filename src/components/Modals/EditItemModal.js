import React, { useState, useEffect, useRef } from 'react';
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
  const inputRef = useRef(null);

  useEffect(() => {
    setSelectedItem(props.item);
    setUpdatedItemName(props.item.name);
  }, [props.item]);

  useEffect(() => {
    if (props.showPopover && inputRef) {
      inputRef.current.setFocus();
    }
  }, [props.showPopover, inputRef]);

  const handleItemNameChange = event => {
    setUpdatedItemName(event.target.value);
  };

  const handleSave = () => {
    props.onSave(updatedItemName);
  };

  const handleKeyPress = event => {
    if (event.keyCode === 13) {
      handleSave();
    }
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
          onKeyUp={handleKeyPress}
        />
      </IonItem>
      <IonButton color="primary" className="m-t-md m-b-md" onClick={handleSave}>
        SAVE
      </IonButton>
    </IonPopover>
  );
};

EditItemModal.propTypes = {
  item: PropTypes.any.isRequired,
  showPopover: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};

export default EditItemModal;
