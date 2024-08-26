import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicService } from '../music.service';
import { Music } from '../models/music';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.page.html',
  styleUrls: ['./music-detail.page.scss'],
})
export class MusicDetailPage implements OnInit {
  music: Music | undefined;

  constructor(
    private route: ActivatedRoute,
    private musicService: MusicService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.musicService.getMusic(id).subscribe(music => {
      this.music = music;
    });
  }
}

