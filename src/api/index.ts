export const SERVER_BASE_URL = `${
  import.meta.env.VITE_BACKEND_SERVER_URL ||
"https://api.kafsco.com"
}/api/v1` as const;

export const API = {
  users: {
    signup: `${SERVER_BASE_URL}/users/signup`,
    login: `${SERVER_BASE_URL}/users/login`,
    googleAuth: `${SERVER_BASE_URL}/users/google-auth`,
    refreshToken: `${SERVER_BASE_URL}/users/refreshtoken`,

    likeEvent: `${SERVER_BASE_URL}/users/like`,
    unlikeEvent: `${SERVER_BASE_URL}/users/unlike`,
    getAllLikedEvents: `${SERVER_BASE_URL}/users/liked-events`,

    followOrganizer: `${SERVER_BASE_URL}/users/follow`,
    unfollowOrganizer: `${SERVER_BASE_URL}/users/unfollow`,
    getAllFollowedOrganizers: `${SERVER_BASE_URL}/users/followed-organizers`,

    profile: `${SERVER_BASE_URL}/users/profile`,
    update: `${SERVER_BASE_URL}/users/update`,
    // changePassword: `${SERVER_BASE_URL}/users/change-password`,
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
  basket: {
    fetch: `${SERVER_BASE_URL}/baskets/fetch`,
    update: `${SERVER_BASE_URL}/baskets/update`,
    reset: `${SERVER_BASE_URL}/baskets/reset`,
  },
  bookingmatrix: {
    create: `${SERVER_BASE_URL}/bookingmatrix/create`,
    update: `${SERVER_BASE_URL}/bookingmatrix/update`,
    fetch: `${SERVER_BASE_URL}/bookingmatrix/fetch`,
  },
  categories: {
    getAllCategories: `${SERVER_BASE_URL}/categories/getallcategories`,

    // trending: `${SERVER_BASE_URL}/categories/trending`,
  },
  payments: {
    direct: `${SERVER_BASE_URL}/payments/checkout`,
  },
  payments3ds: {
    direct: `${SERVER_BASE_URL}/payments/direct3ds`,
  },
  bookingRoutes: {
    getTicket: `${SERVER_BASE_URL}/bookings/get-tickets`,
  },
  content: {
    upload: `${SERVER_BASE_URL}/contents/upload`,
  },
  promo: {
    apply: `${SERVER_BASE_URL}/promo-code/apply`,
    remove: `${SERVER_BASE_URL}/promo-code/remove`,
  },
} as const;
