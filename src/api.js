function createShow(data) {
  if (data !== null) {
    data.forEach((element) => {
      const row = document.querySelector('.row');
      const card = document.createElement('div');
      card.innerHTML = `<div class="p-3">
        <div class="card border">
          <img src="${element.image.medium}" class="card-img-top" alt="..."></img>
          <div class="card-body">
            <div class="d-flex flex-row justify-content-between">
            <h5 class="card-title">${element.name}</h5>
            <div class="d-flex flex-column">
              <i id = "like${element.id}" class="far fa-heart"></i>
              <span><span id= "span${element.id}"></span> likes</span>
            </div>
            </div>
            <div class="d-flex flex-column justify-content-between">
            <a href="#" class="btn btn-outline-dark m-3">comments</a>
            <a href="#" class="btn btn-outline-dark m-2">Reservration</a>
          </div>
          </div>
        </div>
      </div>`;
      row.appendChild(card);
    });
  }
}

function createLike(data) {
  data.forEach((element) => {
    document.getElementById(`span${element.item_id}`).innerText = element.likes;
  });
}

async function getData() {
  await fetch('https://api.tvmaze.com/shows/2/episodes')
    .then((response) => response.json())
    .then((data) => {
      createShow(data);
    });
}

async function getLike() {
  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YMwyLkvjjcipUxm8wYhP/likes/')
    .then((response) => response.json())
    .then((data) => {
      createLike(data);
    });
}

// async function AddLike(item_id) {
//   const data = { item_id };
//   await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YMwyLkvjjcipUxm8wYhP/likes/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),
//   }).then((response) => response.json())
//     .then(() => {

//     });
// }

export { getData, getLike };