const createShow = (data) => {
  if (data) {
    data.forEach((element) => {
      const cardWrapper = document.querySelector('.card-wrapper');
      const card = document.createElement('div');
      card.innerHTML = `<div id = "card${element.id}" class="p-3">
        <div class="card border">
          <img src="${element.image.medium}" class="card-img-top" alt="${element.name}"></img>
          <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <div class="d-flex flex-column align-items-center">
              <a href = "#card${element.id}" id = "like${element.id}" class = "like"><i class="far fa-heart"></i></a>
              <span><span id= "span${element.id}"></span> likes</span>
            </div>
            </div>
            <div class="d-flex flex-column justify-content-between">
            <button class="btn btn-outline-dark m-3" data-bs-toggle="modal" data-bs-target="#modal" data-bs-episodeId="${element.id}">Comments</button>
            <a href="#" class="btn btn-outline-dark m-2">Reservation</a>
          </div>
          </div>
        </div>
      </div>`;
      cardWrapper.appendChild(card);
    });
  }
};

const createLike = (data) => {
  if (data) {
    data.forEach((element) => {
      document.getElementById(`span${element.item_id}`).innerText = element.likes;
    });
  }
};

const getData = async () => {
  await fetch('https://api.tvmaze.com/shows/2/episodes')
    .then((response) => response.json())
    .then((data) => {
      createShow(data);
    });
};

const getLike = async () => {
  await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Oy4ygJ5mBEBnH4ExavgC/likes/',
  )
    .then((response) => response.json())
    .then((data) => {
      createLike(data);
    });
};

const fetchCount = async () => fetch(
  'https://api.tvmaze.com/shows/2/episodes',
)
  .then((response) => response.json())
  .then((data) => data.length);

const AddLike = async (itemId) => {
  const data = { item_id: itemId };
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Oy4ygJ5mBEBnH4ExavgC/likes/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response).then(() => {
    getLike();
  });
};

export {
  getData, getLike, AddLike, fetchCount,
};