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
import { GlapTemplateWhereInput } from "./GlapTemplateWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { GlapTemplateOrderByInput } from "./GlapTemplateOrderByInput";

@ArgsType()
class GlapTemplateFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => GlapTemplateWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => GlapTemplateWhereInput, { nullable: true })
  @Type(() => GlapTemplateWhereInput)
  where?: GlapTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: [GlapTemplateOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [GlapTemplateOrderByInput], { nullable: true })
  @Type(() => GlapTemplateOrderByInput)
  orderBy?: Array<GlapTemplateOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { GlapTemplateFindManyArgs as GlapTemplateFindManyArgs };