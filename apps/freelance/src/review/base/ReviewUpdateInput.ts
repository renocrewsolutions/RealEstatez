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
import { User1WhereUniqueInput } from "../../user1/base/User1WhereUniqueInput";
import { ValidateNested, IsOptional, IsString, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { JobWhereUniqueInput } from "../../job/base/JobWhereUniqueInput";

@InputType()
class ReviewUpdateInput {
  @ApiProperty({
    required: false,
    type: () => User1WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => User1WhereUniqueInput)
  @IsOptional()
  @Field(() => User1WhereUniqueInput, {
    nullable: true,
  })
  client?: User1WhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string;

  @ApiProperty({
    required: false,
    type: () => User1WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => User1WhereUniqueInput)
  @IsOptional()
  @Field(() => User1WhereUniqueInput, {
    nullable: true,
  })
  freelancer?: User1WhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => JobWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => JobWhereUniqueInput)
  @IsOptional()
  @Field(() => JobWhereUniqueInput, {
    nullable: true,
  })
  job?: JobWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rating?: number;
}

export { ReviewUpdateInput as ReviewUpdateInput };
