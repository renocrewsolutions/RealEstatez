import { FloatFilter } from "../../util/FloatFilter";
import { IntFilter } from "../../util/IntFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { StringFilter } from "../../util/StringFilter";

export type GlAllocateDetailWhereInput = {
  dfactor?: FloatFilter;
  hacct?: IntFilter;
  haccttreedetail?: IntFilter;
  hfromacct?: BigIntFilter;
  hglallocate?: IntFilter;
  hoffsetacct?: IntFilter;
  ibudget?: BigIntFilter;
  id?: IntFilter;
  iexclude?: IntFilter;
  igroup?: BigIntFilter;
  inegate?: IntFilter;
  iorder?: BigIntFilter;
  iptd?: IntFilter;
  sacctdescription?: StringFilter;
  sacctnode?: StringFilter;
  sbook?: StringFilter;
  scalctype?: StringFilter;
  sformula?: StringFilter;
  snotes?: StringFilter;
  spropertylist?: StringFilter;
  ssegment1?: StringFilter;
  ssegment10?: StringFilter;
  ssegment11?: StringFilter;
  ssegment12?: StringFilter;
  ssegment2?: StringFilter;
  ssegment3?: StringFilter;
  ssegment4?: StringFilter;
  ssegment5?: StringFilter;
  ssegment6?: StringFilter;
  ssegment7?: StringFilter;
  ssegment8?: StringFilter;
  ssegment9?: StringFilter;
  stocolumnname?: StringFilter;
  stype?: StringFilter;
};