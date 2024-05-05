export interface ICourse {
  id: number;
  title: string;
  author: string;
  description: string;
  publishedDate: Date;
  price: number;
  img: string;
  totalInStock: number;
  totalAddedToCart: number;
}
