import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageBoxIsOpen: false,
    sendMessageBoxIsMinimized: false,
    selectedMail: null
  },
  reducers: {
    openSendMessageBox: state => {
      state.sendMessageBoxIsOpen = true;
      state.sendMessageBoxIsMinimized = false;
    },
    closeSendMessageBox: state => {
      state.sendMessageBoxIsOpen = false;
      state.sendMessageBoxIsMinimized = false;
    },
    minimizeSendMessageBox: state => {
      state.sendMessageBoxIsMinimized = true;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload
    }
  },
});

export const { openSendMessageBox, closeSendMessageBox, minimizeSendMessageBox, selectMail } = mailSlice.actions;
export const selectSendMessageBoxIsOpen = state => state.mail.sendMessageBoxIsOpen;
export const selectSendMessageBoxIsMinimized = state => state.mail.sendMessageBoxIsMinimized;
export const selectOpenMail = state => state.mail.selectedMail;

export default mailSlice.reducer;
