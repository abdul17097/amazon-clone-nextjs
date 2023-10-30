import { ProductCreateNestedManyWithoutReviewsInput } from "./ProductCreateNestedManyWithoutReviewsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewCreateInput = {
  products?: ProductCreateNestedManyWithoutReviewsInput;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
};
