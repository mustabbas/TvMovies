import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { getData, getLike } from './api.js';
import Involvement from './involvement.js';
import './styles.css';
import TvMaze from './TvMaze.js';

const tvMaze = new TvMaze();
const involvement = new Involvement();
const modal = document.querySelector('#modal');

window.onload = () => {
  getData();
  getLike();

  modal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const episodeId = button.getAttribute('data-bs-episodeId');
    const modalBody = modal.querySelector('.modal-body');
    tvMaze.getEpisode(episodeId).then((episode) => {
      modalBody.innerHTML = `<section class="row g-0 justify-content-center text-center">
      <div class="justify-content-end mb-2">
      <button type="button" class="btn-close float-end" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="col-sm-11 col-lg-9 col-xl-6 mb-2">
      <img class="img-fluid" src="${episode.image.original}" alt="${episode.name}"></img>
      </div>
      <h2 class="mb-0 display-6">${episode.name}</h2>
      <div class="row row-cols-2 gy-1 mb-2 fw-bold">
      <span>S0${episode.season}E0${episode.number}</span>
      <span>Release: ${episode.airdate}</span>
      <span></span>
      <span>${episode.runtime} minutes</span>
      </div>
      ${episode.summary}
      </section>`;
      involvement.getComments(episode.id).then((comments) => {
        const commentSection = document.createElement('section');
        commentSection.innerHTML = `<div class="row justify-content-center">
        <h3 class="text-center">Comments (${comments.length})</h3>
        <div id="comment-list" class="col-sm-11 col-lg-10 col-xl-9"></div>
        </div>`;
        const commentList = commentSection.querySelector('#comment-list');
        comments.forEach((comment) => {
          const date = new Date(comment.creation_date);
          date.setDate(date.getDate() + 1);
          commentList.insertAdjacentHTML(
            'beforeend',
            `<p class="mb-1">${date.toLocaleDateString('es-co')} ${comment.username}: ${
              comment.comment
            }</p>`,
          );
        });
        modalBody.appendChild(commentSection);
      });
    });
  });
};
