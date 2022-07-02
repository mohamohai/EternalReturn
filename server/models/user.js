module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'user', // 테이블의 이름을 지정합니다.
      {
        account: {
            type: DataTypes.STRING(20),
            allowNull : true
        },
        password: {
            type: DataTypes.STRING(1000),
            allowNull : true
        },
        name: {
            type: DataTypes.STRING(40),
            allowNull : true
        },
        image: {
            type: DataTypes.STRING(1000),
            allowNull : true
        },
        birthday: {
            type: DataTypes.STRING(10),
            allowNull : true
        },
        gender: {
            type: DataTypes.STRING(4),
            allowNull : true
        },
        job: {
            type: DataTypes.STRING(64),
            allowNull : true
        }, 
      },
      {
        charset: 'utf8',
        collate: 'utf8_general_ci',
        timestamps: false,
      }
  )};