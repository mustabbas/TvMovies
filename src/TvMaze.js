export default class TvMaze {
  static #ROOT_URL = 'https://api.tvmaze.com';

  static #SHOW_ID = '2';

  static getEpisodes = async () => {
    const url = `${this.#ROOT_URL}/shows/${this.#SHOW_ID}/episodes`;
    const response = await fetch(url);
    return response.json();
  };

  static getEpisode = async (episodeId) => {
    const episodes = await this.getEpisodes();
    return episodes.find((episode) => episode.id === episodeId);
  };
}
