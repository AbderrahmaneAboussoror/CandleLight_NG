import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import * as MediasActions from "../../store/actions";
import {AppStateInterface} from "../../../../types/app-state.interface";
import {Observable} from "rxjs";
import {isLoadingSelector} from "../../store/selectors";

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent implements OnInit{
  isLoading$: Observable<boolean>;
  constructor(private store: Store<AppStateInterface>) {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
  }
  ngOnInit() {
    this.store.dispatch(MediasActions.getMedias());
    this.isLoading$.subscribe({
      next: val => {
        console.log(val);
      }
    })
  }
}
