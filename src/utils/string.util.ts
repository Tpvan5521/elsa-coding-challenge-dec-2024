import { version as uuidVersion } from "uuid";
import { validate as uuidValidate } from "uuid";

export const isValidString = (str: any): str is string => {
  if (typeof str !== "string") return false;
  if (!str.trim().length) return false;
  return true;
};

export const isUuidv4 = (uuid: any) => {
  return uuidValidate(uuid) && uuidVersion(uuid) === 4;
};
