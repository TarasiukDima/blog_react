import { Countries } from "../../../../entities/Countries";
import { Currency } from "../../../../entities/Currency";

export interface IProfile {
  first?: string;
  lastname?: string;
  username?: string;
  age?: number;
  currency?: Currency;
  country?: Countries;
  city?: string;
  avatar?: string;
}

export interface IProfileSchema {
  data?: IProfile | null;
  form?: IProfile | null;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
