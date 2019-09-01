const initialState = {
  authError: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNIN_SUCCESS':
      console.log('signin success');
      return { ...state, authError: null };
    case 'SIGNIN_ERROR':
      console.log('signin error', action.error);
      return { ...state, authError: action.error };
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return { ...state, authError: null };
    case 'SIGNUP_ERROR':
      console.log('signup error', action.error);
      return { ...state, authError: action.error };
    case 'SIGNOUT_SUCCESS':
      console.log('signout success');
      return { ...state, authError: null };
    case 'SIGNOUT_ERROR':
      console.log('signout error', action.error);
      return { ...state, authError: action.errro };
    default:
      return state;
  }
};

export default authReducer;
