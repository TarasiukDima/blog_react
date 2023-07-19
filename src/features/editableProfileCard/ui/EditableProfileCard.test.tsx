import { screen, waitFor } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { $api } from "@/shared/api/api";
import { renderComponent } from "@/shared/lib/tests/renderComponent";
import { Currency } from "../../../entities/Currency";
import { Countries } from "../../../entities/Countries";
import { EditableProfileCard } from "./EditableProfileCard";
import { profileReducer } from "../model/slice/profileSlice";

describe("features/EditableProfileCard", () => {
  const userData = {
    id: "1",
    first: "User123",
    lastname: "Userov123",
    age: 123,
    currency: Currency.RUB,
    country: Countries.Belarus,
    city: "Brest",
    username: "admin",
    avatar: "http://avatar.com",
  };
  const initialProfileState = {
    error: "",
    isLoading: false,
    readonly: true,
    validateErrors: [],
    form: userData,
    data: userData,
  };
  const options = {
    initialState: {
      profile: initialProfileState,
      user: {
        authData: { id: "1", username: initialProfileState.data.username },
      },
    },
    asyncReducers: {
      profile: profileReducer,
    },
  };

  const editButtonId = "EditableProfileCardHeader.Edit";
  const cancelButtonId = "EditableProfileCardHeader.Cancel";
  const titleCardId = "EditableProfileCardHeader.Title";
  const validateErrorTitleId = "EditableProfileCard.Error.Header";
  const validateErrorTextId = "EditableProfileCard.Error.Text";
  const errorLoadTitleId = "ProfileCard.Error.Header";
  const errorLoadTextId = "ProfileCard.Error.Text";
  const nameInputId = "ProfileCard.Name";
  const lastNameInputId = "ProfileCard.LastName";
  const userNameInputId = "ProfileCard.Username";
  const ageInputId = "ProfileCard.Age";
  const cityInputId = "ProfileCard.City";
  const avatarInputId = "ProfileCard.Avatar";
  const saveButtonId = "ProfileCard.Save";

  test("button cancel after click in document", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId(editButtonId));
    expect(screen.getByTestId(cancelButtonId)).toBeInTheDocument();
    expect(screen.queryByTestId(editButtonId)).not.toBeInTheDocument();
  });

  test("input can change value", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId(editButtonId));

    // check clear inputs
    await userEvent.clear(screen.getByTestId(nameInputId));
    await userEvent.clear(screen.getByTestId(lastNameInputId));
    await userEvent.clear(screen.getByTestId(userNameInputId));
    await userEvent.clear(screen.getByTestId(ageInputId));
    await userEvent.clear(screen.getByTestId(cityInputId));
    await userEvent.clear(screen.getByTestId(avatarInputId));

    expect(screen.getByTestId(nameInputId)).toHaveValue("");
    expect(screen.getByTestId(lastNameInputId)).toHaveValue("");
    expect(screen.getByTestId(userNameInputId)).toHaveValue("");
    expect(screen.getByTestId(ageInputId)).toHaveValue(0);
    expect(screen.getByTestId(cityInputId)).toHaveValue("");
    expect(screen.getByTestId(avatarInputId)).toHaveValue("");

    // check type inputs
    const wordForType = "test";
    await userEvent.type(screen.getByTestId(nameInputId), wordForType);
    await userEvent.type(screen.getByTestId(lastNameInputId), wordForType);
    await userEvent.type(screen.getByTestId(userNameInputId), wordForType);
    await userEvent.type(screen.getByTestId(ageInputId), "123321");
    await userEvent.type(screen.getByTestId(cityInputId), wordForType);
    await userEvent.type(screen.getByTestId(avatarInputId), wordForType);

    expect(screen.getByTestId(nameInputId)).toHaveValue(wordForType);
    expect(screen.getByTestId(lastNameInputId)).toHaveValue(wordForType);
    expect(screen.getByTestId(userNameInputId)).toHaveValue(wordForType);
    expect(screen.getByTestId(ageInputId)).toHaveValue(123321);
    expect(screen.getByTestId(cityInputId)).toHaveValue(wordForType);
    expect(screen.getByTestId(avatarInputId)).toHaveValue(wordForType);
  });

  test("after click cancel, user data will return to start data", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId(editButtonId));

    await userEvent.clear(screen.getByTestId(nameInputId));
    await userEvent.clear(screen.getByTestId(lastNameInputId));

    const wordForType = "test";
    await userEvent.type(screen.getByTestId(nameInputId), wordForType);
    await userEvent.type(screen.getByTestId(lastNameInputId), wordForType);

    expect(screen.getByTestId(nameInputId)).toHaveValue(wordForType);
    expect(screen.getByTestId(lastNameInputId)).toHaveValue(wordForType);

    await userEvent.click(screen.getByTestId(cancelButtonId));

    expect(screen.getByTestId(nameInputId)).toHaveValue(
      initialProfileState.data.first
    );
    expect(screen.getByTestId(lastNameInputId)).toHaveValue(
      initialProfileState.data.lastname
    );
  });

  test("show error incorrect data", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);

    await userEvent.click(screen.getByTestId(editButtonId));
    await userEvent.clear(screen.getByTestId(nameInputId));
    await userEvent.click(screen.getByTestId(saveButtonId));

    await waitFor(() => {
      expect(screen.getByTestId(validateErrorTitleId)).toBeInTheDocument();
      expect(screen.getByTestId(validateErrorTextId)).toBeInTheDocument();
    });
  });

  test("if not Error will be put request", async () => {
    renderComponent(<EditableProfileCard id="1" />, options);
    const mockPut = jest.spyOn($api, "put");
    const newName = "TestUser";
    await userEvent.click(screen.getByTestId(editButtonId));
    await userEvent.type(screen.getByTestId(nameInputId), newName);
    await userEvent.click(screen.getByTestId(saveButtonId));

    expect(mockPut).toHaveBeenCalled();
  });
});
