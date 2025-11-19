// src/views/project/ScrumBoard/store/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
    apiGetScrumBoards,
    apiGetScrumBoardtMembers,
} from 'services/ProjectService'

export const getBoards = createAsyncThunk('scrumBoard/getBoards', async () => {
    const response = await apiGetScrumBoards()
    return response.data
})

export const getMembers = createAsyncThunk(
    'scrumBoard/getMembers',
    async () => {
        const response = await apiGetScrumBoardtMembers()
        return response.data
    }
)

const dataSlice = createSlice({
    name: 'scrumBoard/data',
    initialState: {
        loading: true,
        columns: {},
        ordered: [],
        cards: {}, // ← This is where cards live
        boardMembers: [],
        allMembers: [],
    },
    reducers: {
        updateOrdered: (state, action) => {
            state.ordered = action.payload
        },
        updateColumns: (state, action) => {
            state.columns = action.payload
        },
        updateBoardMembers: (state, action) => {
            state.boardMembers = action.payload
        },
        // Optional: for future live updates
        updateCards: (state, action) => {
            state.cards = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBoards.pending, (state) => {
                state.loading = true
            })
            .addCase(getBoards.fulfilled, (state, action) => {
                state.loading = false
                state.columns = action.payload.columns
                state.cards = action.payload.cards
                state.ordered = action.payload.columnOrder
            })
            .addCase(getBoards.rejected, (state) => {
                state.loading = false
            })
            .addCase(getMembers.fulfilled, (state, action) => {
                state.boardMembers = action.payload.participantMembers || []
                state.allMembers = action.payload.allMembers || []
            })
    },
})

export const { updateOrdered, updateColumns, updateBoardMembers, updateCards } =
    dataSlice.actions

export default dataSlice.reducer
