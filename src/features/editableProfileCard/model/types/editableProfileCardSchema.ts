import { IProfile } from "entities/Profile";

export enum ValidateProfileErrors {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  INCORRECT_CURRENCY = "INCORRECT_CURRENCY",
  INCORRECT_CITY = "INCORRECT_CITY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface IProfileSchema {
  data?: IProfile | null;
  form?: IProfile | null;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  validateErrors?: Array<ValidateProfileErrors> | null;
}
