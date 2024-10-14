import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Announcement } from '../../../model/announcement';
import { AnnouncementService } from '../../../services/announcement/announcement.service';

@Component({
  selector: 'app-update-announcement',
  templateUrl: './updateannouncement.component.html'
})
export class UpdateAnnouncementComponent implements OnInit {
  announcementId!: number;
  updatedAnnouncement: Announcement = {
    id: 0,
    title: '',
    message: '',
    createdDate: new Date(),
    filePath: ''
  };

  constructor(
    private route: ActivatedRoute,
    private announcementService: AnnouncementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.announcementId = Number(this.route.snapshot.paramMap.get('id'));
    // Here you might want to load the current announcement data to prefill the form
    // this.loadAnnouncement(this.announcementId);
  }

  // loadAnnouncement(id: number): void {
  //   this.announcementService.getAnnouncementById(id).subscribe(
  //     (announcement) => {
  //       this.updatedAnnouncement = announcement;
  //     }
  //   );
  // }

  update(): void {
    this.announcementService.updateAnnouncement(this.announcementId, this.updatedAnnouncement)
      .subscribe({
        next: (response) => {
          console.log('Announcement updated successfully!', response);
          // Navigate back to announcements list or wherever you want
          this.router.navigate(['/announcements']);
        },
        error: (error) => {
          console.error('There was an error updating the announcement!', error);
        }
      });
  }
}
