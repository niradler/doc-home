const { docker } = require("../../src/docker");

module.exports = {
  loader: async (req, reply) => {
    const containers = await docker.listContainers();

    return { containers };
  },
  actions: async (req, reply) => {
    switch (req.body.action) {
      case "delete":
        const deleted = await db.del(Number(req.params.id));
        if (!deleted) return reply.notFound();
        break;
      case "update":
        await db.update(Number(req.params.id), req.body.title);
        break;
      default:
        return reply.notFound();
    }

    reply.redirect("/apps");
  },
};
