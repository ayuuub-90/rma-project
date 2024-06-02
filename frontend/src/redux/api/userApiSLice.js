import { apiSlice } from "./apiSlice.js";
import { UPLOAD_URL, USERS_URL } from "../constants.js";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // create new record in verified user schema funvtion
    registerEmail: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register-email`,
        method: "POST",
        body: data,
      }),
    }),

    // create new record in verified user schema funvtion
    registerEmailResetPassword: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register-email/reset-password`,
        method: "POST",
        body: data,
      }),
    }),

    // verify email address function
    verifyEmail: builder.query({
      query: (token) => ({
        url: `${USERS_URL}/complete-registration/${token}`,
      }),
    }),

    // verify email address function
    changePassword: builder.mutation({
      query: ({ data, token }) => ({
        url: `${USERS_URL}/forgot-password/${token}`,
        method: "PUT",
        body: { data, token },
      }),
    }),

    // get all users
    getAllUsers: builder.query({
      query: () => ({
        url: USERS_URL,
      }),
    }),

    // create new account funvtion
    registerUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),

    // login to exist account function
    loginUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),

    // logout function
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),

    // get user by id
    getUserById: builder.query({
      query: () => ({
        url: `${USERS_URL}/profile`,
      }),
    }),

    // update current user function
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: "PUT",
        body: data,
      }),
    }),

    //! get all persons of interest
    getAllPois: builder.query({
      query: () => ({
        url: `${USERS_URL}/person-of-interest`,
      }),
    }),

    //! create a new person of interest
    createPersonOfInterest: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/person-of-interest`,
        method: "PUT",
        body: data,
      }),
    }),

    //! upload user image
    uploadImageUser: builder.mutation({
      query: (data) => ({
        url: `${UPLOAD_URL}/user`,
        method: "POST",
        body: data,
      }),
    }),

    // get all requests function
    getAllRequests: builder.query({
      query: () => ({
        url: `${USERS_URL}/requests`,
      }),
    }),

    // acept request from user
    acceptRequest: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/requests/accepter-request`,
        method: "POST",
        body: data,
      }),
    }),

    // accept request from user
    declineRequest: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/requests/decliner-request`,
        method: "POST",
        body: data,
      }),
    }),

    // delete user by id
    deleteUser: builder.mutation({
      query: (data) => ({
        url: USERS_URL,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserByIdQuery,
  useUpdateUserMutation,
  useRegisterEmailMutation,
  useRegisterEmailResetPasswordMutation,
  useVerifyEmailQuery,
  useChangePasswordMutation,
  useGetAllUsersQuery,
  useGetAllPoisQuery,
  useCreatePersonOfInterestMutation,
  useUploadImageUserMutation,
  useGetAllRequestsQuery,
  useAcceptRequestMutation,
  useDeclineRequestMutation,
  useDeleteUserMutation,
} = userApiSlice;
