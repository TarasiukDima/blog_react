export type { IScrollSchema } from "./model/types/scrollSaveSchema";

export {
  getScrollValues,
  getScrollByPath,
} from "./model/selectors/scrollSaveSelectors";

export { scrollActions, scrollReducer } from "./model/slice/scrollSaveSlice";
