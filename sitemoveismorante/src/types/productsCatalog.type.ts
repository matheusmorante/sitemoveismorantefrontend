
import { FilterConfig } from "./filterConfig.type";

export type Pricing = {
  price: number;
  promotionalPrice?: number;
  paymentDiscountPercent: number;
}

type Color = {
 name: string;
  linkedImages: string[]
}

export type Product = {
  id: number;
  images: string[];
  title: string;
  categoryId: number;
  pricing: Pricing;
  colors?: Color[];
  description: string;
  dimensions?: string;
};

export type SortBy = 'descPrice' | 'ascPrice' | 'descTitle' | 'ascTitle';


export type ProductContextType = {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  handledProducts: Product[];
  setHandledProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  filterConfig: FilterConfig;
  setFilterConfig: React.Dispatch<React.SetStateAction<FilterConfig>>;
  handleFilterConfig: (key: keyof FilterConfig, value: number | string | number[]) => void;
}
