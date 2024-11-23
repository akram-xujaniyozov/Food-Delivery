// Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

// Category interface
export interface Category {
  id: number;
  category: string;
}

// Order interface
export interface Order {
  address: string;
  phone: string;
  paymentType: "cash" | "card";
  items: Array<{
    productId: number;
    quantity: number;
  }>;
  comment?: string;
}

// SortPropertyEnum
export enum SortPropertyEnum {
  PRICE_DESC = "price",
  PRICE_ASC = "-price",
}

// Sort
export type SortBy = {
  name: string;
  sortProperty: SortPropertyEnum;
};

// FilterSlice interface
export interface FilterSliceState {
  searchValue: string;
  categoryName: string;
  sort: SortBy;
}

export interface CartItem extends Product {
  count: number;
}

export interface CartSliceState {
  totalPrice: number;
  items: Array<CartItem>;
}
