import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CATAGORY_TITLE_FIELD } from "../catagory/CatagoryTitle";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";
import { REVIEW_TITLE_FIELD } from "../review/ReviewTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="catagory"
          source="catagory.id"
          reference="Catagory"
        >
          <TextField source={CATAGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="discountPrice" source="discountPrice" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <ReferenceField label="orders" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="reviews" source="review.id" reference="Review">
          <TextField source={REVIEW_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <TextField label="titlePrice" source="titlePrice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="variants" source="variants" />
      </SimpleShowLayout>
    </Show>
  );
};
