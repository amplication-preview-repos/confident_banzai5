import { SortOrder } from "../../util/SortOrder";

export type GuideOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  audioUrl?: SortOrder;
  content?: SortOrder;
};
