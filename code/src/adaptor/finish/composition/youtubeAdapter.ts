import { MediaProvider } from './spotifyAPI';
import { Youtube } from './youtubeAPI';

export class YoutubeAdapter implements MediaProvider {
  private youtube = new Youtube();

  connect(): string {
    return this.youtube.connect();
  }
  getPlaylist(): string[] {
    const youtubePlaylist = this.youtube.getMusicLibrary();
    return youtubePlaylist.map((music) => {
      return music.name;
    });
  }
}
