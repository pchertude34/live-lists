export const createList = list => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    dispatch({ type: 'CREATE_LIST_SAVING', payload: list });

    return firestore
      .collection('lists')
      .add({
        ...list,
        createdAt: new Date(),
        editors: [userId]
      })
      .then(() => {
        dispatch({ type: 'CREATE_LIST_SUCCESS', payload: list });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_LIST_ERROR', error });
      });
  };
};

export const createListItem = (item, listId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    return firestore
      .collection('listItems')
      .doc(listId)
      .set(item, { merge: true })
      .then(() => {
        dispatch({ type: 'CREATE_LIST_ITEM_SUCCESS', payload: item });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_LIST_ITEM_ERROR', error });
      });
  };
};

export const checkListItem = (listId, itemId, isChecked) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    return firestore
      .collection('listItems')
      .doc(listId)
      .update({
        [`${itemId}.isChecked`]: isChecked
      })
      .then(() => {
        dispatch({
          type: 'CHECK_LIST_ITEM_SUCCESS',
          payload: isChecked
        });
      })
      .catch(error => {
        dispatch({ type: 'CHECK_LIST_ITEM_ERROR', error });
      });
  };
};
