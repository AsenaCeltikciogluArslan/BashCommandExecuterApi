const { executeCommands } = require('../controllers/commandController')
const postSpy = jest.fn();

jest.doMock('express', () => {
  return {
    Router() {
      return {
        post: postSpy,
      };
    },
  };
});

describe('should test routes', () => {
  test('should test posts', () => {
    require('../routes/routes');
    expect(postSpy).toHaveBeenCalledWith('/executeCommand', executeCommands);
  });
});