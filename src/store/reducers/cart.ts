import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapios } from '../../Pages/Home'

type CartState = {
  items: Cardapios[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Cardapios>) => {
      state.items.push(action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

cartSlice.actions.add

export const { add, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
