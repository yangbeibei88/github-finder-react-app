export const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET ALERT":
      return action.payload;
    case "REMOVE ALERT":
      return null;
    default:
      state;
  }
};
