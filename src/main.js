const { docker } = require("./docker");

const main = async () => {
  try {
    console.log(docker);
    const containers = await docker.listContainers();
    console.log(JSON.stringify(containers, null, 2));
  } catch (error) {
    console.log(error);
  }
};

main();
