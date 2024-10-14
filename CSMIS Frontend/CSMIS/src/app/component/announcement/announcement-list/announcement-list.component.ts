import { Component, OnInit } from '@angular/core';
import { Announcement } from '../../../model/announcement';
import { AnnouncementService } from '../../../services/announcement/announcement.service';


@Component({
  selector: 'app-announcement-list',
  templateUrl: './announcement-list.component.html',
})
export class AnnouncementListComponent implements OnInit {
  announcements: Announcement[] = [];

  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.fetchAnnouncements();
  }

  fetchAnnouncements(): void {
    this.announcementService.getAllAnnouncements().subscribe(
      (data) => {
        this.announcements = data;
      },
      (error) => {
        console.error('Error fetching announcements:', error);
      }
    );
  }
}
