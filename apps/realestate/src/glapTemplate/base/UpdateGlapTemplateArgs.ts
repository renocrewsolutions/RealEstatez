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
import { GlapTemplateWhereUniqueInput } from "./GlapTemplateWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GlapTemplateUpdateInput } from "./GlapTemplateUpdateInput";

@ArgsType()
class UpdateGlapTemplateArgs {
  @ApiProperty({
    required: true,
    type: () => GlapTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateWhereUniqueInput)
  @Field(() => GlapTemplateWhereUniqueInput, { nullable: false })
  where!: GlapTemplateWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => GlapTemplateUpdateInput,
  })
  @ValidateNested()
  @Type(() => GlapTemplateUpdateInput)
  @Field(() => GlapTemplateUpdateInput, { nullable: false })
  data!: GlapTemplateUpdateInput;
}

export { UpdateGlapTemplateArgs as UpdateGlapTemplateArgs };