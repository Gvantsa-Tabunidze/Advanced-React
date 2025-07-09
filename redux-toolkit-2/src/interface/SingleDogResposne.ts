import type { IDog } from "./dogInterface";

export interface ISingleDogAPIResponse {
  data: IDog;
  links: {
    self: string;
  };
}