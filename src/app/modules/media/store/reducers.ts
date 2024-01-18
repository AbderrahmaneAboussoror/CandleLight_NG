import {MediaStateInterface} from "../types/media-state.interface";
import * as MediasActions from "./actions";
import {createReducer, on} from "@ngrx/store";

export const initialState: MediaStateInterface = {
  isLoading: false,
  medias: [],
  error: null
};

export const reducers = createReducer(
  initialState,
  on(MediasActions.getMedias, (state) => ({...state, isLoading: true}))
);
