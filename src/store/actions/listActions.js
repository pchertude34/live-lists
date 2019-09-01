export const createList = list => {
  console.log('createList action');

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    dispatch({ type: 'CREATE_LIST_SAVING', payload: list });

    return firestore
      .collection('lists')
      .add({
        ...list,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_LIST_SUCCESS', payload: list });
      })
      .catch(error => {
        dispatch({ type: 'CREATE_LIST_ERROR', error });
      });
  };
};
