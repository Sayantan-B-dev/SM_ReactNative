import { create } from 'zustand';

export const useStore = create(set => ({
    count:1,
    increment: () => set(state => ({ count: state.count + 1 })),
    decrement: () => set(state => ({ count: state.count - 1 })),
}));
