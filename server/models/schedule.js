module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Schedule", // 테이블의 이름을 지정합니다.
    {
      account: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      content: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      location: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      time: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      etc: {
        type: DataTypes.STRING(1000),
        allowNull: true,
      },
      clock: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
      timestamps: false,
    }
  );
};
