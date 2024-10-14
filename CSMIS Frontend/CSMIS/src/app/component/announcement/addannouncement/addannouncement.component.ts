import { Component } from '@angular/core';
import { AnnouncementService } from '../../../services/announcement/announcement.service';
import { Announcement } from '../../../model/announcement';



@Component({
  selector: 'app-add-announcement',
  templateUrl: 'addannouncement.component.html'
})
export class AddAnnouncementComponent {
[x: string]: any;
  announcement: Announcement = {
    id: 0,
    title: '',
    message: '',
    createdDate: new Date(),
    filePath: ''
  };

  selectedFile!: File;

  constructor(private announcementService: AnnouncementService) { }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addAnnouncement(): void {
    this.announcementService.createAnnouncement(this.announcement, this.selectedFile).subscribe(() => {
      alert('Announcement created with file attached!');
    });
  }
}
