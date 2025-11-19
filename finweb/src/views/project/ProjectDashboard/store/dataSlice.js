// src/views/project/ProjectDashboard/store/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiGetProjectDashboardData } from 'services/ProjectService'

export const getProjectDashboardData = createAsyncThunk(
    'projectDashboard/data/getProjectDashboardData',
    async () => {
        const response = await apiGetProjectDashboardData()
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'projectDashboard/data',
    initialState: {
        loading: false,
        dashboardData: {},
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProjectDashboardData.pending, (state) => {
                state.loading = true
            })
            .addCase(getProjectDashboardData.fulfilled, (state, action) => {
                state.dashboardData = action.payload
                state.loading = false
            })
            .addCase(getProjectDashboardData.rejected, (state) => {
                state.loading = false
            })
    },
})

export default dataSlice.reducer
