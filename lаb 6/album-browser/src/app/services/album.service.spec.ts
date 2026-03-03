import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { AlbumService } from './album.service'; // Проверь, чтобы имя файла было верным

describe('AlbumService', () => {
  let service: AlbumService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlbumService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(AlbumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});