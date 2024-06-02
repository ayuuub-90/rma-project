import { apiSlice } from "./apiSlice";
import { EVENTS_URL, UPLOAD_URL } from "../constants";

const eventApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get all events api
    getAllEvents: builder.query({
      query: () => ({
        url: EVENTS_URL,
      }),
    }),

    // get all events api
    getAllEventsComing: builder.query({
      query: () => ({
        url: `${EVENTS_URL}/coming-events`,
      }),
    }),

    // get judt three event fot the homepage
    getThreeEvents: builder.query({
      query: () => ({
        url: `${EVENTS_URL}/replay-events`,
      }),
    }),

    // get judt three event fot the homepage
    getEventsFiltered: builder.query({
      query: ({ checkedTags, checkedPois }) => ({
        url: `${EVENTS_URL}/filtered-events`,
        method: "POST",
        body: { checkedTags, checkedPois },
      }),
    }),

    // get event by id api
    getEventById: builder.query({
      query: (id) => ({
        url: `${EVENTS_URL}/${id}`,
      }),
    }),

    // delete event by id
    deleteEvent: builder.mutation({
      query: (data) => ({
        url: EVENTS_URL,
        method: "DELETE",
        body: data,
      }),
    }),

    //! add the event image
    uploadImageEvent: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}/event`,
        method: "POST",
        body: data,
      }),
    }),

    // create event api
    createEvent: builder.mutation({
      query: (data) => ({
        url: EVENTS_URL,
        method: "POST",
        body: data,
      }),
    }),

    // get user events api
    getUserEvents: builder.query({
      query: (data) => ({
        url: `${EVENTS_URL}/user-events`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetAllEventsQuery,
  useGetEventByIdQuery,
  useGetAllEventsComingQuery,
  useGetThreeEventsQuery,
  useGetEventsFilteredQuery,
  useDeleteEventMutation,
  useUploadImageEventMutation,
  useCreateEventMutation,
  useGetUserEventsQuery,
} = eventApiSlice;
