import { CatagoryWhereUniqueInput } from "../catagory/CatagoryWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductUpdateInput = {
  catagory?: CatagoryWhereUniqueInput | null;
  colors?: InputJsonValue;
  description?: InputJsonValue;
  discountPrice?: number;
  images?: InputJsonValue;
  order?: OrderWhereUniqueInput | null;
  review?: ReviewWhereUniqueInput | null;
  title?: string;
  titlePrice?: number;
  variants?: InputJsonValue;
};
