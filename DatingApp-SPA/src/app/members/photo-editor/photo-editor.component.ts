import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_models/Photo';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/_services/auth.service';
 

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
@Input() photos: Photo[];

uploader: FileUploader;
hasBaseDropZoneOver = false;
baseUrl = environment.apiUrl;


  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.initialiseUploader();
  }

 fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initialiseUploader() {
    this.uploader = new FileUploader({
      url: this.baseUrl + 'user/' + this.authService.decodedToken.nameid + '/photos' , 
      authToken: 'Bearer ' + localStorage.getItem('token'),
      isHTML5 : true,
      allowedFileType: ['image'],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
  }
}
