/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GlapTemplateDetailWhereInput } from "./GlapTemplateDetailWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GlapTemplateDetailListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GlapTemplateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateDetailWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateDetailWhereInput, {
    nullable: true,
  })
  every?: GlapTemplateDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlapTemplateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateDetailWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateDetailWhereInput, {
    nullable: true,
  })
  some?: GlapTemplateDetailWhereInput;

  @ApiProperty({
    required: false,
    type: () => GlapTemplateDetailWhereInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateDetailWhereInput)
  @IsOptional()
  @Field(() => GlapTemplateDetailWhereInput, {
    nullable: true,
  })
  none?: GlapTemplateDetailWhereInput;
}
export { GlapTemplateDetailListRelationFilter as GlapTemplateDetailListRelationFilter };