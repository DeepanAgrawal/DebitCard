const INTIAL_STATE = {
  cardLimitData: null,
};

export default function address(state = INTIAL_STATE, action) {
  switch (action.type) {
    case 'CARD_LIMIT':
      return {
        ...state,
        loading: false,
        error: null,
        cardLimitData: action.payload,
      };
    case 'CARD_LIMIT_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
        cardLimitData: action.payload,
      };
    default:
      return state;
  }
}
