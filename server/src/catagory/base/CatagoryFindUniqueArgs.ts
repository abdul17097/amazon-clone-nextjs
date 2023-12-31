/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CatagoryWhereUniqueInput } from "./CatagoryWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CatagoryFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CatagoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CatagoryWhereUniqueInput)
  @Field(() => CatagoryWhereUniqueInput, { nullable: false })
  where!: CatagoryWhereUniqueInput;
}

export { CatagoryFindUniqueArgs as CatagoryFindUniqueArgs };
