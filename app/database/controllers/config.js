const { Configs } = require("../models");

exports.ConfigsDB = class {
  constructor() {}

  static create({ tags, inventory, config, user, configname, site, typeOfConfig}) {
    return Configs.create({
      configname,
      typeOfConfig,
      sizes: `${config.size.width}x${config.size.height}`,
      tags,
      inventory,
      config,
      UserId: user.id,
      SiteId: site.id
    });
  }

  static get(id) {
    return Configs.findOne({
      where: { id }
    });
  }

  static update(id, config, sizes, tags) {
    return Configs.update({ config, sizes, tags }, { where: { id } });
  }

  static updatePB(id, config, tags, sizes) {
    return Configs.update({ config, tags, sizes }, { where: { id } });
  }

  static delete(id) {
    return Configs.destroy({
      where: { id }
    });
  }
};
