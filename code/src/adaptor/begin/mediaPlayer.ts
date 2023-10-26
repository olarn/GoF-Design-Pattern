import { MediaProvider, SpotifyAPI } from "./spotifyAPI";

export class MediaPlayer {
  private provider?: MediaProvider;

  setProvider(provider: MediaProvider) {
    this.provider = provider;
  }

  connect(): string {
    if (!this.provider) {
      return "";
    }
    return `Connected to ${this.provider!.connect()}`;
  }

  getPlaylist(): string[] {
    if (!this.provider) {
      return [];
    }
    return this.provider!.getPlaylist();
  }

  play(song: string): string {
    return "Playing " + song;
  }
}
