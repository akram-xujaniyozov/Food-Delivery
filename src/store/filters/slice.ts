import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortBy, FilterSliceState, SortPropertyEnum } from "../../@types";

const initialState: FilterSliceState = {
  searchValue: "",
  categoryName: "Все",
  sort: {
    name: "увеличение",
    sortProperty: SortPropertyEnum.PRICE_ASC,
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<string>) {
      state.categoryName = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<SortBy>) {
      state.sort = action.payload;
    },
  },
});

const { setCategoryId, setSearchValue, setSort } = filterSlice.actions;

export { filterSlice, setCategoryId, setSearchValue, setSort };
