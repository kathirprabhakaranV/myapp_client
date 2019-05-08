import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../super-admin.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  title = '';
  content = '';
  formData: any;

  constructor(private apiService: SuperAdminService) { }

  ngOnInit() {
  }

  uploadedFile(event: any): void{
    this.formData = new FormData();
    if(event.target.files.length > 0){
      this.formData.append('file', event.target.files[0]);
    }
  }

  cancelProduct(): any{
    this.title = '';
    this.content = '';
    this.formData = new FormData();
  }

  save(): void {
    if(this.title && this.content) {
      this.formData.append('title', this.title);
      this.formData.append('content', this.content);
      this.apiService.saveFile(this.formData).subscribe(
        (data: any) => {
          this.cancelProduct();
          console.log(data);
        },
        (error: any) => {
          console.log(error);
        },
      );
    }
  }

}
