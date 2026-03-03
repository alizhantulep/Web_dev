import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AlbumService } from '../../services/album.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.albumService.getAlbum(id).subscribe((data) => {
      this.album = data;
      this.loaded = true;
    });
  }

  saveTitle(): void {
    this.albumService.updateAlbum(this.album).subscribe({
      next: (updatedAlbum) => {
        alert('Album title updated successfully!');
        this.album = updatedAlbum;
      },
      error: (err) => console.error('Failed to update album', err)
    });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}