import {MediaInterface} from "./media.interface";

export interface MediaStateInterface {
  isLoading: boolean;
  medias: MediaInterface[];
  error: string | null;
}
