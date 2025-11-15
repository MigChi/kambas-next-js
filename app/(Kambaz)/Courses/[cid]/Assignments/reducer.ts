/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload: serverAssignment }) => {
      state.assignments = [...state.assignments, serverAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (asmt: any) => asmt._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: updated }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === updated._id ? updated : asmt
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === assignmentId ? { ...asmt, editing: true } : asmt
      );
    },

    cancelEditAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === assignmentId ? { ...asmt, editing: false } : asmt
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  cancelEditAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
