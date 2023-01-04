const { readFileSync } = require("fs");
const Docker = require("dockerode");
const isWin = process.platform === "win32";
let socketPath = isWin ? "//./pipe/docker_engine" : "/var/run/docker.sock";
socketPath = process.env.DOCKER_SOCKET_PATH || socketPath;

let dockerOptions = {};

const { SSH_HOST, SSH_KEY_PATH, SSH_USERNAME } = process.env

if (SSH_HOST && SSH_KEY_PATH && SSH_USERNAME) {
    const key = readFileSync(SSH_KEY_PATH, "ascii")
    dockerOptions = {
        username: SSH_USERNAME,
        host: SSH_HOST,
        protocol: "ssh",
    }
    dockerOptions.sshOptions = {
        host: SSH_HOST,
        privateKey: key,
    }
}

const docker = new Docker(dockerOptions);

module.exports = { docker };
