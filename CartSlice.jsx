import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart', initialState: { items: [] },
  reducers: {
    addItem: (state, action) => { const item = state.items.find((p) => p.id === action.payload.id); if (item) item.quantity += 1; else state.items.push({ ...action.payload, quantity: 1 }); },
    increaseQuantity: (state, action) => { const item = state.items.find((p) => p.id === action.payload); if (item) item.quantity += 1; },
    decreaseQuantity: (state, action) => { const item = state.items.find((p) => p.id === action.payload); if (item && item.quantity > 1) item.quantity -= 1; },
    updateQuantity: (state, action) => { const item = state.items.find((p) => p.id === action.payload.id); if (item) item.quantity = Math.max(1, action.payload.quantity); },
    removeItem: (state, action) => { state.items = state.items.filter((p) => p.id !== action.payload); },
    addToCart: (state, action) => { const item = state.items.find((p) => p.id === action.payload.id); if (item) item.quantity += 1; else state.items.push({ ...action.payload, quantity: 1 }); },
    removeFromCart: (state, action) => { state.items = state.items.filter((p) => p.id !== action.payload); },
    clearCart: (state) => { state.items = []; }
  }
});
export const { addItem, addToCart, increaseQuantity, decreaseQuantity, updateQuantity, removeItem, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
