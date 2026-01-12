import { create } from "zustand";

// const useCounterStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

// const useCounterStore = create((set) => ({
//   count: 0,
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

const useCounterStore = ()=> {}



/* What’s happening here
- create() → creates a global store
- count → state
- increment, decrement → actions
- set() → updates state

() => {}      // returns nothing
() => ({})    // returns an object
 👉 Parentheses () are REQUIRED to return an object implicitly.
*/
