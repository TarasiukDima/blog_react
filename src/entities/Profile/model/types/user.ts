import { Countries, Currency } from "shared/const/config";

export interface IProfile {
  first: string;
  lastname: string;
  age: number;
  currency: Currency;
  country: Countries;
  city: string;
  username: string;
  avatar: string;
}

export interface IProfileSchema {
  data?: IProfile | null;
  isLoading: boolean;
  error?: string;
  canEdit: boolean;
}
