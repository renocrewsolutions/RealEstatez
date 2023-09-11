import { IntFilter } from "../../util/IntFilter";
import { BigIntFilter } from "../../util/BigIntFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type GlAllocateHistoryWhereInput = {
  hacct?: IntFilter;
  hbatch?: BigIntFilter;
  hje?: BigIntFilter;
  hppty?: IntFilter;
  ibook?: IntFilter;
  id?: IntFilter;
  sbegin?: FloatFilter;
  sbeginbudget?: FloatFilter;
  sbudget?: FloatFilter;
  smtd?: FloatFilter;
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
  umonth?: DateTimeFilter;
};