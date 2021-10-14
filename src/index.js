import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AddLike, fetchCount, getData, getLike } from './api.js';
import Involvement from './Involvement.js';
import ModalDom from './ModalDom.js';
import './styles.css';
import TvMaze from './TvMaze.js';

const modal = document.querySelector('#modal');
const modalBody = modal.querySelector('.modal-body');

window.onload = () => {
  getData().then(() => {
    const likeBtn = document.querySelectorAll('.like');
    likeBtn.forEach((element) => {
      element.addEventListener('click', () => {
        const id = element.id.replace('like', '');
        AddLike(id).then(() => {
          getLike();
        });
      });
    });
  });
  fetchCount().then((data) => {
    document.getElementById('showCounter').innerText = `TV Show(${data})`;
  });
  getLike();
  modal.addEventListener('show.bs.modal', (event) => {
    const button = event.relatedTarget;
    const episodeId = Number(button.getAttribute('data-bs-episodeId'));
    ModalDom.insertFormSection(modalBody, episodeId);
    TvMaze.getEpisode(episodeId).then((episode) => {
      ModalDom.insertDetailsSection(modalBody, episode);
      Involvement.getComments(episodeId).then((comments) => {
        ModalDom.insertCommentSection(modalBody).insertComments(modalBody, comments);
      });
    });
  });
};
