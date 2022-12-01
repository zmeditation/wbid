"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: DataTypes.STRING,
      wbidType: DataTypes.ARRAY(DataTypes.STRING),
      HBSetupStatus: DataTypes.BOOLEAN,
      dashboardId: DataTypes.STRING,
      status: DataTypes.ARRAY(DataTypes.STRING),
      trialFrom: DataTypes.INTEGER,
      successAdsTxtCheck: DataTypes.BOOLEAN
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Site);
    User.hasMany(models.Configs);
  };
  return User;
};
