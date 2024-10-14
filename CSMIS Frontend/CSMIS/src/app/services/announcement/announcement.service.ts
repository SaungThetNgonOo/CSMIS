import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcement } from '../../model/announcement';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  private apiUrl = 'http://localhost:8080/api/announcements';

  constructor(private http: HttpClient) {}

  createAnnouncement(announcement: Announcement, file: File): Observable<Announcement> {
    const formData = new FormData();
    formData.append('title', announcement.title);
    formData.append('message', announcement.message);
    formData.append('createdDate', announcement.createdDate.toISOString());
    if (file) {
      formData.append('file', file);
    }

    return this.http.post<Announcement>(`${this.apiUrl}/createAnnouncement`, formData);
  }

  updateAnnouncement(id: number, updatedAnnouncement: Announcement): Observable<Announcement> {
    return this.http.put<Announcement>(`${this.apiUrl}/updateAnnouncement/${id}`, updatedAnnouncement);
  }
  getAllAnnouncements(): Observable<Announcement[]> {
    return this.http.get<Announcement[]>(`${this.apiUrl}/showAnnouncement`);
  }
 }
