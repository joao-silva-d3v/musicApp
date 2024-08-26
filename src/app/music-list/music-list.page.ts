import { Component, OnInit } from '@angular/core';
import { MusicService } from '../music.service';
import { Music } from '../models/music';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
export class MusicListPage implements OnInit {
  musics: Music[] = [];

  constructor(private musicService: MusicService) { }

  ngOnInit() {
    this.musicService.getMusics().subscribe(musics => {
      this.musics = musics;
    });
  }
}
