export interface IProduct {
  id?: number;
  type?: string;
  amount?: number;
  action?: string;
  active?: boolean;
  linked?: boolean;
  selectedColor?: string;
}

export interface IProductState {
  products: IProduct[];
  loading: boolean;
  error: string;
}

export interface IProductAction {
  type: string;
  payload: IProduct[];
}

export interface IProducts {
  products: IProduct[];
}
