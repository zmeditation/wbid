"use strict";
module.exports = (sequelize, DataTypes) => {
    const Logs = sequelize.define(
        "Logs",
        {
            config_id: DataTypes.INTEGER,
            date: DataTypes.DATE,
            event: DataTypes.STRING,
            user: DataTypes.STRING,
            bidders: DataTypes.ARRAY(DataTypes.STRING),
            settings: DataTypes.JSON,
            addons: DataTypes.ARRAY(DataTypes.STRING),
            config_name: DataTypes.STRING
        },
        {
            tableName: "Logs",
            timestamps: false
        }
    );

    return Logs;
};
