export const createList = list => {
  console.log('createList action');

  return (dispatch, getState, { getFirebase, getFirestore }) => {
    return Promise.resolve('yay');
  };
};
