"use strict";
module.exports = (sequelize, DataTypes) => {
  const Site = sequelize.define(
    "Site",
    {
      domain: DataTypes.STRING,
      UserId: DataTypes.INTEGER,
      adapters: DataTypes.ARRAY(DataTypes.STRING),
      disabled: DataTypes.BOOLEAN
    },
    {
      tableName: "Sites",
      timestamps: true
    }
  );
  Site.associate = function(models) {
    Site.hasMany(models.Configs);
    Site.belongsTo(models.User);
  };
  return Site;
};
