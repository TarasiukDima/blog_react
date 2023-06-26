import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

// get
export function getAxiosMockData<Type>(resp: Type) {
  mockedAxios.get.mockResolvedValue(resp);
  return mockedAxios;
}

// post
export function postAxiosMockData<T>(resp: T) {
  jest.mock("axios");
  mockedAxios.post.mockResolvedValue(resp);
  return mockedAxios;
}
