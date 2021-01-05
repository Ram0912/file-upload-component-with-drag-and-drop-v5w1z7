import { Component, OnInit, Injector, Input } from '@angular/core';
import { state, style, transition, animate, trigger } from '@angular/animations';
import { FormGroup } from "@angular/forms";
import { FileUploadModalComponent } from "../file-upload-modal/file-upload-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatSnackBar } from "@angular/material/snack-bar";

import { FileUploadService } from "../services/file-upload.service";

@Component({
  selector: "file-upload-form",
  templateUrl: "./file-upload-form.component.html",
  styleUrls: ["./file-upload-form.component.css"],
  animations: [
    trigger("EnterLeave", [
      state("flyIn", style({ transform: "translateX(0)" })),
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("0.5s 300ms ease-out")
      ]),
      transition(":leave", [
        animate("0.3s ease-out", style({ transform: "translateX(100%)" }))
      ])
    ])
  ]
})

export class FileUploadFormComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() placeHolderText: string;
  @Input() showImage: boolean = false;

  public itemIDSpesification;
  public itemDefSpesification;

  public files: File[] = [];

  constructor(
    private _service: FileUploadService,
    private modal: MatDialog,
    private _snackBar: MatSnackBar
  ) {
    _service.afterMethodFileSelect.subscribe(b => {
      for (var i = 0; i < b.length; i++) {
        this.files.push(b[i]);
      }
    });
  }

  uploadFile(file) {
    console.log(file);
    this._snackBar.open("Upload function was triggered! - " + file.name, null, {
      duration: 2000
    });
  }

  deleteFile(index) {
    this.files.splice(index, 1);
    this._snackBar.open("File was deleted!", null, {
      duration: 2000
    });
  }

  ngOnInit() {
    this.itemIDSpesification = Object.keys(this.parentForm.controls)[1];
    this.itemDefSpesification = Object.keys(this.parentForm.controls)[2];
  }

  changeFile(f) {
    debugger;
  }

  openModal(e: Event) {
    const dialogRef = this.modal.open(FileUploadModalComponent, {
      panelClass: "modal-md",
      height: "400px",
      width: "50%"
    });
  }
}
