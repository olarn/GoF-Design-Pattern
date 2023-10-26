export interface YoutubeAPI {
  connect(): string;
  getMusicLibrary(): YoutubeMusic[];
}

export class Youtube implements YoutubeAPI {
  connect() {
    return "Youtube";
  }

  getMusicLibrary(): YoutubeMusic[] {
    return [
      { name: "youtube.song1" },
      { name: "youtube.song2" },
      { name: "youtube.song3" },
    ];
  }
}

export class YoutubeMusic {
  name: string = "";
}
