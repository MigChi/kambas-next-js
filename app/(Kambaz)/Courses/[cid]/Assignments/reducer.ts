/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { assignments as dbAssignments } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: dbAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: a }) => {
      const newAssignment: any = {
        _id: uuidv4(),
        title: a.title ?? "New Assignment",
        description: a.description ?? "",
        course: a.course, 
        points: a.points ?? 100,
        dueDate: a.dueDate ?? null,
        availableFrom: a.availableFrom ?? null,
        availableUntil: a.availableUntil ?? null,
        ...a,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (asmt: any) => asmt._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: a }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === a._id ? a : asmt
      ) as any;
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === assignmentId ? { ...asmt, editing: true } : asmt
      ) as any;
    },
    cancelEditAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((asmt: any) =>
        asmt._id === assignmentId ? { ...asmt, editing: false } : asmt
      ) as any;
    },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
  cancelEditAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
