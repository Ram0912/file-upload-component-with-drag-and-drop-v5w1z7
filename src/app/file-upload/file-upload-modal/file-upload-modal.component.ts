import { Component, OnInit, ViewChildren, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FileUploadFetchComponent } from '../file-upload-fetch/file-upload-fetch.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'file-upload-modal',
  templateUrl: './file-upload-modal.component.html',
  styleUrls: ['./file-upload-modal.component.css']
})
export class FileUploadModalComponent implements OnInit {

  @ViewChildren('childUpload') childUpload: FileUploadFetchComponent;
  @Output() selectionChange: EventEmitter<any[]> = new EventEmitter();

  constructor(private modalRef: MatDialogRef<any>) { }

  ngOnInit() {
  }

  fileUploadFormGroup: FormGroup = new FormGroup({
    uploadFormID: new FormControl('')
  });

  afterUploadFile(f: File[]){
    debugger;
  }

  fetchFilesFromComponent(files){
    this.modalRef.close();
  }

}
