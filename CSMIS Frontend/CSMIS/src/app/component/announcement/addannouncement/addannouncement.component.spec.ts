import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnnouncementComponent } from './addannouncement.component';



describe('addannouncementcomponent', () => {
  let component: AddAnnouncementComponent;
  let fixture: ComponentFixture<AddAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddAnnouncementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
