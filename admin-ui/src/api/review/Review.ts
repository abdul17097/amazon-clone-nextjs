import { Product } from "../product/Product";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  products?: Array<Product>;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
};
