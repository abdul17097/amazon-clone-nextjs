import { CatagoryWhereUniqueInput } from "../catagory/CatagoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { ReviewWhereUniqueInput } from "../review/ReviewWhereUniqueInput";

export type ProductWhereInput = {
  catagory?: CatagoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountPrice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  order?: OrderWhereUniqueInput;
  review?: ReviewWhereUniqueInput;
  title?: StringFilter;
  titlePrice?: FloatFilter;
  variants?: JsonFilter;
};
