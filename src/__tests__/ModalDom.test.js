import ModalDom from '../ModalDom.js';
import Involvement from '../__mocks__/Involvement.js';

describe('Testing number counter', () => {
  test('Testing with a mock input of length 4', () => {
    Involvement.getComments(28).then((comments) => {
      const numberOfComments = ModalDom.getNumberOfComments(comments);
      expect(numberOfComments).toBe(4);
    });
  });

  test('Testing with a mock input of length 3', () => {
    Involvement.getComments(29).then((comments) => {
      const numberOfComments = ModalDom.getNumberOfComments(comments);
      expect(numberOfComments).toBe(3);
    });
  });
});
