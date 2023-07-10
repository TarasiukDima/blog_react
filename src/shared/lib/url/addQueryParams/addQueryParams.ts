export const getQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(({ 0: name, 1: value }) => {
    if (value !== undefined) {
      searchParams.set(name, value);
    }
  });

  return `?${searchParams.toString()}`;
};

/*
 * Function for add params to URL string
 * @param params
 */
export const addQueryParams = (params: OptionalRecord<string, string>) => {
  const searchParams = getQueryParams(params);

  window.history.pushState(null, "", searchParams);
};
