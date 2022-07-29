import { BASE_URL, CLIENT_ID } from "../../constants/api";

export type AuthStateData = {
  username: string;
  token: string;
  tokenType: string;
  refreshToken: string;
  createdAt: number;
  expiresIn: number;
  isLoading: boolean;
};

export type AuthResponseData = {
  username: string;
  access_token: string;
  token_type: string;
  refresh_token: string;
  created_at: number;
  expires_in: number;
};
export type PasswordCredentials = { username: string; password: string };

export const loginWithPassword = async (credentials: PasswordCredentials) => {
  return sendAuthRequest(credentials, true);
};

export const signupWithPassword = async (credentials: PasswordCredentials) => {
  return sendAuthRequest(credentials, false);
};

export const isAuthenticated = (authData: AuthStateData) => {
  return authData.token && authData.createdAt + authData.expiresIn > Date.now();
};

const responseDataToAuthData = (data: AuthResponseData) =>
  ({
    username: data.username,
    token: data.access_token,
    tokenType: data.token_type,
    refreshToken: data.refresh_token,
    expiresIn: data.expires_in * 1000,
    createdAt: (data.created_at + 2 * 60 * 60) * 1000,
  } as AuthStateData);

const sendAuthRequest = async (
  credentials: PasswordCredentials,
  isLogin: boolean
) => {
  const URL = BASE_URL + (isLogin ? "oauth/token" : "users");
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...credentials,
      client_id: CLIENT_ID,
      grant_type: "password",
    }),
  });

  if (!response.ok) {
    const errorResponseData = await response.json();
    console.log(errorResponseData);
    throw new Error("Something went wrong, response not ok");
  }

  const data = await response.json();

  const authData = responseDataToAuthData({
    ...(isLogin ? data : data.user),
    username: credentials.username,
  });
  return authData;
};
