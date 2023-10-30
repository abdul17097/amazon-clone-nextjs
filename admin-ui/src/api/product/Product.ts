import { Catagory } from "../catagory/Catagory";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  catagory?: Catagory | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountPrice: number;
  id: string;
  images: JsonValue;
  order?: Order | null;
  review?: Review | null;
  title: string;
  titlePrice: number;
  updatedAt: Date;
  variants: JsonValue;
};
