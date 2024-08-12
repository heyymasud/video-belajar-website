import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { getCourses } from "../../services/courseService";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses",
  async () => {
    const response = await getCourses();
    return response;
  }
);

const courseSlice = createSlice({
  name: "courses",
  initialState: {
    entities: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities = action.payload.reduce((acc, course) => {
          acc[course.ids] = course;
          return acc;
        }, {});
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;

// const initialState = {
//     courses: [],
//     loading: false,
// }

// const courseSlices = createSlice({
//     name: "courses",
//     initialState,
//     reducers: {
//         getCourses: (state, {payload}) => {
//             state.loading = true
//             state.courses = payload
//             state.loading = false
//         }
//     }
// })

// export const { getCourses } = courseSlices.actions
// export default courseSlices.reducer
