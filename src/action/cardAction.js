export const setCardLimit = data => {
  return {
    type: 'CARD_LIMIT',
    payload: data,
  };
};
export const setCardLimitSuccess = data => {
  return {
    type: 'CARD_LIMIT_SUCCESS',
    payload: data,
  };
};
