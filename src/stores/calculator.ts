import { createSlice} from '@reduxjs/toolkit'

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState: {
    value: 0,
  },
  reducers: {
    add: (state, action) => {
      state.value = state.value + action.payload;
    },
    subtract: (state, action) => {
      state.value = state.value - action.payload;
    },
    multiply: (state, action) => {
      state.value = state.value * action.payload;
    },
    divide: (state, action) => {
      state.value = state.value / action.payload;
    },
  },
})

export const { add,subtract, multiply, divide } = calculatorSlice.actions;

export default calculatorSlice.reducer;