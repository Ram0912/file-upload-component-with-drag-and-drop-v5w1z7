import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadFormComponent } from './file-upload-form/file-upload-form.component';
import { FileUploadModalComponent } from './file-upload-modal/file-upload-modal.component';
import { FileUploadFetchComponent } from './file-upload-fetch/file-upload-fetch.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { DirectivesModule } from '../directives/directives.module';


@NgModule({
  declarations: [
    FileUploadFormComponent,
    FileUploadModalComponent,
    FileUploadFetchComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DirectivesModule,
    MatSnackBarModule,
    MatCardModule
  ],
  exports: [
    FileUploadFormComponent,
    FileUploadModalComponent,
    FileUploadFetchComponent
  ],
  entryComponents: [
    FileUploadModalComponent
  ]
})
export class FileUploadModule {}
