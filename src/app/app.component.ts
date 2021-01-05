import { Component } from '@angular/core';

import { FormGroup, FormControl, Form, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  showImage = true;

  fileUploadFormGroup: FormGroup = new FormGroup({
    formID: new FormControl('fileUploadFormGroup'),
    fileUploadID: new FormControl(''),
    itemDef: new FormControl('')
  });
}
