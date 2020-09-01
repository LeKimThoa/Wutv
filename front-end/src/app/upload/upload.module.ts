import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { UploadComponent } from './upload.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { UploaderComponent } from './uploader/uploader.component';
import { UploadTaskComponent } from './upload-task/upload-task.component';


@NgModule({
  declarations: [UploadComponent, UploaderComponent, UploadTaskComponent],
  imports: [
    CommonModule,
    UploadRoutingModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class UploadModule { }
