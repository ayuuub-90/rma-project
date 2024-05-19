//TODO ==> set up the frontend with backend of contact

import { apiSlice } from "./apiSlice.js";
import { CONTACTS_URL } from "../constants.js";

const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendMessage: builder.mutation({
      query: (data) => ({
        url: CONTACTS_URL,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendMessageMutation } = contactApiSlice;