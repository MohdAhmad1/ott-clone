import { CONSTANTS } from "./Constants";

export function getTMDBImage(url: string) {
  return {
    uri: CONSTANTS.tmdbApiImgBaseURL + url,
  };
}
