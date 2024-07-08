import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type GuideWhereInput = {
  id?: StringFilter;
  audioUrl?: StringNullableFilter;
  content?: StringNullableFilter;
};
