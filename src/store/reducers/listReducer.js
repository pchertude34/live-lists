const initialState = {
  items: {},
  error: null
};

const createListItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_LIST_ITEM_SUCCESS':
      return { ...state, items: action.payload, error: null };
    case 'CREATE_LIST_ITEM_ERROR':
      return { ...state, error: action.error };
    case 'EDIT_LIST_ITEM_SUCCESS':
      return { ...state, items: action.payload, error: null };
    case 'EDIT_LIST_ITEM_ERROR':
      return { ...state, error: action.error };
    case 'CHECK_LIST_ITEM_SUCCESS':
      console.log(state);
      return { ...state, error: null };
    case 'CHECK_LIST_ITEM_ERROR':
      return { ...state, error: action.error };
    case 'DELETE_LIST_ITEM_SUCCESS':
      return { ...state, error: null };
    case 'DELETE_LIST_ITEM_ERROR':
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export default createListItemReducer;
