const fs = require('fs');
const util = require('util');
const exec = require('child_process').exec;
const logFile = fs.createWriteStream('log.txt', { flags: 'a' });
module.exports = { executeCommands }


/**
 * executes the command and parameters with the userID and logs the execution information into log.txt.
 * Returns the status code and the json response.
 *
 * @param {any} req request that holds all the parameters such as command,paramter and userID
 * @param {any} res response for the api call,consists json message and status code
 */
async function executeCommands(req, res) {
    const command = req.body.command;
    const parameters = req.body.parameters;
    const userID = req.body.userID;
    const reqTime = new Date().toUTCString();

    if (command == null) {
        res.status(400);
        res.json('Command parameter cannot be null!');
    }
    else if (userID == null) {
        res.status(400);
        res.json('UserID parameter cannot be null!');
    }
    else {
        try {
            let data = command;

            if (parameters != null) {
                data = command + " " + parameters;
            }

            const execStart = new Date();
            exec(data, { uid: userID }, () => {
                const execEnd = new Date();
                const runTime = (execEnd - execStart) / 100 + "secs";
                const logData = `Command: ${command}, Parameters: ${parameters}, UserID: ${userID}, RequestTime: ${reqTime}, RunTime: ${runTime.toString()}`;
                logFile.write(logData + '\n');
                res.status(200);
                res.json(logData);
            });
        }
        catch (error) {
            res.status(400);
            res.json(error.message);
        }
    }
}