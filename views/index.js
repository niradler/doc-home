const axios = require("axios");
const { docker } = require("../src/docker");

module.exports = {
  loader: async (req, reply) => {
    const containers = await docker.listContainers();
    const homepageContainers = containers.filter(
      (container) =>
        container.Labels["homepage.show"] === "true" ||
        container.Labels["homepage.show"] === true
    );
    const res = await axios.get("https://api.ipify.org?format=json");

    return { containers: homepageContainers, ip: res.data.ip };
  },
};
