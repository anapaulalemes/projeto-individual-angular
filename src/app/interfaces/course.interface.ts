export interface ICourse {
  id: number;
  title: string;
  author: string;
  description: string;
  published_date: Date;
  price: number;
  totalInStock: number;
  totalAddedToCart: number;
}
