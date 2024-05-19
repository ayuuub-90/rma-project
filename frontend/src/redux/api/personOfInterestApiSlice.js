import { apiSlice } from "./apiSlice";
import { POIS_URL } from "../constants";

const personOfInterestApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllPois: builder.query({
      query: () => ({
        url: POIS_URL,
      }),
    }),
  }),
});

export const { useGetAllPoisQuery } = personOfInterestApiSlice;
