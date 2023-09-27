import { SpotifyAPI } from "./spotifyAPI";
import { Youtube } from "./youtubeAPI";

export class YoutubeAdaptor extends Youtube implements SpotifyAPI {
    connect(): string {
        return super.connect();
    }
    getPlaylist(): string[] {
        const youtubePlaylist = super.getMusicLibrary();
        return youtubePlaylist.map((music) => {
            return music.name;
        });
    }
}