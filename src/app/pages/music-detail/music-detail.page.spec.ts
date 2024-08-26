import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MusicDetailPage } from './music-detail.page';

describe('MusicDetailPage', () => {
  let component: MusicDetailPage;
  let fixture: ComponentFixture<MusicDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
