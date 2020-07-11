module.exports = function (sequelize, DataTypes) {
  const AreaEnvParamDay = sequelize.define("area_env_param_days", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    area_id: {
      type: DataTypes.STRING(55),
    },
    area: {
      type: DataTypes.STRING(255),
    },
    tem: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    hum: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    pm_25: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    no: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    co: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    co2: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    aqi: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    datetime: {
      type: DataTypes.DATE,
    },
    lat: {
      type: DataTypes.STRING(45),
    },
    long: {
      type: DataTypes.STRING(45),
    },
  });

  return AreaEnvParamDay;
};
