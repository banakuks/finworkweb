// src/views/project/ProjectList/store/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetProjectList,
    apiGetScrumBoardtMembers,
    apiPutProjectList,
} from 'services/ProjectService'

export const getList = createAsyncThunk(
    'projectList/data/getList',
    async (data) => {
        const response = await apiGetProjectList(data)
        return response.data
    }
)

export const getMembers = createAsyncThunk(
    'projectList/data/getMembers',
    async () => {
        const response = await apiGetScrumBoardtMembers()
        return response.data.map((item) => ({
            value: item.id,
            label: item.name,
            img: item.img || '/img/avatars/thumb-1.png',
        }))
    }
)

export const putProject = createAsyncThunk(
    'projectList/data/putProject',
    async (data) => {
        const response = await apiPutProjectList(data)
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'projectList/data',
    initialState: {
        loading: false,
        projectList: [],
        allMembers: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getList.pending, (state) => {
                state.loading = true
            })
            .addCase(getList.fulfilled, (state, action) => {
                state.loading = false
                state.projectList = action.payload || []
            })
            .addCase(getList.rejected, (state) => {
                state.loading = false
                state.projectList = []
            })
            .addCase(getMembers.fulfilled, (state, action) => {
                state.allMembers = action.payload || []
            })
            .addCase(putProject.fulfilled, (state, action) => {
                state.projectList = action.payload || []
            })
    },
})

export default dataSlice.reducer
