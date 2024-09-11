import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    qty: 0,
    eventId: 0,
    eventTitle: "",
    totalPayment: 0,
    ticketSection: [],
    sectionId: [],
    quantity: [],
};

const section = createSlice({
    name: "section",
    initialState,
    reducers: {
        addSection: (state, action) => {
            state.data = [action.payload]
        },
        addQty: (state, action) => {
            state.qty = action.payload
        },
        addEventId: (state, action) => {
            state.eventId = action.payload
        },
        addEventTitle: (state, action) => {
            state.eventTitle = action.payload
        },
        addTotalPayment: (state, action) => {
            state.totalPayment = action.payload
        },
        addTicketSection: (state, action) => {
            state.ticketSection = action.payload
        },
        addSectionId: (state, action) => {
            state.sectionId = action.payload
        },
        addQuantity: (state, action) => {
            state.quantity = action.payload
        },
        resetAll: (state) => {
            {
                state.data = [],
                state.qty = 0,
                state.eventId = 0,
                state.eventTitle = "",
                state.totalPayment = 0,
                state.ticketSection = [],
                state.sectionId = [],
                state.quantity = []
            }
        }
    }
})

export const {
    addSection, 
    addQty, 
    addEventId, 
    addEventTitle, 
    addTotalPayment,
    addTicketSection,
    addSectionId,
    addQuantity,
    resetAll,
} = section.actions
export default section.reducer