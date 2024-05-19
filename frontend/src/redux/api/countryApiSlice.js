import { apiSlice } from "./apiSlice.js";
import { COUNTRIES_URL } from "../constants.js";

const countryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all countries
    getAllCountries: builder.query({
      query: () => ({
        url: COUNTRIES_URL,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllCountriesQuery } = countryApiSlice;
