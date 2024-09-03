import { createSlice } from '@reduxjs/toolkit';

// Create a slice for managing modal state
const userProgressSlice = createSlice({
  name: 'userProgress',
  initialState: {
    modalType: '', // Track the type of modal (e.g., 'Add', 'Edit')
  },
  reducers: {
    showAddModal: (state) => {
      state.modalType = 'Add'; // Set the modal type to 'Add'
    },
    showEditModal: (state) => {
      state.modalType = 'Edit'; // Set the modal type to 'Edit'
    },
    hideModal: (state) => {
      state.modalType = ''; // Clear the modal type to hide the modal
    },
  },
});

// Export actions
export const { showAddModal, showEditModal, hideModal } = userProgressSlice.actions;

// Export reducer
export default userProgressSlice.reducer;
