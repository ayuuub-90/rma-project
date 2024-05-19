import { apiSlice } from "./apiSlice";
import { TAGS_URL } from "../constants";

const tagsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllTags: builder.query({
      query: () => ({
        url: TAGS_URL,
      }),
    }),
  }),
});

export const { useGetAllTagsQuery } = tagsApiSlice;
