import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router'; 
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model'; 

@Component({
  selector: 'app-albums',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false; 

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.albumService.getAlbums().subscribe((data) => {
      this.albums = data;
      this.loaded = true;
    });
  }

  deleteAlbum(id: number): void {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums = this.albums.filter(a => a.id !== id);
    });
  }
}