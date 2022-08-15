export const CLIENT_ID = "3X_onJKKrCXR1gldoptCO6xD7jnHL0Qeqw4gN1JjKik"

const BASE_URL_DEVELOPMENT = "http://localhost:3000/"
const BASE_URL_PRODUCTION = "https://smart-home-dec.herokuapp.com/"
export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION
