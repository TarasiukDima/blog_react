import { Countries } from "../../../../entities/Countries";
import { Currency } from "../../../../entities/Currency";

export interface IProfile {
  id?: string;
  first?: string;
  lastname?: string;
  username?: string;
  age?: number;
  currency?: Currency;
  country?: Countries;
  city?: string;
  avatar?: string;
}
