import { IProfile, ValidateProfileErrors } from "../../types/user";

export const validateProfileData = (
  props?: IProfile
): Array<ValidateProfileErrors> => {
  if (!props) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { first, lastname, currency, age, country, city, username } = props;
  const errors: Array<ValidateProfileErrors> = [];

  if (!first || !lastname || !username) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age && typeof age !== "number") {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!city) {
    errors.push(ValidateProfileErrors.INCORRECT_CITY);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!currency) {
    errors.push(ValidateProfileErrors.INCORRECT_CURRENCY);
  }

  return errors;
};
