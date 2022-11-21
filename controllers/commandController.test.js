const { executeCommands } = require('./commandController');
const childprocess = require('child_process');

childprocess.exec = jest.fn()
const response = {
  json: jest.fn().mockReturnThis(),
  status: jest.fn().mockReturnThis(),
};

function callback(error, data) {
  if (error) {
    done(error);
    return;
  }
  try {
    expect(response.status).toHaveBeenCalledWith(200);
    done();
  }
  catch (error) {
    done(error);
  }
}

describe('should test executeCommands method', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  test('#executeCommands succeeds', async () => {
 

    const request = {
      "body": {
        "command": "node",
        "parameters": "--version",
        "userID": 1000
      }
    };
 
    await executeCommands(request, response, callback);
  });

  test('#executeCommands fails', async () => {
    const request = {
      "body": {
        "command": "node",
        "parameters": "--version",
        "userID": 0
      }
    };

    await executeCommands(request, response, callback);
    expect(response.status).toHaveBeenCalledWith(400);
  });

  test('#executeCommands returns status code 400 due to null command parameter', async () => {
    const errorMessage = 'Command parameter cannot be null!';
    const request = {
      "body": {
        "command": null,
        "parameters": "--version",
        "userID": 1000
      }
    };

    await executeCommands(request, response);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith(errorMessage);
  });

  test('#executeCommands returns status code 400 due to null userID parameter', async () => {
    const errorMessage = 'UserID parameter cannot be null!';
    const request = {
      "body": {
        "command": "node",
        "parameters": "--version",
        "userID": null
      }
    };

    await executeCommands(request, response);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith(errorMessage);
  });

});