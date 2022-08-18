import { BASE_URL } from "@constants/api";
import { camelCaseToSnakeCaseStr } from "@services/conversions";

export const fetchAuthorized = (action: string, token: string) =>
  fetch(BASE_URL + "api/v1/" + camelCaseToSnakeCaseStr(action), {
    method: "POST",
    headers: {
      Authorization: token,
    },
  });
