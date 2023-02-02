// const CLIENT_ID_DEVELOPMENT = "mAdgCP-JjVcvWsn9-W-ugU1nUtTPMXe-pI5ismA5TnM"
const CLIENT_ID_DEVELOPMENT = "Te4030ZzXjxUSSrgJWlmSHFoV9mNDKELin99hi9klIw"
const CLIENT_ID_PRODUCTION = "Te4030ZzXjxUSSrgJWlmSHFoV9mNDKELin99hi9klIw"
export const CLIENT_ID = process.env.NODE_ENV === 'development' ? CLIENT_ID_DEVELOPMENT : CLIENT_ID_PRODUCTION

// const BASE_URL_DEVELOPMENT = "http://192.168.0.103:3000/"
// TODO change url to development
const BASE_URL_DEVELOPMENT = "https://smart-home-dec.herokuapp.com/"
const BASE_URL_PRODUCTION = "https://smart-home-dec.herokuapp.com/"
export const BASE_URL = process.env.NODE_ENV === 'development' ? BASE_URL_DEVELOPMENT : BASE_URL_PRODUCTION

// TODO change url to development
// const WEBSOCKET_ENDPOINT_DEVELOPMENT = "ws:// 192.168.0.103:3000/cable/"
const WEBSOCKET_ENDPOINT_DEVELOPMENT = "ws://192.168.1.41:81/"
const WEBSOCKET_ENDPOINT_PRODUCTION = "ws://192.168.1.41:81/"
export const WEBSOCKET_ENDPOINT = process.env.NODE_ENV === 'development' ? WEBSOCKET_ENDPOINT_DEVELOPMENT : WEBSOCKET_ENDPOINT_PRODUCTION