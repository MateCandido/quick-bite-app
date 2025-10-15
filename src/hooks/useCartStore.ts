import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { IMenuItem, ICartItem } from '../interfaces/types'

interface CartState {
  items: ICartItem[] 
  addItem: (item: IMenuItem) => void
  removeItem: (itemId: number) => void
  incrementQuantity: (itemId: number) => void
  decrementQuantity: (itemId: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
    persist(
      (set) => ({
        items: [], 
        addItem: (newItem) =>
          set((state) => {
            const existingItem = state.items.find((item) => item.id === newItem.id);
            if (existingItem) {
              const updatedItems = state.items.map((item) =>
                item.id === newItem.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
              return { items: updatedItems };
            } else {
              return { items: [...state.items, { ...newItem, quantity: 1 }] };
            }
          }),
  
        removeItem: (itemId) =>
          set((state) => {
            const updatedItems = state.items.filter((item) => item.id !== itemId);
            return { items: updatedItems };
          }),
  
        incrementQuantity: (itemId) =>
          set((state) => {
            const updatedItems = state.items.map((item) =>
              item.id === itemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
            return { items: updatedItems };
          }),
          
        decrementQuantity: (itemId) =>
          set((state) => {
            const itemToDecrement = state.items.find((item) => item.id === itemId);

            if (itemToDecrement?.quantity === 1) {
              const updatedItems = state.items.filter((item) => item.id !== itemId);
              return { items: updatedItems };
            } else {
              const updatedItems = state.items.map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              );
              return { items: updatedItems };
            }
          }),
          
          clearCart: () => set({ items: [] }),
      }),
      {
        name: 'quickbite-cart-storage',
      }
    )
  );