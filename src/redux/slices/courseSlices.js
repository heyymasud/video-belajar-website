import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    courses: [],
    loading: false,
}

const courseSlices = createSlice({
    name: "courses",
    initialState,
    reducers: {
        getCourses: (state, {payload}) => {
            state.loading = true
            state.courses = payload
            state.loading = false
        }
    }
})

export const { getCourses } = courseSlices.actions
export default courseSlices.reducer