export default class Involvement {
  static getComments = (id) => {
    let comments = {};
    if (id === 28) {
      comments = [
        {
          username: 'Jane',
          comment: 'Hello',
          creation_date: '2021-10-12',
        },
        {
          username: 'Alex',
          comment: 'I love this episode!',
          creation_date: '2021-10-12',
        },
        {
          username: 'Dico',
          comment: 'Pretty good',
          creation_date: '2021-10-13',
        },
        {
          username: 'Anna',
          comment: 'Average',
          creation_date: '2021-10-13',
        },
      ];
    } else if (id === 29) {
      comments = [
        {
          creation_date: '2021-10-13',
          username: 'Dico',
          comment: 'Pretty awesome',
        },
        {
          username: 'Alex',
          creation_date: '2021-10-13',
          comment: 'Nice',
        },
        {
          creation_date: '2021-10-13',
          username: 'Anna',
          comment: 'Also average',
        },
      ];
    }
    return Promise.resolve(comments);
  };
}
