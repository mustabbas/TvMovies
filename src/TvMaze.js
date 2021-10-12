export default class TvMaze {
  #ROOT_URL = 'https://api.tvmaze.com';

  #SHOW_ID = '2';

  getEpisodes = async () => {
    const url = `${this.#ROOT_URL}/shows/${this.#SHOW_ID}/episodes`;
    const response = await fetch(url);
    return response.json();
  };

  getEpisode = async (index) => {
    const episodes = await this.getEpisodes();
    return episodes[index];
  };
}
