const CLIENT_ID_DEVELOPMENT = "h4IVgOQaQJ6QJfbA_Au6Pd0TNLa27bp8P01FMqzYM2s"
const CLIENT_ID_PRODUCTION = "tMiNaocDZvndPiVILavpj6UlZodpyFSw97BWO932geo"
export const CLIENT_ID = process.env.NODE_ENV === 'development' ? CLIENT_ID_DEVELOPMENT : CLIENT_ID_PRODUCTION

const BASE_URL_DEVELOPMENT = "http://192.168.1.36:3000/"
const BASE_URL_PRODUCTION = "https://smart-home-dec.herokuapp.com/"
export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION

const WEBSOCKET_ENDPOINT_DEVELOPMENT = "ws://192.168.1.36:3000/cable/"
const WEBSOCKET_ENDPOINT_PRODUCTION = "wss://smart-home-dec.herokuapp.com/cable/"
export const WEBSOCKET_ENDPOINT = process.env.NODE_ENV === 'development' ? WEBSOCKET_ENDPOINT_DEVELOPMENT : WEBSOCKET_ENDPOINT_PRODUCTION