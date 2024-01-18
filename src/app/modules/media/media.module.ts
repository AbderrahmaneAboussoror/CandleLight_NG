import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediaRoutingModule } from './media-routing.module';
import { MediaComponent } from './components/media/media.component';
import {StoreModule} from "@ngrx/store";
import { reducers } from "./store/reducers"

@NgModule({
  declarations: [
    MediaComponent
  ],
  exports: [
    MediaComponent
  ],
  imports: [
    CommonModule,
    MediaRoutingModule,
    StoreModule.forFeature('medias', reducers)
  ]
})
export class MediaModule { }
