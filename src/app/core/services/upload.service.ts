import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUD_NAME } from "../constants/common.constant";

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'https://freeimage.host/api/1/upload/?key=6399';

  constructor(private http:HttpClient) { }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('source', 'angular-app'); // Optional, you can change this as needed
    formData.append('file', file);
    return this.http.post(this.apiUrl, formData);
  }

  initCloudinary(config?:Object){
    return new Cloudinary({cloud: {cloudName: CLOUD_NAME}})
  }
}
