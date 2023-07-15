import { IProfile } from "entities/Profile";
import { ValidateProfileErrors } from "../consts/consts";

export interface IProfileSchema {
  data?: IProfile | null;
  form?: IProfile | null;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<ValidateProfileErrors> | null;
}
