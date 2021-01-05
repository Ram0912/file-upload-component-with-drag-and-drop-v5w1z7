import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

import {FileUploadService} from '../services/file-upload.service';

@Component({
  selector: 'file-upload-fetch',
  templateUrl: './file-upload-fetch.component.html',
  styleUrls: ['./file-upload-fetch.component.scss']
})
export class FileUploadFetchComponent implements OnInit {

  @Input() parentForm: FormGroup;
  fileUploadId: any;
  
  @Output() afterSelectionMethod: EventEmitter<any[]> = new EventEmitter();


  constructor(private _snackBar: MatSnackBar, private _service: FileUploadService, private modalRef: MatDialogRef<any>) { }

  ngOnInit() {
    this.fileUploadId = Object.keys(this.parentForm.controls)[0];
    this.parentForm.addControl(this.fileUploadId, new FormControl(''));
  }

  onFilesChange(f,from){
    debugger;
    this._snackBar.open(f.length + " File(s) selected!", null, {
        duration: 2000,
      });
      
    this._service.afterMethodFileSelect.next(f);
    this.modalRef.close();
  }

  check(){
    return this.parentForm.get("uploadFormId").value;
  }

}
