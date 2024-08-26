import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Music } from './models/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private apiUrl = 'http://localhost:3000/musics';

  constructor(private http: HttpClient) { }

  getMusics(): Observable<Music[]> {
    return this.http.get<Music[]>(this.apiUrl);
  }

  getMusic(id: number): Observable<Music> {
    return this.http.get<Music>(`${this.apiUrl}/${id}`);
  }
}
