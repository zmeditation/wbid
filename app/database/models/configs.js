"use strict";
module.exports = (sequelize, DataTypes) => {
  const Configs = sequelize.define(
    "Configs",
    {
      configname: DataTypes.STRING,
      typeOfConfig: DataTypes.STRING,
      sizes: DataTypes.STRING,
      tags: DataTypes.JSON,
      inventory: DataTypes.JSON,
      config: DataTypes.JSON,
      UserId: DataTypes.INTEGER,
      SiteId: DataTypes.INTEGER
    },
    {}
  );
  Configs.associate = function(models) {
    Configs.belongsTo(models.User);
    Configs.belongsTo(models.Site);
  };
  return Configs;
};
