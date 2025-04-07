// ✅ Action: A plain JavaScript object that tells Redux what to do.
// It always has a 'type' field (describes what happened), and usually a 'payload' (extra data).

// ✅ Reducer: A pure function. It receives the current state + an action and returns the next state.
// It should not mutate the state directly, but Redux Toolkit allows writing "mutating code" safely using Immer.

// ✅ Store: The global container that holds the app’s entire state tree. Created using configureStore().

// ✅ Action Creator: A function that returns an action object (e.g. { type: 'counter/increment', payload: 5 }).

// ✅ Type: A string that describes what kind of action occurred (e.g. 'counter/increment').


// ✅ Importing createSlice from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
// -> 'import': JavaScript keyword to bring code from external module
// -> '{ createSlice }': We are importing only the createSlice function (using destructuring)
// -> '@reduxjs/toolkit': The package that provides modern Redux utilities


// ✅ Creating a slice using createSlice()
export const counterSlice = createSlice({
    // -> 'export': Makes this variable available to other files/modules
    // -> 'const': Declares a constant variable
    // -> 'counterSlice': The name we're giving to this slice of logic (you can call it anything)

    name: 'counter',
    // -> 'name': Used as the prefix for action type strings, e.g., 'counter/increment'
    // -> 'counter': The slice name (must be unique within your app)

    initialState: {
        value: 0,
    },
    // -> 'initialState': The default state for this slice of the Redux store
    // -> '{ value: 0 }': Initial state is an object with a key 'value', starting at 0

    reducers: {
    // ❌ Typo here! Should be 'reducers' (plural)
    // ✅ 'reducers': An object where you define case reducers for handling specific actions

        increment: (state) => {
            // -> 'increment': Name of the reducer function (also becomes an action creator)
            // -> '(state) => {...}': The reducer function
            // -> 'state.value += 1': Increase the current state's value by 1
            state.value += 1;
        },

        decrement: (state) => {
            // -> 'decrement': Another reducer function that decreases the value
            state.value -= 1;
        },

        incrementByAmount: (state, action) => {
            // -> 'incrementByAmount': A reducer that adds a custom number to the value
            // -> 'action': The action object, usually has a 'payload'
            // -> 'action.payload': The number passed to the action (e.g., 5)
            state.value += action.payload;
        },

        reset: (state) => {
            // -> 'reset': Sets the value back to 0
            state.value = 0;
        },
    },
});


// ✅ Exporting the auto-generated action creators
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
// -> 'counterSlice.actions': Redux Toolkit automatically creates action creators for each reducer
// -> Destructuring lets you export each one by name

// ✅ Exporting the reducer function
export default counterSlice.reducer;
// -> 'counterSlice.reducer': The complete reducer function to be given to the Redux store
// -> 'export default': So that other files (like store.js) can import it as the default export


// ✅ Summary Note:
// Action creators are generated for each case reducer function
// That means: for every reducer you wrote (increment, decrement, etc), Redux Toolkit gives you a matching function
// Example: increment() returns { type: 'counter/increment' }
