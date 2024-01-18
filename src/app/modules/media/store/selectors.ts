import {createSelector} from "@ngrx/store";
import {AppStateInterface} from "../../../types/app-state.interface";

export const selectFeature = (state: AppStateInterface) => state.medias;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
)
