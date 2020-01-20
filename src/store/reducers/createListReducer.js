const initialState = {
  list: {},
  isSaving: false,
  error: ''
};

const createListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LIST_SAVING':
      return { ...state, isSaving: true };
    case 'CREATE_LIST_SUCCESS':
      return { ...state, list: action.payload, isSaving: false };
    case 'CREATE_LIST_ERROR':
      return { ...state, error: action.error, isSaving: false };
    case 'REMOVE_LIST_SUCCESS':
      return { ...state, error: null, isSaving: false };
    case 'REMOVE_LIST_ERROR':
      return { ...state, error: action.error, isSaving: false };
    default:
      return state;
  }
};

export default createListReducer;
