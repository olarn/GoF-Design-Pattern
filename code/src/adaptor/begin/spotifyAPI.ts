export interface MediaProvider {
  connect(): string;
  getPlaylist(): string[];
}

export class SpotifyAPI implements MediaProvider {
  connect() {
    return 'Spotify';
  }

  getPlaylist(): string[] {
    return ['spotify.song1', 'spotify.song2', 'spotify.song3'];
  }
}
