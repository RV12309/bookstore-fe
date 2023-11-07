import { Component } from '@angular/core';
import { UploadEvent } from "primeng/fileupload";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent {
  public uploadedFiles: any[] = [];
  onUpload(event:UploadEvent) {
    // for(let file of event.files) {
    //     this.uploadedFiles.push(file);
    // }

    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
}
}
