export interface Brand {
  id: string;
  name: string;
  totalProducts: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: string[];
  sizes: string[];
  rating: number;
  reviews: number;
}
