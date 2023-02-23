import { fetchApi } from "../../lib/fetchApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
  error: "",
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    basketStarted(state, action) {
      state.items = action.payload;
      state.isLoading = true;
    },
    basketSuccess(state, action) {
      state.items = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    basketFailed(state, action) {
      state.items = action.payload;
      state.error = "Something went wrong";
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(getBasket.pending, (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    });

    builder.addCase(getBasket.rejected, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = "error";
    });

    builder.addCase(addToBasket.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(addToBasket.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(addToBasket.rejected, (state) => {
      state.isLoading = false;
      state.error = "error";
    });

    builder.addCase(uptadeBasketItem.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(uptadeBasketItem.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(uptadeBasketItem.rejected, (state) => {
      state.isLoading = false;
      state.error = "error";
    });

    builder.addCase(deleteBasketItem.fulfilled, (state) => {
      state.isLoading = false;
      state.error = "";
    });

    builder.addCase(deleteBasketItem.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });

    builder.addCase(deleteBasketItem.rejected, (state) => {
      state.isLoading = false;
      state.error = "error";
    });
  },
});

export const basketActions = basketSlice.actions;

export const getBasket = createAsyncThunk(
  "basket/getBasket",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await fetchApi("basket ");
      return data.items;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const addToBasket = createAsyncThunk(
  "basket/addNewBasket",
  async (newItem, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`foods/${newItem.id}/addToBasket`, {
        method: "POST",
        body: { amount: newItem.amount },
      });
      dispatch(getBasket());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const uptadeBasketItem = createAsyncThunk(
  "basket/updateBasket",
  async ({ id, amount }, { dispatch, rejectWithValue }) => {
    try {
      await fetchApi(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      dispatch(getBasket());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const deleteBasketItem = createAsyncThunk(
  "basket/deleteBasket",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`basketItem/${id}/delete`, {
        method: "DELETE",
      });
      dispatch(getBasket());
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
// ///////////////////

export const submitOrder = createAsyncThunk(
  "basket/submitOrder",
  async ({ orderData }, { dispatch, rejectWithValue }) => {
    try {
      await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: "POST",
        body: orderData,
      });
      dispatch(getBasket());
    } catch (error) {
      return rejectWithValue("Some thing wen wong");
    }
  }
);
