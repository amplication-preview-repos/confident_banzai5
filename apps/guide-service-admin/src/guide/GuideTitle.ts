import { Guide as TGuide } from "../api/guide/Guide";

export const GUIDE_TITLE_FIELD = "audioUrl";

export const GuideTitle = (record: TGuide): string => {
  return record.audioUrl?.toString() || String(record.id);
};
