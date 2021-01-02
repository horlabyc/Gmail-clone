import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageBoxIsOpen: false,
  },
  reducers: {
    openSendMessageBox: state => {
      state.sendMessageBoxIsOpen = true;
    },
    closeSendMessageBox: state => {
      state.sendMessageBoxIsOpen = false;
    }
  },
});

export const { openSendMessageBox, closeSendMessageBox } = mailSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
// export const incrementAsync = amount => dispatch => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount));
//   }, 1000);
// };

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectSendMessageBoxIsOpen = state => state.mail.sendMessageBoxIsOpen;

export default mailSlice.reducer;
