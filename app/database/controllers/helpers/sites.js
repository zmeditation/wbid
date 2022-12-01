"use strict";
module.exports = (sequelize, DataTypes) => {
    const Sites = sequelize.define(
        "Sites",
        {
            domain: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {}
    );

    Sites.associate = function (models) {
       // Sites.belongsTo(models.User);
      //  Sites.hasMany(models.Configs);
    };

    return Sites;
};
