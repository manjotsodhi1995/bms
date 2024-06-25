export const SERVER_BASE_URL = `${
  import.meta.env.VITE_BACKEND_SERVER_URL || "https://kafsbackend.onrender.com"
}/api/v1` as const;

export const API = {
  users: {
    signup: `${SERVER_BASE_URL}/users/signup`,
    login: `${SERVER_BASE_URL}/users/login`,
    googleAuth: `${SERVER_BASE_URL}/users/google-auth`,
    refreshToken: `${SERVER_BASE_URL}/users/refreshtoken`,

    // profile: `${SERVER_BASE_URL}/users/profile`,
    // changePassword: `${SERVER_BASE_URL}/users/change-password`,
    // update: `${SERVER_BASE_URL}/users/update`,
    // verify: `${SERVER_BASE_URL}/users/authorize`,
    // forgotPassword: `${SERVER_BASE_URL}/users/forgot-password`,
    // resetPassword: `${SERVER_BASE_URL}/users/reset-password`,
  },

  events: {
    fetchAllEvents: `${SERVER_BASE_URL}/events/fetch`,
    getByUrl: `${SERVER_BASE_URL}/events/geteventbyurl`,

    // create: `${SERVER_BASE_URL}/events/create`,
    // getById: `${SERVER_BASE_URL}/events/geteventbyid`,
    // uploadContent: `${SERVER_BASE_URL}/contents/upload`,
    // upcoming: `${SERVER_BASE_URL}/events/upcoming`,
    // live: `${SERVER_BASE_URL}/events/live`,
  },
  organizers: {
    getById: `${SERVER_BASE_URL}/organizers/getorgbyid`,

    // getAllOrgs: `${SERVER_BASE_URL}/organizers/getallorgs`,
    // create: `${SERVER_BASE_URL}/organizers/create`,
    // update: `${SERVER_BASE_URL}/organizers/update`,
    // delete: `${SERVER_BASE_URL}/organizers/delete`,
  },
  cart: {
    // fetchBookingMatrix: `${SERVER_BASE_URL}/bookingmatrix/fetch`,
    // fetchUserBasket: `${SERVER_BASE_URL}/baskets/fetch`,
    // updateBasket: `${SERVER_BASE_URL}/baskets/update`,
    // resetBasket: `${SERVER_BASE_URL}/baskets/reset`,
  },
  categories: {
    getAllCategories: `${SERVER_BASE_URL}/categories/getallcategories`,

    // trending: `${SERVER_BASE_URL}/categories/trending`,
  },
} as const;
