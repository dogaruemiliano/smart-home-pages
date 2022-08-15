const CLIENT_ID_DEVELOPMENT = "3X_onJKKrCXR1gldoptCO6xD7jnHL0Qeqw4gN1JjKik"
const CLIENT_ID_PRODUCTION = "tMiNaocDZvndPiVILavpj6UlZodpyFSw97BWO932geo"
export const CLIENT_ID = process.env.NODE_ENV === 'development' ? CLIENT_ID_DEVELOPMENT : CLIENT_ID_PRODUCTION

const BASE_URL_DEVELOPMENT = "http://localhost:3000/"
const BASE_URL_PRODUCTION = "https://smart-home-dec.herokuapp.com/"
export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION
