import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: CounterState = {
    value: 0,
    status: "idle",
    error: null,
};

export const fetchIncrementValue = createAsyncThunk<number>(
    "counter/fetchIncrementValue",
    async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        return data.userId ?? 1;
    }
);

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value -= 1;
        },
        incrementByAmount(state, action: { payload: number }) {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchIncrementValue.pending, (state) => {
                state.status = "loading";
                state.error = null;
            })
            .addCase(fetchIncrementValue.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.value += action.payload;
            })
            .addCase(fetchIncrementValue.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message ?? "Failed to fetch";
            });
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
