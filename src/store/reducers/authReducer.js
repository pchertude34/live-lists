const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return { ...state, authError: null };
    case 'SIGNUP_ERROR':
      console.log('signup error', action.error);
      return { ...state, authError: action.error };
    default:
      return state;
  }
};

export default authReducer;
