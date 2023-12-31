import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type GlapTemplateWhereInput = {
  binactive?: IntFilter;
  bvalid?: IntFilter;
  dtlastposted?: DateTimeFilter;
  dtrangefrom?: DateTimeFilter;
  dtrangeto?: DateTimeFilter;
  haccrualacct?: IntFilter;
  hcompany?: IntFilter;
  hfunding?: IntFilter;
  hoffsetacct?: IntFilter;
  hperson?: IntFilter;
  iapr?: IntFilter;
  iaug?: IntFilter;
  id?: IntFilter;
  idec?: IntFilter;
  idisplaytype?: IntFilter;
  idueday?: IntFilter;
  ifeb?: IntFilter;
  ijan?: IntFilter;
  ijul?: IntFilter;
  ijun?: IntFilter;
  imar?: IntFilter;
  imay?: IntFilter;
  inov?: IntFilter;
  ioct?: IntFilter;
  irecurday?: IntFilter;
  isep?: IntFilter;
  istatus?: IntFilter;
  samount?: IntFilter;
  scode?: StringFilter;
  sdesc?: StringFilter;
  sexpensetype?: StringFilter;
  snotes?: StringFilter;
  spostcode?: StringFilter;
};
